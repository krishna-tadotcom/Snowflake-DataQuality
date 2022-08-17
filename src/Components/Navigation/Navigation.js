import { DownOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const items = [
  {
    label: (
      <>
        Users &nbsp;
        <i class="fa-solid fa-angle-down"></i>
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
        <i class="fa-solid fa-angle-down"></i>
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
        <i class="fa-solid fa-angle-down"></i>
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
        <i class="fa-solid fa-angle-down"></i>
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
    label: <>Profiling &nbsp; <i class="fa-solid fa-angle-down"></i></>,

    key: "profiling",
    children: [
      {
        label: "Profiling",
        key: "profiling",
      },
    ],
  },
  {
    label: <>Validation &nbsp; <i class="fa-solid fa-angle-down"></i></>,
    key: "validation",
    children: [
      {
        label: "Validate",
        key: "validate",
      },
    ],
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

  const onClick = (e) => {
    console.log("Navigation clicked on:", e);
    setCurrent(e.key);
    switch (e.key) {
      case "users_create":
        navigate("create-user");
        break;
      case "users_delete":
        navigate("delete-user");
        break;
      case "users_edit":
        navigate("edit-user");
        break;
      case "users_List":
        navigate("users");
        break;
      case "project_create":
        navigate("create-project");
        break;
      case "project_delete":
        navigate("delete-project");
        break;
      case "project_edit":
        navigate("edit-project");
        break;
      case "project_list":
        navigate("projects");
        break;
      case "connection_create":
        navigate("create-connection");
        break;
      case "connection_delete":
        navigate("delete-connection");
        break;
      case "connection_edit":
        navigate("edit-connection");
        break;
      case "connection_list":
        navigate("connections");
        break;
      case "dataset_create":
        navigate("create-dataset");
        break;
      case "dataset_delete":
        navigate("delete-dataset");
        break;
      case "dataset_edit":
        navigate("edit-dataset");
        break;
      case "dataset_list":
        navigate("datasets");
        break;
      case "profiling":
        navigate("profiling");
        break;
      case "validate":
        navigate("validate");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={items}
      // theme="dark"
      triggerSubMenuAction="hover"
    />
  );
};

export default Navigation;
