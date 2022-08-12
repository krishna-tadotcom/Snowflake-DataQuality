import React from "react";
import Drop2 from "../../Drop2";

const DropDown = () => {
  return (
    <div class="navbar">
      <div class="dropdown">
        <button class="dropbtn">
          Users
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a href="/create-connection">Create</a>
          <a href="#">Delete</a>
          <a href="#">Edit</a>
          <a href="#">List</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">
          Project
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a>Create</a>
          <a href="#">Delete</a>
          <a href="#">Edit</a>
          <a href="#">List</a>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn">
          Connections
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a>Create</a>
          <a href="#">Delete</a>
          <a href="#">Edit</a>
          <a href="#">List</a>
        </div>
      </div>
      <div div class="dropdown">
        <button class="dropbtn">
          Dataset
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <a>Create</a>
          <a href="#">Delete</a>
          <a href="#">Edit</a>
          <a href="#">List</a>
        </div>
      </div>

      <div class="dropdown-clickable" id="profilingdrp">
        <button
          class="dropbtn"
          onClick={() => {
            const profilingdrp = document.getElementById("profilingdrp");
            profilingdrp.classList.toggle('show')
          }}
        >
          Profiling
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          {/* <a>Create</a> */}
          <a href="#">Data Source Name</a>
          <a href="#">Database</a>
          <a href="#">Schema</a>
          <a href="#">Tables</a>
          <a href="#">Column</a>
        </div>
      </div>
      <div class="dropdown">
        {/* <i class="fa fa-caret-down"></i> */}
        {/* <span>
          Profiling
        </span> */}
        {/* <select class="dropbtn" value={""}>
          <option href="#" value="">
            Profiling
          </option>
          <option href="#">Create</option>
          <option href="#">Data Source Name</option>
          <option href="#">Database</option>
          <option href="#">Schema</option>
          <option href="#">Tables</option>
          <option href="#">Column</option>
        </select> */}
        {/* <Drop2
          name={"Profiling"}
          items={[
            "Create",
            "Data Source Name",
            "Database",
            "Schema",
            "Tables",
            "Column",
          ]}
          className="dropDown-profiling"
        /> */}
        {/* <div class="dropdown-content">
          <a>Create</a>
          <a href="#">Data Source Name</a>
          <a href="#">Database</a>
          <a href="#">Schema</a>
          <a href="#">Tables</a>
          <a href="#">Column</a>
        </div> */}
      </div>
      <div class="dropdown">
        <button class="dropbtn">Validation</button>
      </div>
    </div>
  );
};
export default DropDown;
