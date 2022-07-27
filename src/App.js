import React, { useState } from 'react'
import './App.css'
import Data from './mock-data.json'
import Select from 'react-select'
import MenuBar from './MenuBar'
import 'antd/dist/antd.css';
import Drop2 from './Drop2'
import './Drop2.css';

// import DropDown from './DropDown';



const App = () => {

    const [data,setData]=useState(Data);
  return (
    <div className='app-container' >
        <div className='relative'>
        <div>
        <MenuBar/> <br/>
        </div>
        <div className='cardContainer'>
        <div className='card'>
        <label>DS Name</label>
        
        <Drop2  name={"DS Name"} items={["DS1","DS2","DS3"]} className="dropDown"/> 
        <button > Connect</button>
        
        </div>

      
        <div className='card'>
        <label>Databases</label>
        <Drop2  name={"Databases"} items={["DB1","DB2","DB3"]} /> 
        </div>
        <div className='card'>
        <label>Schema</label>
        <Drop2  name={"Schema"} items={["S1","S2","S3"]} /> 
        </div>
       
  
        
        <div className='card'>
        <label>Tables</label>
        <Drop2  name={"Table"} items={["T1","T2","T3"]}/> 
        <button  > Sample Data</button>
        </div>

        <div className='card'>
        <label>Columns</label>
        <Drop2  name={"Columns"} items={["C1","C2","C3"]}/> 
        <button  > Profile</button>
        </div>
        
        {/* <button className='buttonSpace'> Profile</button> */}
        </div>
        </div>
        
       
       <table>
          <thead>
            <tr>
                <th> Data Source</th>
                <th> DS Name</th>
                <th> User Name</th>
                <th> Account Name</th>
                <th> Database Name</th>
                <th> Schema</th>
                <th> Password </th>
            </tr>
          </thead>
          <tbody>
            {Data.map((dat)=>(
                <tr>
                <td> {dat.DataSource}</td>
                <td> {dat.DSName}</td>
                <td> {dat.UserName}</td>
                <td> {dat.AccountName}</td>
                <td> {dat.DatabaseName}</td>
                <td> {dat.Schema}</td>
                <td>{dat.Password}</td>
            </tr>

            ))}
            
                
          </tbody>
       </table> <br/>

       <table>
          <thead>
            <tr>
                <th> Data Source</th>
                <th> DS Name</th>
                <th> User Name</th>
                <th> Account Name</th>
                <th> Database Name</th>
                <th> Schema</th>
                <th> Password </th>
            </tr>
          </thead>
          <tbody>
            {Data.map((dat)=>(
                <tr>
                <td> {dat.DataSource}</td>
                <td> {dat.DSName}</td>
                <td> {dat.UserName}</td>
                <td> {dat.AccountName}</td>
                <td> {dat.DatabaseName}</td>
                <td> {dat.Schema}</td>
                <td>{dat.Password}</td>
            </tr>

            ))}
            
                
          </tbody>
       </table>

    </div>
  )
}

export default App

