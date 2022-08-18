import { Button } from "@mui/material";
import { Card, Col, Row } from "antd";
import React from "react";
import { useNavigate } from "react-router";

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

const DataSets = () => {

  const navigate = useNavigate()
 
  return (
    <>
    <Button onClick={e=>navigate('/create-dataset')} style={{float:"right"}}>Add DataSet</Button>
      <Row justify="center" gutter={[32, 32]}>
        {dataSetsList.map((item) => (
          <Col span={8}>
           <Card variant="outlined">
           <div>
                <span>DB Name: </span>
                {item.dbname}
              </div>
              <div>
                <span>DB Source: </span>
                {item.source}
              </div>
              <div>
                <span>Project: </span>
                {item.project}
              </div>
              <div>
                <span>Schema: </span>
                {item.schema}
              </div>
              <div>
                <span>Table: </span>
                {item.table}
              </div>
              <div>
                <span>Created Date: </span>
                {item.createdDate.toLocaleDateString()}
              </div>
           </Card>
             
              
            
          </Col>
        ))}
      </Row>
    </>
  );
};

export default DataSets;

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
