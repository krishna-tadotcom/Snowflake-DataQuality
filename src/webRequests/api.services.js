import axios from "axios";
import projects from "../__mocks__/projects/projects.json";
import connections from "../__mocks__/connections/connections.json";
import datasetConnections from "../__mocks__/datasets/connections.json";
import datasetColumns from "../__mocks__/datasets/columns.json";
import datasetDBSchema from "../__mocks__/datasets/dbSchema.json";
import datasetTables from "../__mocks__/datasets/tables.json";

const MOCK_SETTINGS = {
  PROJECTS: {
    GET_PROJECTS: true,
  },
  USERS: {
    GET_USERS: true,
  },
  DATASETS: {
    GET_DATASETS: true,
    GET_CONNECTIONS: true,
    GET_COLUMNS: true,
    GET_DBSCHEMA: true,
    GET_TABLES: true,
  },
  CONNECTIONS: {
    GET_CONNECTIONS: true,
  },
};

export const getProjects = async (config) => {
  if (MOCK_SETTINGS.PROJECTS.GET_PROJECTS) return Promise.resolve(projects);

  try {
    const projects = axios.get(
      "http://ec2-54-197-121-247.compute-1.amazonaws.com:5000/projects-list"
    );
    return projects.data;
  } catch (err) {
    console.error(err);
    Promise.reject(err);
  }
};

export const getConnections = async (config) => {
  console.log(connections)
  if (MOCK_SETTINGS.CONNECTIONS.GET_CONNECTIONS) return connections;

  try {
    const connections = axios.get(
      "http://ec2-54-197-121-247.compute-1.amazonaws.com:5000/connections-list"
    );
    return connections.data;
  } catch (err) {
    console.error(err);
    Promise.reject(err);
  }
};

export const getDataSetConnections = async (config) => {
  if (MOCK_SETTINGS.DATASETS.GET_CONNECTIONS)
    return Promise.resolve(datasetConnections);

  try {
    const connections = axios.get(
      "http://ec2-54-197-121-247.compute-1.amazonaws.com:5000/dataset-connections"
    );
    return connections.data;
  } catch (err) {
    console.error(err);
    Promise.reject(err);
  }
};

export const getDataSetColumns = async (config) => {
  if (MOCK_SETTINGS.DATASETS.GET_COLUMNS)
    return Promise.resolve(datasetColumns);

  try {
    const columns = axios.get(
      "http://ec2-54-197-121-247.compute-1.amazonaws.com:5000/dataset-columns"
    );
    return columns.data;
  } catch (err) {
    console.error(err);
    Promise.reject(err);
  }
};

export const getDataSetDBSchema = async (config) => {
  if (MOCK_SETTINGS.DATASETS.GET_DBSCHEMA)
    return Promise.resolve(datasetDBSchema);

  try {
    const dbSchema = axios.get(
      "http://ec2-54-197-121-247.compute-1.amazonaws.com:5000/dataset-dbschema"
    );
    return dbSchema.data;
  } catch (err) {
    console.error(err);
    Promise.reject(err);
  }
};

export const getDataSetTables = async (config) => {
  if (MOCK_SETTINGS.DATASETS.GET_TABLES) return Promise.resolve(datasetTables);

  try {
    const tables = axios.get(
      "http://ec2-54-197-121-247.compute-1.amazonaws.com:5000/dataset-tables"
    );
    return tables.data;
  } catch (err) {
    console.error(err);
    Promise.reject(err);
  }
};
