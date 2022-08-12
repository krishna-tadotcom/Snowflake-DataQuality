import React from "react";
import DropDown from "../DropDown/DropDown";
import Drop2 from "./Drop2";

const MenuBar = () => {
  return (
    <div class="topnav" id="myTopnav">
      <a href="#connection" class="active">
        <DropDown />
        {/* <Drop2  name={"Connection"} items={["Create","Delete","Update"]} className="dropDown"/> */}
      </a>

      {/* <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a> */}
    </div>
  );
};

export default MenuBar;
