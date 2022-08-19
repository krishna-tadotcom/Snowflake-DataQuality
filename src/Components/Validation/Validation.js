import { Button, TextField } from '@mui/material'
import { Input, Modal } from 'antd'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import FormContainer from '../FormContainer'

import './validation.scss'


const Validation = ({saveData,number,showPop,projectName,exp,col,dataset,setTitle,setDataQuality,setTag,tag,dataQuality,title}) => {
    const [inArray,setInArray] = useState([])
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [load,setLoad] = useState(false)
   
    const handleInputs = ()=>{
        // you can call the api for validate
        setLoad(true)

        
       setTimeout(()=>{
        
        setLoad(false)
        // calling saveData() which is in Home.js
        saveData([input1,input2])
        setInput1('')
        setInput2('')
       },3000)
    }
    

   
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
    if(col!=='' && exp!==''){
        setShowModal(true)
    }
 }, [col,exp]);
 
  
    return (


       <>
        <Modal
        title="Data validate"
        centered
        visible={showModal}
        onOk={() => {
          setShowModal(false);
          handleInputs()
          showPop()
          navigate("/validate");
        }}
        onCancel={() => {
          setShowModal(false);
       
        setInput1('')
       
        setInput2('')
        showPop()
          navigate("/validate");
        }}
        okText="Submit"
        cancelText="Reset"
      >
       <div style={{display:"flex",justifyContent:"space-between",width:"450px"}}>
       <label style={{display:"inline-block"}}><span style={{fontWeight:"600",fontSize:"16px",color:"black"}}>Dataset:</span> <span style={{textTransform:"capitalize",marginLeft:"5px"}}>{dataset}</span></label> 
       <label style={{display:"inline-block"}}><span style={{fontWeight:"600",fontSize:"16px",color:"black"}}>Column:</span><span style={{textTransform:"capitalize",marginLeft:"5px"}}>{col}</span></label> 
       </div>
       <br />
       <div style={{display:"flex",justifyContent:"space-between",width:"450px"}}>
       <label style={{display:"inline-block"}}><span style={{fontWeight:"600",fontSize:"16px",color:"black"}}>Expectation:</span>  <span style={{textTransform:"capitalize",marginLeft:"5px"}}>{exp}</span></label> 
       <label style={{display:"inline-block"}}><span style={{fontWeight:"600",fontSize:"16px",color:"black"}}>Format:</span> <span style={{textTransform:"capitalize",marginLeft:"5px"}}>{exp}</span></label> 
       </div>
       <hr />
       <p style={{display:"flex"}}>
       <label style={{fontWeight:"600",fontSize:"16px"}}>Test Name:  </label>
       <Input placeholder="Test Name..."  required style={{width:"380px"}} value={title}  onChange={e=>setTitle(e.target.value)}/>
        </p>
        <p>
        <label style={{fontWeight:"600",fontSize:"16px"}}>Data Quality:  </label>
       <Input placeholder="DataQuality Name..."  required style={{width:"180px"}}  value={dataQuality}  onChange={e=>setDataQuality(e.target.value)}/>
       <label style={{fontWeight:"600",fontSize:"16px",marginLeft:"2px"}}>Tag:  </label>
       <Input placeholder="Tag Name..."  required style={{width:"146px"}} value={tag}  onChange={e=>setTag(e.target.value)}/>
        
        
        </p>
        <p>
        <label style={{fontWeight:"600",fontSize:"16px"}}>Expectation Inputs:  </label>
       <Input placeholder="Inputs..." value={input1} required style={{width:"150px"}}   onChange={e=>setInput1(e.target.value)}/>
     
       <Input placeholder="Inputs"  value={input2}  required style={{width:"150px",marginLeft:"12px"}}   onChange={e=>setInput2(e.target.value)}/>
        
        
        </p>
        
      </Modal>
</>
    )
}

export default Validation