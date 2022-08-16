import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import FormContainer from '../FormContainer'

import './validation.scss'


const Validation = ({saveData,number}) => {
    const [inArray,setInArray] = useState([])
    const [input1, setInput1] = useState(0)
    const [input2, setInput2] = useState(0)
    const [load,setLoad] = useState(false)
   
    const handleInputs = ()=>{
        // you can call the api for validate
        setLoad(true)

        console.log(input1,input2)
       setTimeout(()=>{
        
        setLoad(false)
        // calling saveData() which is in Home.js
        saveData([input1,input2])
        setInput1('')
        setInput2('')
       },3000)
    }

    useEffect(()=>{

        for(let i=0;i<number;i++){
            setInArray(arr=>[...arr,1])
        }
    },[number])

 
  
    return (



        <div style={{padding:"50px 0" , display:"flex",justifyContent:"center",alignItems:"center",}} className="cover">
            <FormContainer>
                    <Form>
                    <p>Enter the inputs</p>
                    <input  type="number" value={input1}  required 
                        onChange={(e) => {
                            setInput1(e.target.value)
                            console.log(e.target.value)
                        }} 
                        autoComplete="off"
                            style={{display:"block",margin:"20px",width:"100%",color:"black"}}
                        />

                    <input type="number" value={input2}
                   
                        onChange={(e) => {
                            setInput2(e.target.value)
                            console.log(e.target.value)
                            
                        }}  autoComplete="off"
                            style={{display:"block",margin:"20px",width:"100%",color:"black"}}/>


                   {input1 > 0 ? 
                   (input2>0 ? 
                   (!load ? <Button variant='outlined' style={{marginLeft:"50px"}} 
                    onClick={handleInputs}
                    >Save</Button>
                    :
                  <div className='loader m-auto'>Loading</div>
                    )
                    :

                    <Button variant='outlined' disabled style={{marginLeft:"50px",color:"red"}}>Please Enter Inputs</Button>
                    )
                    :
                    <Button variant='outlined' style={{marginLeft:"50px",color:"red"}} disabled
                    
                    >Please Enter Inputs</Button>
                    }
                    </Form>



            </FormContainer></div>
    )
}

export default Validation