import { Card, Col, Row } from "antd";
import React from "react";

const dataSetsList = [
  {
    dsname: "Data Set1",
    project: "Project Name1",
    source: "Data Source1",
    dbname: "DB1",
    schema: "Schema1",
    table: "Table1",
    createdDate: new Date(),
  },
  {
    dsname: "Data Set2",
    project: "Project Name2",
    source: "Data Source2",
    dbname: "DB2",
    schema: "Schema2",
    table: "Table2",
    createdDate: new Date(),
  },
  {
    dsname: "Data Set1",
    project: "Project Name1",
    source: "Data Source1",
    dbname: "DB1",
    schema: "Schema1",
    table: "Table1",
    createdDate: new Date(),
  },
  {
    dsname: "Data Set2",
    project: "Project Name2",
    source: "Data Source2",
    dbname: "DB2",
    schema: "Schema2",
    table: "Table2",
    createdDate: new Date(),
  },
  {
    dsname: "Data Set1",
    project: "Project Name1",
    source: "Data Source1",
    dbname: "DB1",
    schema: "Schema1",
    table: "Table1",
    createdDate: new Date(),
  },
  {
    dsname: "Data Set2",
    project: "Project Name2",
    source: "Data Source2",
    dbname: "DB2",
    schema: "Schema2",
    table: "Table2",
    createdDate: new Date(),
  },
];

const { Meta } = Card;
const dataSets = () => {
  return (
    <>
      <Row justify="center" gutter={[32, 32]}>
        {dataSetsList.map((item) => (
          <Col span={8}>
            <Card
              style={{
                width: 300,
                marginTop: 16,
              }}
              loading={false}
              title={item.dsname}
              bordered={false}
            >
              {/* <Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title="Card title"
                description="This is the description"
              /> */}
              <p>
                <b>DB Name: </b>
                {item.dbname}
              </p>
              <p>
                <b>DB Source: </b>
                {item.source}
              </p>
              <p>
                <b>Project: </b>
                {item.project}
              </p>
              <p>
                <b>Schema: </b>
                {item.schema}
              </p>
              <p>
                <b>Table: </b>
                {item.table}
              </p>
              <p>
                <b>Created Date: </b>
                {item.createdDate.toLocaleDateString()}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default dataSets;

{
  /* <Row gutter={16}>
  <Col span={8}>
    <Card title="Card title" bordered={false}>
      Card content
    </Card>
  </Col>
  <Col span={8}>
    <Card title="Card title" bordered={false}>
      Card content
    </Card>
  </Col>
</Row>; */
}
