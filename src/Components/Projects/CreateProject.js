import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Modal } from "antd";

const CreateProject = () => {
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

export default CreateProject;
