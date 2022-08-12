import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Modal } from "antd";
// import projects from "./projects";

const ProjectsList = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => setShowModal(true), []);

  return (
    <>
      <Modal
        title="Create Project"
        centered
        visible={showModal}
        onOk={() => {
          setShowModal(false);
          navigate("/");
        }}
        onCancel={() => {
          setShowModal(false);
          navigate("/");
        }}
        okText="Submit"
        cancelText="Cancel"
      >
        {/* <p>
          Project ID:
          <Input placeholder="Basic usage" />
        </p> */}
        <p>
          <Input placeholder="Project Name.." />
        </p>
        <p>
          <Input placeholder="Project Desc.." />
        </p>
      </Modal>
    </>
  );
};

export default ProjectsList;
