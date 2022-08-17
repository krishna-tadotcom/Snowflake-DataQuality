import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import FormContainer from "../FormContainer";

import "./validation.scss";

const EditValidation = () => {
  const navigate = useNavigate();
  const [inArray, setInArray] = useState([]);
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({
    projectName: "",
    dataset: "",
    exp: "",
    col: "",
  });

  const { id } = useParams();
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("savedData")).filter(
      (d) => d.id === +id
    );
    if (data) {
      setData({
        projectName: data[0].ProjectName,
        dataset: data[0].Dataset,
        exp: data[0].Expectation,
        col: data[0].column,
      });
      setInput1(data[0].inputs[0]);
      setInput2(data[0].inputs[1]);
    }
  }, []);

  const handleInputs = () => {
    // you can call the api for validate
    setLoad(true);

    setTimeout(() => {
      const existing = JSON.parse(localStorage.getItem("savedData"));

      const newOne = existing.map((p) =>
        p.id === +id
          ? {
              ...p,
              column: data.col,
              ProjectName: data.projectName,
              inputs: [input1, input2],
            }
          : p
      );

      localStorage.setItem("savedData", JSON.stringify(newOne));
      setInput1("");
      setInput2("");
      navigate("/validate");
    }, 3000);
  };

  useEffect(() => {
    document.querySelector(".cover").classList.add("tran");
  }, []);

  return (
    <div className="total">
      <div
        style={{
          padding: "50px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="cover"
      >
        <FormContainer>
          <Form>
            <p>Edit the data</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "20px",
                marginBottom: "10px",
              }}
            >
              <div style={{ textTransform: "capitalize" }}>
                {data.projectName}
              </div>
              <div style={{ textTransform: "capitalize" }}>{data.dataset}</div>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginLeft: "20px",
              }}
            >
              <div style={{ textTransform: "capitalize" }}>{data.exp}</div>
              <div style={{ textTransform: "capitalize" }}>{data.col}</div>
            </div>
            <div></div>
            <input
              type="number"
              value={input1}
              required
              onChange={(e) => {
                setInput1(e.target.value);
                console.log(e.target.value);
              }}
              autoComplete="off"
              style={{
                display: "block",
                margin: "20px",
                width: "100%",
                color: "black",
              }}
            />

            <input
              type="number"
              value={input2}
              onChange={(e) => {
                setInput2(e.target.value);
                console.log(e.target.value);
              }}
              autoComplete="off"
              style={{
                display: "block",
                margin: "20px",
                width: "100%",
                color: "black",
              }}
            />

            {input1 > 0 ? (
              input2 > 0 ? (
                !load ? (
                  <Button
                    variant="outlined"
                    style={{ marginLeft: "50px" ,textAlign:"center"}}
                    onClick={handleInputs}
                  >
                    Save
                  </Button>
                ) : (
                  <div className="loader m-auto"></div>
                )
              ) : (
                <Button
                  variant="outlined"
                  disabled
                  style={{ marginLeft: "50px", color: "red" }}
                >
                  Please Enter Inputs
                </Button>
              )
            ) : (
              <Button
                variant="outlined"
                style={{ marginLeft: "50px", color: "red" }}
                disabled
              >
                Please Enter Inputs
              </Button>
            )}
            <i
              className="fa-solid fa-xmark"
                onClick={(e)=>{
                    navigate('/validate')
                }}

              style={{
                position: "absolute",
                cursor:"pointer",
                color:"red",
                fontSize:"18px",
                top: "10px",
                right: "0",
              }}
            ></i>
          </Form>
        </FormContainer>
      </div>
    </div>
  );
};

export default EditValidation;
