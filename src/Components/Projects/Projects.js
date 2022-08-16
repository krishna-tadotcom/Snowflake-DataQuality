import React, { useState, useEffect } from "react";
import { Button, Modal, List, Skeleton, Avatar } from "antd";
import { getProjects } from "../../webRequests/api.services";

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [initLoading, setInitLoading] = useState(true);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
    getProjects().then((res) => {
      setInitLoading(false);
      setData(res);
      setList(res);
    });
  }, []);

  // const onLoadMore = () => {
  //   setLoading(true);
  //   setList(
  //     data.concat(
  //       [...new Array(count)].map(() => ({
  //         loading: true,
  //         name: {},
  //         picture: {},
  //       }))
  //     )
  //   );
  //   fetch(fakeDataUrl)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       const newData = data.concat(res.results);
  //       setData(newData);
  //       setList(newData);
  //       setLoading(false); // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
  //       // In real scene, you can using public method of react-virtualized:
  //       // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized

  //       window.dispatchEvent(new Event("resize"));
  //     });
  // };

  const loadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px",
        }}
      >
        <Button onClick={() => {}}>loading more</Button>
      </div>
    ) : null;

  return (
    <>
      <Modal
        title="Project Details"
        centered
        visible={showModal}
        onOk={() => setShowModal(false)}
        onCancel={() => setShowModal(false)}
      >
        <p>Project ID:{modalContent.project_id}</p>
        <p>Project Name:{modalContent.project_name}</p>
        <p>Project Desc:{modalContent.project_desc}</p>
      </Modal>

      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                type="primary"
                onClick={() => {
                  setShowModal(true);
                  setModalContent(item);
                }}
              >
                View Details
              </Button>,
            ]}
          >
            <Skeleton avatar title={false} loading={item?.loading} active>
              <List.Item.Meta
                avatar={<Avatar src={item?.picture?.large} />}
                title={<a href="https://ant.design">{item.project_name}</a>}
                description={item.project_desc}
              />
              {/* <div>{item.project_id}</div> */}
            </Skeleton>
          </List.Item>
        )}
      />
    </>
  );
};

export default Projects;
