
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
import Saved from '../../Components/saved/Saved'
import Databasedata from '../../Components/databaseValiData/Databasedata'
// added home





const Home = ({setRouteName}) => {

  
  const [showCol,setShowCol] = useState(false)
  //number of inputs in validation
  const [NumberOfInputs,setNumber] = useState(0)

  const [inputsEdit,setInputsEdit] = useState([])

  const [projectName, setProjectname] = useState('')
  
  //fetch this project names from api
  const [projects, setProjects] = useState(['sankar', 'mukesh', 'tiger'])
  const [Datasets, setDatasets] = useState(['team', 'school', 'college'])

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
  // const [colArray, setColArray] = useState('')
  // const [expArray, setExpArray] = useState('')


  // storing expectation and column value
  const [col,setCol]  = useState('')
  const [exp,setExp]  = useState('')
  const [title,setTitle] = useState('')
  const [dataQuality,setDataQuality] = useState('')
  const [tag,setTag] = useState('')


  const [pop,setPop] = useState('')


  //getting data in the db





  const handleChange = (e) => {
    // here api will be call to fetch input dataset name
    setProjectname(e.target.value)
  }


  const getData = (e) => {
    setShowCol(true)
    //fetch api and place response in rows variable using dataset variable
    setRows(['id', 'email', 'first_name', 'last_name', 'role','value','time','expire'])

    setColumnHeader(['columns'])
    setExpectationHeader(['Expectation'])
    setExprow(["Expectation1", "Expectation2", "Expectation3", "Expectation4", "Expectation5","Expectation6",
  "Expectation7","Expectation8","Expectation9","Expectation10"
  ])
    

  }


  
  // const showEditPop = (P,d,c,e,i) => {
  //   if(pop === 'norm'){
  //     setPop('cross')
  //   }
  //   else{
  //     setPop('norm')
  //   }

  //   if(P!=='' && d!=='' && c!=='' && e!==''){
  //     setPop('')
  //     setCol(c)
  //     setExp(e)
  //     setDataset(d)
  //     setProjectname(P)
  //     setInputsEdit(i[0])
      
  //   }
   
  // }
 useEffect(()=>{
  console.log(inputsEdit)
 },[inputsEdit])

  const showPop = () => {
    if(pop === 'norm'){
      setPop('cross')
    }
    else{
      setPop('norm')
    }
 
    setTitle('')
    setDataQuality('')
    setTag('')
    



    document.documentElement.scrollTop = 0;
    
   

    
    // document.querySelector('#overf').classList.toggle('overf')
    

  }
  useEffect(()=>{
    if(exp!==undefined || col!==undefined){
      setNumber(+exp.charAt(exp.length-1))
    }
  },[col,exp])



  // saving into local or api
  const saveData = (inputs) => {




    const data = {
      "id": Math.floor(Math.random() * 1000) + 1,
      "tittle":title,
      "dataQuality":dataQuality,
      "tag":tag,
      "column": col,
      "Expectation": exp,
      "ProjectName": projectName,
      "Dataset":dataset,
      "inputs":inputs
    }
   
    if(!localStorage.getItem('savedData')){
        localStorage.setItem('savedData',JSON.stringify([data]))
    }
    

    else{
      const local = [...JSON.parse(localStorage.getItem('savedData')), data]
      localStorage.setItem('savedData', JSON.stringify(local))
    }
    

    // document.querySelector('#overf').classList.toggle('overf')
    // document.querySelector('.pop').classList.toggle('tran')
    // document.querySelector('#overf').classList.remove('overf')
    setPop('')
    setCol('')
    setExp('')

    navigate('/validate')

  }

useEffect(()=>{
console.log(title)
},[title])


  

  useEffect(()=>{
  if(exp!=='' && col!==''){
    showPop()
    
  }

  },[col,exp])
  useEffect(()=>{
    
    if(pop==='cross'){
      
      setCol('')
      setExp('')
     
    }
  
  },[pop])





  const navigate = useNavigate()

  return (
    <div className="home">
      
      <div className="homeContainer">

       


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
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">Dataset</InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={dataset}
                  onChange={(e) => {
                    setDataset(e.target.value)
                  }}
                  label="Age"
                >

                
                  {Datasets.map(p => (<MenuItem value={p} key={p}>{p}</MenuItem>))}


                </Select>
              </FormControl>

             
              {projectName && (dataset && <Button variant="outlined" className="getB display-none"  onClick={getData}>Get</Button>)}

           

            </div>
            
            {showCol &&   
            <div style={{display:"flex",gap:"5px"}}>
              <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center",gap:"30px" }}>
              <Table header={columnHeader} data={rows} w="160px" setCol={setCol} />
              <Table header={ExpectationHeader} data={
                expRows
              } w="160px" setExp={setExp} />
            </div>
            <div style={{flex:"6"}}>
            <Databasedata />
            </div>
              </div>
            }

        
            <div>
             <Saved />
            </div>
            
              {/* <div style={{ width: "100%" }} className="inpop"> */}
                
                 
                  <Validation showPop={showPop} saveData={saveData} number={NumberOfInputs} projectName={projectName} exp={exp} col={col} dataset={dataset}
                  inputsEdit={inputsEdit} setTitle={setTitle} setDataQuality={setDataQuality} setTag={setTag} dataQuality={dataQuality} tag={tag} title={title}
                  />
              {/* </div> */}
            
          </div>
        </div>
      
    </div>
  );
};

export default Home;
