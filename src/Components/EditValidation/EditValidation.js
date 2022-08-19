import { Button, TextField } from "@mui/material";
import { Input, Modal } from "antd";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import FormContainer from "../FormContainer";

import "./validation.scss";

const EditValidation = () => {
  const [showModal, setShowModal] = useState(false);
 
  const navigate = useNavigate();
  const [inArray, setInArray] = useState([]);
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [load, setLoad] = useState(false);
  const [data, setData] = useState({
    title:'',
    tag:"",
    dataQuality:"",
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
        dataQuality:data[0].dataQuality,
        tag:data[0].tag,
        title:data[0].tittle,
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
              tittle:data.title,
              dataQuality:data.dataQuality,
              tag:data.tag,
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

  // useEffect(() => {
  //   document.querySelector(".cover").classList.add("tran");
  // }, []);


  useEffect(() => {
   
        setShowModal(true)
    
 }, []);

  return (
    // <div className="total">
    //   <div
    //     style={{
    //       padding: "50px 0",
    //       display: "flex",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //     className="cover"
    //   >
    //     <FormContainer>
    //       <Form>
    //         <p>Edit the data</p>
    //         <div
    //           style={{
    //             display: "flex",
    //             justifyContent: "space-between",
    //             marginLeft: "20px",
    //             marginBottom: "10px",
    //           }}
    //         >
    //           <div style={{ textTransform: "capitalize" }}>
    //             {data.projectName}
    //           </div>
    //           <div style={{ textTransform: "capitalize" }}>{data.dataset}</div>
    //         </div>
    //         <div
    //           style={{
    //             display: "flex",
    //             justifyContent: "space-between",
    //             marginLeft: "20px",
    //           }}
    //         >
    //           <div style={{ textTransform: "capitalize" }}>{data.exp}</div>
    //           <div style={{ textTransform: "capitalize" }}>{data.col}</div>
    //         </div>
    //         <div></div>
    //         <input
    //           type="number"
    //           value={input1}
    //           required
    //           onChange={(e) => {
    //             setInput1(e.target.value);
    //             console.log(e.target.value);
    //           }}
    //           autoComplete="off"
    //           style={{
    //             display: "block",
    //             margin: "20px",
    //             width: "100%",
    //             color: "black",
    //           }}
    //         />

    //         <input
    //           type="number"
    //           value={input2}
    //           onChange={(e) => {
    //             setInput2(e.target.value);
    //             console.log(e.target.value);
    //           }}
    //           autoComplete="off"
    //           style={{
    //             display: "block",
    //             margin: "20px",
    //             width: "100%",
    //             color: "black",
    //           }}
    //         />

    //         {input1 > 0 ? (
    //           input2 > 0 ? (
    //             !load ? (
    //               <Button
    //                 variant="outlined"
    //                 style={{ marginLeft: "50px" ,textAlign:"center"}}
    //                 onClick={handleInputs}
    //               >
    //                 Save
    //               </Button>
    //             ) : (
    //               <div className="loader m-auto"></div>
    //             )
    //           ) : (
    //             <Button
    //               variant="outlined"
    //               disabled
    //               style={{ marginLeft: "50px", color: "red" }}
    //             >
    //               Please Enter Inputs
    //             </Button>
    //           )
    //         ) : (
    //           <Button
    //             variant="outlined"
    //             style={{ marginLeft: "50px", color: "red" }}
    //             disabled
    //           >
    //             Please Enter Inputs
    //           </Button>
    //         )}
    //         <i
    //           className="fa-solid fa-xmark"
    //             onClick={(e)=>{
    //                 navigate('/validate')
    //             }}

    //           style={{
    //             position: "absolute",
    //             cursor:"pointer",
    //             color:"red",
    //             fontSize:"18px",
    //             top: "10px",
    //             right: "0",
    //           }}
    //         ></i>
    //       </Form>
    //     </FormContainer>
    //   </div>
    // </div>
    <>
    <Modal
    title="Data validate"
    centered
    visible={showModal}
    onOk={() => {
      setShowModal(false);
      handleInputs()
      // showPop()
      navigate("/validate");
    }}
    onCancel={() => {
      setShowModal(false);
   
    setInput1('')
   
    setInput2('')
    // showPop()
      navigate("/validate");
    }}
    okText="Submit"
    cancelText="Reset"
  >
   <div style={{display:"flex",justifyContent:"space-between",width:"450px"}}>
   <label style={{display:"inline-block"}}><span style={{fontWeight:"600",fontSize:"16px",color:"black"}}>Dataset:</span> <span style={{textTransform:"capitalize",marginLeft:"5px"}}>{data.dataset}</span></label> 
   <label style={{display:"inline-block"}}><span style={{fontWeight:"600",fontSize:"16px",color:"black"}}>Column:</span><span style={{textTransform:"capitalize",marginLeft:"5px"}}>{data.col}</span></label> 
   </div>
   <br />
   <div style={{display:"flex",justifyContent:"space-between",width:"450px"}}>
   <label style={{display:"inline-block"}}><span style={{fontWeight:"600",fontSize:"16px",color:"black"}}>Expectation:</span>  <span style={{textTransform:"capitalize",marginLeft:"5px"}}>{data.exp}</span></label> 
   <label style={{display:"inline-block"}}><span style={{fontWeight:"600",fontSize:"16px",color:"black"}}>Format:</span> <span style={{textTransform:"capitalize",marginLeft:"5px"}}>{data.exp}</span></label> 
   </div>
   <hr />
   <p style={{display:"flex"}}>
   <label style={{fontWeight:"600",fontSize:"16px"}}>Test Name:  </label>
   <Input placeholder="Test Name..."  required style={{width:"380px"}} value={data.title}  onChange={e=>setData(p=>({...p,title:e.target.value}))}/>
    </p>
    <p>
    <label style={{fontWeight:"600",fontSize:"16px"}}>Data Quality:  </label>
   <Input placeholder="DataQuality Name..."  required style={{width:"180px"}}  value={data.dataQuality}   onChange={e=>setData(p=>({...p,dataQuality:e.target.value}))}/>
   <label style={{fontWeight:"600",fontSize:"16px",marginLeft:"2px"}}>Tag:  </label>
   <Input placeholder="Tag Name..."  required style={{width:"146px"}} value={data.tag}   onChange={e=>setData(p=>({...p,tag:e.target.value}))}/>
    
    
    </p>
    <p>
    <label style={{fontWeight:"600",fontSize:"16px"}}>Expectation Inputs:  </label>
   <Input placeholder="Inputs..." value={input1} required style={{width:"150px"}}   onChange={e=>setInput1(e.target.value)}/>
 
   <Input placeholder="Inputs"  value={input2}  required style={{width:"150px",marginLeft:"12px"}}   onChange={e=>setInput2(e.target.value)}/>
    
    
    </p>
    
  </Modal>
</>
  );
};

export default EditValidation;
