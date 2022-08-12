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
import Validation from "./Components/Validation/Validation";

import "./App.css";
import "antd/dist/antd.min.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />}>
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
            <Route path="validate" element={<Validation />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
