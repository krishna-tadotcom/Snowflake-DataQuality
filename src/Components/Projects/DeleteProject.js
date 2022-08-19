import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Modal } from "antd";

const DeleteProject = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => setShowModal(true), []);

  return (
    <>
      <Modal
        title="Delete Project"
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
          <Input placeholder=" Select Project.." />
        </p>
        {/* <p>
          <Input placeholder="Project Desc.." />
        </p> */}
      </Modal>
    </>
  );
};

export default DeleteProject;
