import React, { useEffect, useState } from "react";
// import 'antd/dist/antd.css';
// import './index.css';
import { DownOutlined } from "@ant-design/icons";
import { Menu, Dropdown, Icon } from "antd";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const items = [
  {
    label: (
      <>
        Users &nbsp;
        <DownOutlined />
      </>
    ),
    key: "users",
    children: [
      {
        label: "Create",
        key: "users_create",
      },
      {
        label: "Delete",
        key: "users_delete",
      },
      {
        label: "Edit",
        key: "users_edit",
      },
      {
        label: "List",
        key: "users_List",
      },
    ],
    // triggerSubMenuAction: "click",
    // icon: <ArrowDownOutlined />,
  },
  {
    label: (
      <>
        Project &nbsp;
        <DownOutlined />
      </>
    ),
    key: "project",
    children: [
      {
        label: "Create",
        key: "project_create",
      },
      {
        label: "Delete",
        key: "project_delete",
      },
      {
        label: "Edit",
        key: "project_edit",
      },
      {
        label: "List",
        key: "project_list",
      },
    ],
  },
  {
    label: (
      <>
        Connections &nbsp;
        <DownOutlined />
      </>
    ),
    key: "connections",
    children: [
      {
        label: "Create",
        key: "connection_create",
      },
      {
        label: "Delete",
        key: "connection_delete",
      },
      {
        label: "Edit",
        key: "connection_edit",
      },
      {
        label: "List",
        key: "connection_list",
      },
    ],
  },
  {
    label: (
      <>
        Dataset &nbsp;
        <DownOutlined />
      </>
    ),
    key: "dataset",
    children: [
      {
        label: "Create",
        key: "dataset_create",
      },
      {
        label: "Delete",
        key: "dataset_delete",
      },
      {
        label: "Edit",
        key: "dataset_edit",
      },
      {
        label: "List",
        key: "dataset_list",
      },
    ],
  },
  {
    label: <>Profiling &nbsp;</>,
    key: "profiling",
    children: [
      {
        label: "Data Source Name",
        key: "setting:1",
      },
      {
        label: "Database",
        key: "setting:2",
      },
      {
        label: "Schema",
        key: "setting:3",
      },
      {
        label: "Table",
        key: "setting:4",
      },
      {
        label: "Column",
        key: "setting:4",
      },
    ],
  },
  {
    label: <>Validation &nbsp;</>,
    key: "validation",
    // children: [
    //   {
    //     label: "Data Source Name",
    //     key: "setting:1",
    //   },
    //   {
    //     label: "Database",
    //     key: "setting:2",
    //   },
    //   {
    //     label: "Schema",
    //     key: "setting:3",
    //   },
    //   {
    //     label: "Table",
    //     key: "setting:4",
    //   },
    //   {
    //     label: "Column",
    //     key: "setting:4",
    //   },
    // ],
  },
  //   {
  //     label: (
  //       <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
  //         Navigation Four - Link
  //       </a>
  //     ),
  //     key: "alipay",
  //   },
];

const Navigation = () => {
  const [current, setCurrent] = useState("users");
  const navigate = useNavigate();
  // const [connectionList, setConnectionList] = useState([]);

  const onClick = (e) => {
    console.log("Navigation clicked on:", e);
    setCurrent(e.key);
    switch (e.key) {
      case "connection_list":
        navigate("connectionlist");
        break;
      case "project_create":
        navigate("createProject");
        break;
      case "project_list":
        navigate("projectslist");
        break;
      case "dataset_create":
        navigate("createdataset");
        break;
      case "dataset_list":
        navigate("datasetlist");
        break;
      default:
        navigate("/");
    }

    // if (e.key === "connection_list") {
    //   navigate("connectionlist");
    // } else if (e.key === "project_create") {
    //   navigate("createProject");
    // } else if (e.key === "project_list") {
    //   navigate("projectslist");
    // }
  };

  useEffect(() => {}, []);
  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      theme="dark"
      triggerSubMenuAction="hover"
    />
  );
};

export default Navigation;
