import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./Components/Container/Container";
import Home from "./Components/Home/Home";

import Connections from "./Components/Connections/Connections";
import CreateConnection from "./Components/Connections/CreateConnection";
import EditConnection from "./Components/Connections/EditConnection";
import DeleteConnection from "./Components/Connections/DeleteConnection";

import Projects from "./Components/Projects/Projects";
import CreateProject from "./Components/Projects/CreateProject";
import EditProject from "./Components/Projects/EditProject";
import DeleteProject from "./Components/Projects/DeleteProject";

import CreateUser from "./Components/Users/CreateUser";
import EditUser from "./Components/Users/EditUser";
import DeleteUser from "./Components/Users/DeleteUser";
import Users from "./Components/Users/Users";

import DataSets from "./Components/DataSet/DataSets";
import CreateDataSet from "./Components/DataSet/CreateDataSet";
import EditDataSet from "./Components/DataSet/EditDataSet";
import DeleteDataSet from "./Components/DataSet/DeleteDataSet";

import Profiling from "./Components/Profiling/Profiling";
import Validation from "./pages/Validation_home/Home";
import Sidebar from './Components/sidebar/Sidebar'
import Saved from './Components/saved/Saved'
import Navbar from './Components/navbar/Navbar'
import EditValidation from './Components/EditValidation/EditValidation'

import "./App.css";
import "antd/dist/antd.min.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div style={{padding:"30px"}}>
        <Routes>
          
           
           <Route index element={<Home />} />
            <Route path="connections" element={<Connections />} />
            <Route path="edit-connection" element={<EditConnection />} />
            <Route path="delete-connection" element={<DeleteConnection />} />
            <Route path="create-connection" element={<CreateConnection />} />

            <Route path="users" element={<Users />} />
            <Route path="edit-user" element={<EditUser />} />
            <Route path="delete-user" element={<DeleteUser />} />
            <Route path="create-user" element={<CreateUser />} />

            <Route path="projects" element={<Projects />} />
            <Route path="edit-project" element={<EditProject />} />
            <Route path="delete-project" element={<DeleteProject />} />
            <Route path="create-project" element={<CreateProject />} />

            <Route path="datasets" element={<DataSets />} />
            <Route path="edit-dataset" element={<EditDataSet />} />
            <Route path="delete-dataset" element={<DeleteDataSet />} />
            <Route path="create-dataset" element={<CreateDataSet />} />

            <Route path="profiling" element={<Profiling />} />
           
            <Route path="/validate" element={<Validation />} />
            <Route path='/saved' element={<Saved />} />
            <Route path='/editSaved/:id' element={<EditValidation />}/>
          
        </Routes>
        </div>
        </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
