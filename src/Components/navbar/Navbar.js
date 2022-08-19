import { Link, useNavigate } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import "./navbar.scss";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <header className="header" style={{ background: "#24292f" }}>
      <div className="wrapper">
        {/* <Link to="/" style={{ textDecoration: "none" }}>
          <h6><strong style={{
            top: "16px",
            left: "220px",
          margin:"0 auto",
            height: "19px",
            textAlign: "left",
            font: "normal normal 900 16px/31px Helvetica ",
            letterSpacing: "0.13px",
            color: "#22252A",
            textTransform: "uppercase",
            opacity: "1",
            color:"white",
            textAlign:"center"
          }}>App_Name</strong></h6>
        </Link> */}

        <div className="items">
          <div
            className="item"
            onClick={() => {
              navigate("/users");
            }}
          >
            <p>Users</p>
          </div>
          <div
            className="item"
            onClick={() => {
              navigate("/datasets");
            }}
          >
            <p>DataSets</p>
          </div>
          <div
            className="item"
            onClick={() => {
              navigate("/connections");
            }}
          >
            <p> Connections</p>
          </div>
          <div
            className="item"
            onClick={() => {
              navigate("/profiling");
            }}
          >
            <p> Profiling</p>
          </div>
          <div
            className="item"
            onClick={() => {
              navigate("/validate");
            }}
          >
            <p> Validation</p>
          </div>
        </div>
        <div
          style={{
            float: "right",
            marginRight: "20px",
            color: "white",
            cursor: "pointer",
            position: "relative",
          }}
          className="add"
        >
          <i
            class="fa-solid fa-plus"
            onClick={(e) => {
              document.querySelector(".sub").classList.toggle("dis");
            }}
          ></i>
          <div
            style={{
              position: "absolute",
              top: "20px",
              background: "white",
              right: "5px",
            }}
            className="sub"
          >
            <div className="pC">
              <span
               onClick={() => {
                navigate("/create-project");
                document.querySelector(".sub").classList.toggle("dis");

              }}
              >Create Projects</span>
              <span
               onClick={() => {
                navigate("/create-dataset");
                document.querySelector(".sub").classList.toggle("dis");
              }}
              >Create Dataset</span>
              <span
               onClick={() => {
                navigate("/create-connection");
                document.querySelector(".sub").classList.toggle("dis");
              }}>Create Connections</span>
              <span
               onClick={() => {
                navigate("/create-user");
                document.querySelector(".sub").classList.toggle("dis");
              }}>Create User</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
