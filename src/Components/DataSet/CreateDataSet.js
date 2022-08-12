import { Button, Input, Select } from "antd";
import React from "react";
import "./dataSet.css";

const { Option } = Select;

// const AdvancedSearchForm = () => {
//   const [expand, setExpand] = useState(false);
//   const [form] = Form.useForm();

//   const getFields = () => {
//     const count = expand ? 10 : 6;
//     const children = [];

//     for (let i = 0; i < count; i++) {
//       children.push(
//         <Col span={8} key={i}>
//           <Form.Item
//             name={`field-${i}`}
//             label={`Field ${i}`}
//             rules={[
//               {
//                 required: true,
//                 message: "Input something!",
//               },
//             ]}
//           >
//             {i % 3 !== 1 ? (
//               <Input placeholder="placeholder" />
//             ) : (
//               <Select defaultValue="2">
//                 <Option value="1">1</Option>
//                 <Option value="2">longlonglonglon</Option>
//               </Select>
//             )}
//           </Form.Item>
//         </Col>
//       );
//     }

//     return children;
//   };

//   const onFinish = (values) => {
//     console.log("Received values of form: ", values);
//   };

//   return (
//     <Form
//       form={form}
//       name="advanced_search"
//       className="ant-advanced-search-form"
//       onFinish={onFinish}
//     >
//       <Row gutter={24}>{getFields()}</Row>
//       <Row>
//         <Col
//           span={24}
//           style={{
//             textAlign: "right",
//           }}
//         >
//           <Button type="primary" htmlType="submit">
//             Search
//           </Button>
//           <Button
//             style={{
//               margin: "0 8px",
//             }}
//             onClick={() => {
//               form.resetFields();
//             }}
//           >
//             Clear
//           </Button>
//           <a
//             style={{
//               fontSize: 12,
//             }}
//             onClick={() => {
//               setExpand(!expand);
//             }}
//           >
//             {expand ? <UpOutlined /> : <DownOutlined />} Collapse
//           </a>
//         </Col>
//       </Row>
//     </Form>
//   );
// };

const CreateDataSet = () => (
  <div className="create-dateset-container">
    <div className="dateset-row">
      <div className="dataset-item">
        <label>Dataset Name</label>
        <Input placeholder="Dataset Name" style={{ width: "200px" }} />
      </div>
      <div className="dataset-item">
        <label>Project Name</label>
        <Select
          showSearch
          style={{
            width: 200,
          }}
          placeholder="Project Name"
          optionFilterProp="children"
          filterOption={(input, option) => option.children.includes(input)}
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
        >
          <Option value="1">Project Name1</Option>
          <Option value="2">Project Name2</Option>
          <Option value="3">Project Name3</Option>
        </Select>
      </div>
      <div className="dataset-item">
        <label>Data Source</label>
        <Select
          showSearch
          style={{
            width: 200,
          }}
          placeholder="Data Source"
          optionFilterProp="children"
          filterOption={(input, option) => option.children.includes(input)}
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
        >
          <Option value="1">Data Source1</Option>
          <Option value="2">Data Source2</Option>
          <Option value="3">Data Source3</Option>
        </Select>
      </div>
    </div>
    <div className="dateset-row">
      <div className="dataset-item">
        <label>Database</label>
        <Select
          showSearch
          style={{
            width: 200,
          }}
          placeholder="Database"
          optionFilterProp="children"
          filterOption={(input, option) => option.children.includes(input)}
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
        >
          <Option value="1">Database1</Option>
          <Option value="2">Database2</Option>
          <Option value="3">Database3</Option>
        </Select>
      </div>
      <div className="dataset-item">
        <label>Schema</label>
        <Select
          showSearch
          style={{
            width: 200,
          }}
          placeholder="Schema"
          optionFilterProp="children"
          filterOption={(input, option) => option.children.includes(input)}
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
        >
          <Option value="1">Schema1</Option>
          <Option value="2">Schema2</Option>
          <Option value="3">Schema3</Option>
        </Select>
      </div>
      <div className="dataset-item">
        <label>Table</label>
        <Select
          showSearch
          style={{
            width: 200,
          }}
          placeholder="Table"
          optionFilterProp="children"
          filterOption={(input, option) => option.children.includes(input)}
          filterSort={(optionA, optionB) =>
            optionA.children
              .toLowerCase()
              .localeCompare(optionB.children.toLowerCase())
          }
        >
          <Option value="1">Table1</Option>
          <Option value="2">Table2</Option>
          <Option value="3">Table3</Option>
        </Select>
        {/* <Button type="primary">Sample Data</Button> */}
      </div>
    </div>
    <div className="dataset-footer">
      <Button type="primary" htmlType="submit" style={{ width: "5rem" }}>
        Submit
      </Button>
      <Button type="primary" htmlType="reset" style={{ width: "5rem" }}>
        Reset
      </Button>
    </div>
  </div>
);

export default CreateDataSet;
