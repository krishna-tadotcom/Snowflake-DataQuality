import { Table } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

const data = [
  {
    connection_id: 3,
    project_id: 1010,
    connection_name: "APP",
    db_name: "metadata",
    host_name: "ec2-54-197-121-247.compute-1.amazonaws.com",
    port_name: "5432",
    conn_username: "developer",
    conn_password: null,
    db_connection_type: "postgres",
    service_name: null,
    account_name: null,
    connection_string: null,
    created_by: 2152.0,
    schema: null,
  },
  {
    connection_id: 5,
    project_id: 2020,
    connection_name: "SNOWFLAKE_TEST",
    db_name: "SNOWFLAKE_SAMPLE_DATA",
    host_name: "https://dna38486.snowflakecomputing.com",
    port_name: null,
    conn_username: "DWHBI_SYSADMIN",
    conn_password: "Tiger@dwhbi1",
    db_connection_type: "SNOWFLAKE",
    service_name: null,
    account_name: "dna38486",
    connection_string: null,
    created_by: null,
    schema: null,
  },
];

export default function Connections() {
  const [connectionsList, setConnectionsList] = useState();
  useEffect(() => {
    const url =
      "http://ec2-54-197-121-247.compute-1.amazonaws.com:5000/connections-list";
    // const url = "https://jsonplaceholder.typicode.com/users";
    axios
      .get(url)
      .then((res) => {
        setConnectionsList(res?.data || []);
        console.log(res?.data);
      })
      .catch(console.error);
  }, []);

  const columns = [
    {
      title: "Connection ID",
      key: "connection_id",
      dataIndex: "connection_id",
      render: (text) => <a href="#">{text}</a>,
    },
    {
      title: "Project ID",
      key: "project_id",
      dataIndex: "project_id",
    },
    {
      title: "Connection Name",
      key: "connection_name",
      dataIndex: "connection_name",
    },
    {
      title: "DB Name",
      key: "db_name",
      dataIndex: "db_name",
    },
    {
      title: "Host Name",
      key: "host_name",
      dataIndex: "host_name",
    },
    {
      title: "Port Name",
      key: "port_name",
      dataIndex: "port_name",
    },
    {
      title: "Connection userName",
      key: "conn_username",
      dataIndex: "conn_username",
    },
    {
      title: "Connection Password",
      key: "conn_password",
      dataIndex: "conn_password",
    },
    {
      title: "Db Connection Type",
      key: "db_connection_type",
      dataIndex: "db_connection_type",
    },
    {
      title: "Service Name",
      key: "service_name",
      dataIndex: "service_name",
    },
    {
      title: "Account Name",
      key: "account_name",
      dataIndex: "account_name",
    },
    {
      title: "Connection String",
      key: "connection_string",
      dataIndex: "connection_string",
    },
    {
      title: "Created By",
      key: "created_by",
      dataIndex: "created_by",
    },
    {
      title: "Schema",
      key: "schema",
      dataIndex: "schema",
    },
  ];
  const dataSource =
    connectionsList?.length > 0
      ? connectionsList
      : JSON.parse(data.replace("NaN", "null"));
  return <Table columns={columns} dataSource={dataSource} />;
}
