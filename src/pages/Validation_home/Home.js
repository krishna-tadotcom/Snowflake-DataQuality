
import "./home.scss";
import Table from "../../Components/table/Table";

import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from "react";
import { Button, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useNavigate } from "react-router";
import Validation from "../../Components/validation/Validation";
// added home





const Home = () => {

  //number of inputs in validation
  const [NumberOfInputs,setNumber] = useState(0)


  const [projectName, setProjectname] = useState('')
  
  //fetch this project names from api
  const [projects, setProjects] = useState(['sankar', 'mukesh', 'tiger'])

  useEffect(()=>{
    //useEffect for getting project names

  },[])


  // user inputs into this dataset
  const [dataset, setDataset] = useState('')
  useEffect(()=>{
    //useEffect for getting dataset names by using project name from api

  },[])



  //used for column heading table
  const [columnHeader, setColumnHeader] = useState([])
  const [ExpectationHeader, setExpectationHeader] = useState([])

  //column rows
  const [rows, setRows] = useState([])

  //expectation rows
  const [expRows, setExprow] = useState([])

  

  // storing the column data
  const [colArray, setColArray] = useState([])
  const [expArray, setExpArray] = useState([])


  // storing expectation and column value
  const [col,setCol]  = useState('')
  const [exp,setExp]  = useState('')






  const handleChange = (e) => {
    // here api will be call to fetch input dataset name
    setProjectname(e.target.value)
  }


  const getData = (e) => {
    //fetch api and place response in rows variable using dataset variable
    setRows(['id', 'email', 'first_name', 'last_name', 'role'])

    setColumnHeader(['columns'])
    setExpectationHeader(['Expectation'])
    setExprow(["Expectation1", "Expectation2", "Expectation3", "Expectation4", "Expectation5"])
    

  }

  const showPop = (index) => {
    document.documentElement.scrollTop = 0;

    setCol(colArray[index])
    setExp(expArray[index])
    document.querySelector('.pop').classList.toggle('tran')
    document.querySelector('#overf').classList.toggle('overf')
    if(exp!==undefined){
      setNumber(+exp.charAt(exp.length-1))
    }

  }

  // saving into local or api
  const saveData = (inputs) => {
    const data = {
      "id": Math.floor(Math.random() * 1000) + 1,
      "column": col,
      "Expectation": exp,
      "Database": projectName,
      "inputs":[inputs]
    }
   
    if(!localStorage.getItem('savedData')){
        localStorage.setItem('savedData',JSON.stringify([data]))
    }
    

    else{
      const local = [...JSON.parse(localStorage.getItem('savedData')), data]
      localStorage.setItem('savedData', JSON.stringify(local))
    }
    document.querySelector('#overf').classList.toggle('overf')
    document.querySelector('.pop').classList.toggle('tran')
    document.querySelector('#overf').classList.remove('overf')
    navigate('/validate')

  }

  useEffect(()=>{
  

  },[col,exp])





  const navigate = useNavigate()

  return (
    <div className="home">
      
      <div className="homeContainer">

        <div className="d">


          <div className="innerD">

            <div className="widgets">




              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Project Name</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={projectName}
                  onChange={handleChange}
                  label="Age"
                >

                
                  {projects.map(p => (<MenuItem value={p} key={p}>{p}</MenuItem>))}


                </Select>
              </FormControl>

              <TextField id="standard-basic" label="Data Set" variant="standard" value={dataset}
              autoComplete="off"
                onChange={(e) => {
                  setDataset(e.target.value)
                }} />
              {projectName && (dataset && <Button variant="outlined" className="getB display-none"  onClick={getData}>Get</Button>)}




            </div>
            <div>
              {colArray.length !== 0 && 
              
                <table className="tb">
               
                {colArray.map((row,index)=>(
                  <tbody className="bg-dark p-1 mb-2" style={{position:"relative"}} >
                   
                    <tr>
                      <td style={{marginTop:"-5px",marginLeft:"10px",color:"white"}}>
                        {row}

                      </td>
                      <td style={{marginTop:"-5px",color:"white",position:"absolute",left:"180px"}}>{expArray[index]}</td>
                      <td style={{marginTop:"-5px",color:"white",position:"absolute",left:"380px"}}>{projectName}</td>
                      <td style={{marginTop:"-5px",color:"white",position:"absolute",left:"580px"}}>{dataset}</td>
                      <td style={{marginTop:"-10px"}}>
                      {expArray[index] &&<Button 
                        onClick={(e)=>{showPop(index)}}>Run</Button>}
                        </td>

                    </tr>
                    </tbody>
                  
                   ))}
                  


                </table>
              

              }
            </div>

          {dataset &&   <div style={{ width: "900px", marginLeft: "100px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <Table header={columnHeader} data={rows} w="180px" setColArray={setColArray} />
              <Table header={ExpectationHeader} data={
                expRows
              } w="230px" setExpArray={setExpArray} />
            </div>}
            <div class="pop">
              <div style={{ width: "100%" }} className="inpop">
                <div className="vali">
                  <i className="fa-solid fa-xmark" onClick={showPop}></i>
                  <Validation  saveData={saveData} number={NumberOfInputs}/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
