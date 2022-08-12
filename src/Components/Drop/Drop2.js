import { Select } from "antd";
import React, { useState } from "react";
const OPTIONS = ["Apples", "Nails", "Bananas", "Helicopters"];

const { Option } = Select;
const Drop2 = (props) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const filteredOptions = OPTIONS.filter((o) => !selectedItems.includes(o));

  const onChange = () => {};
  const onSearch = () => {};
  return (
    <Select
      placeholder={props.name}
      showSearch
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().includes(input.toLowerCase())
      }
      // className={props.className}
    >
      <Option value=""> Select</Option>
      {props?.items?.map((item) => {
        return (
          <>
            <Option value={item}>{item}</Option>
          </>
        );
      })}
    </Select>

    // <Select
    //   mode="multiple"
    //   placeholder= {props.name}
    //   value={selectedItems}
    //   onChange={setSelectedItems}
    //   style={{
    //     width: '15%',
    //   }}
    // >
    //   {filteredOptions.map((item) => (
    //     <Select.Option key={item} value={item}>
    //       {item}
    //     </Select.Option>
    //   ))}
    // </Select>
  );
};

export default Drop2;
