import { Button, TextField } from "@mui/material";
import { Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router";
import FormContainer from "../FormContainer";

import "./validation.scss";

const Validation = ({
  saveData,
  number,
  showPop,
  projectName,
  exp,
  col,
  dataset,
  setTitle,
  setDataQuality,
  setTag,
  tag,
  dataQuality,
  title,
}) => {
  const [inArray, setInArray] = useState([]);
  const [input1, setInput1] = useState("");

  const [load, setLoad] = useState(false);

  const handleInputs = () => {
    // you can call the api for validate
    setLoad(true);

    setTimeout(() => {
      setLoad(false);
      // calling saveData() which is in Home.js
      saveData(inArray);
    }, 3000);
  };

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (col !== "" && exp !== "") {
      setShowModal(true);
    }
  }, [col, exp]);

  const ArrayIn = (e) => {
    setInArray((prev) => [...prev, e.target.value]);
    setInput1("");
  };

  const deletion = (i) => {
    console.log(i);
    
    setInArray(inArray.filter((p,j)=>i!==j))
    
  };

  useEffect(() => {
    console.log(inArray);
  }, [inArray]);

  return (
    <>
      <Modal
        title="Data validate"
        centered
        visible={showModal}
        onOk={() => {
          setShowModal(false);
          handleInputs();
          setInput1("");
          setInArray([]);
          showPop();
          navigate("/validate");
        }}
        onCancel={() => {
          setShowModal(false);
          setInput1("");
          setInArray([]);
          showPop();
          navigate("/validate");
        }}
        okText="Submit"
        cancelText="Reset"
      >
        <div className="top"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "450px",
          }}
        >
          <label style={{ display: "inline-block" }}>
            <span
              style={{ fontWeight: "600", fontSize: "16px", color: "black" }}
            >
              Dataset:
            </span>{" "}
            <span style={{ textTransform: "capitalize", marginLeft: "5px" }}>
              {dataset}
            </span>
          </label>
          <label style={{ display: "inline-block" }}>
            <span
              style={{ fontWeight: "600", fontSize: "16px", color: "black" }}
            >
              Column:
            </span>
            <span style={{ textTransform: "capitalize", marginLeft: "5px" }}>
              {col}
            </span>
          </label>
        </div>
        <br />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "450px",
          }}
        >
          <label style={{ display: "inline-block" }}>
            <span
              style={{ fontWeight: "600", fontSize: "16px", color: "black" }}
            >
              Expectation:
            </span>{" "}
            <span style={{ textTransform: "capitalize", marginLeft: "5px" }}>
              {exp}
            </span>
          </label>
          <label style={{ display: "inline-block" }}>
            <span
              style={{ fontWeight: "600", fontSize: "16px", color: "black" }}
            >
              Format:
            </span>{" "}
            <span style={{ textTransform: "capitalize", marginLeft: "5px" }}>
              {exp}
            </span>
          </label>
        </div>
        <hr />
       <div className="bottom">
         <p style={{ display: "flex" }}>
          <label style={{ fontWeight: "600", fontSize: "16px" }}>
            Test Name:{" "}
          </label>
          <Input
            placeholder="Test Name..."
            required
            style={{ width: "380px" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </p>
        <p>
          <label style={{ fontWeight: "600", fontSize: "16px" }}>
            Data Quality:{" "}
          </label>
          <Input
            placeholder="DataQuality Name..."
            required
            style={{ width: "180px" }}
            value={dataQuality}
            onChange={(e) => setDataQuality(e.target.value)}
          />
          <label
            style={{ fontWeight: "600", fontSize: "16px", marginLeft: "2px" }}
          >
            Tag:{" "}
          </label>
          <Input
            placeholder="Tag Name..."
            required
            style={{ width: "146px" }}
            value={tag}
            onChange={(e) => setTag(e.target.value)}
          />
        </p>
        <p>
          <label style={{ fontWeight: "600", fontSize: "16px" }}>
            Expectation Inputs:
          </label>
          {inArray.length < number ? (
            <>
            <Input 
              placeholder="Inputs..."
              value={input1}
              required
              style={{ width: "65%",position:"relative" }}
              onBlur={ArrayIn}
              onChange={(e) => setInput1(e.target.value)}
            />
            <i
            class="fas fa-plus" style={{position:"absolute",right:"45px",top:"305px",cursor:"pointer",background:"skyblue",
            padding:"5px",borderRadius:"50%"
            }}
            
          ></i>
            </>
          ) : (
            <span style={{ marginLeft: "4px", fontWeight: "200px" }}>
              You have entered the required inputs
            </span>
          )}
        </p>
        <p>
          {inArray.map((i, index) => (
            <span
            
              style={{
                background: "rgb(114, 111, 111,0.3)",
                padding: "5px",
                color: "black",
                marginRight: "5px",
                cursor: "pointer",
                position:"relative"
              }}
              className="inputs"
              onClick={(e) => {
                deletion(index);
              }}
            >
              {i}
              <i className="fa-solid fa-xmark"
              style={{
                display:"none",
               position:"absolute",
                color:"white",
                fontSize:"8px",
                top:"-5px",
                right:"-2px",
                background:"red",
                padding:"2px",
                borderRadius:"50%"
          }}
          ></i>
            </span>
            
          ))}
          <span>
          
          </span>
        </p>
       </div>

      </Modal>
    </>
  );
};

export default Validation;
