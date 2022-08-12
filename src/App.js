import React from "react";
// import Tables from "./Components/Tables/Tables";
import "antd/dist/antd.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ConnectionsList from "./Components/ConnectionsList/ConnectionsList";
import ProjectsList from "./Components/ProjectsList/ProjectsList";
import CreateProject from "./Components/ProjectsList/CreateProject";
import CreateDataSet from "./Components/DataSet/CreateDataSet";
import DataSetsList from "./Components/DataSet/DataSetsList";
import Layout from "./Components/MainContainer/MainContainer";
// import { Layout } from "antd";
// import "./Drop2.css";

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Navigation />} />
          <Route
            path="/create-connection"
            exact
            element={<CreateConnection />}
          />
        </Routes>
      </BrowserRouter> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<h1>Home Page </h1>} />
            <Route path="connectionlist" element={<ConnectionsList />} />
            <Route path="projectslist" element={<ProjectsList />} />
            <Route path="CreateProject" element={<CreateProject />} />
            <Route path="ProjectDelete" element={<CreateProject />} />
            <Route path="createdataset" element={<CreateDataSet />} />
            <Route path="datasetlist" element={<DataSetsList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
