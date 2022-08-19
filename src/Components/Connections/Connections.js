import { Table } from "antd";
import { useEffect, useState } from "react";
import { getConnections } from "../../webRequests/api.services";

export default function Connections() {
  const [connectionsList, setConnectionsList] = useState();
  useEffect(() => {
    console.log(getConnections);
    getConnections()
      .then((data) => {
        setConnectionsList(data || []);
        console.log(data);
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
  return (
    <div
      className="site-layout-content"
      style={{ overflow: "auto", minHeight: "30rem" }}
    >
      <Table columns={columns} dataSource={connectionsList} />
    </div>
  );
}
