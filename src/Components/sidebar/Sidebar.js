import "./sidebar.scss";

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";






const Sidebar = () => {
  const [cross,setCross] = useState('bar')

  const handle =  (e)=>{
    
    if(cross === 'bar'){
      
      document.querySelector('.sidebar').style.width="170px"
      setCross('cross')
    }
    else{
      setCross('bar')
      document.querySelector('.sidebar').style.width="50px"
    }

  //  const sides = document.querySelectorAll('.side')
  //  for(let i=0;i<sides.length;i++){
    
  //   sides[i].classList.toggle('dis')
  
  //  }
   
  }


  const navigate = useNavigate()
  return (
    <div className="sidebar bg-dark" style={{ color: "white" }}>
      <div className="navF">

        <div className="top" >

          {cross==='bar' ? <div className="bar"><i class="fa-solid fa-bars" style={{ fontSize: "16px" }}></i></div> 
          
          
          :
          <div className="cross">
          <i class="fa-solid fa-xmark" style={{ fontSize: "16px" }} 
          ></i>
          </div>
          
          }

        </div>
        <input type='checkbox' className='checkbox' style={{position:"absolute",top:"12px",left:"18px",opacity:"0",cursor:"pointer",
         
          }}
            onClick={(e)=>{
              if(e.target.checked){
                handle(e)
              }
              else{
                handle(e)
              }
            }}


          />

        <div className="">
         
          <ul>
          

            <li
              onClick={() => {
                navigate('/users')
              }}
            >
              <i className="fas fa-user"></i>
              <span className="side">Users</span>
            </li>



            <li
             onClick={() => {
              navigate('/datasets')
            }}>
              <i className="fa-solid fa-database" ></i>
              <span className="side">DataSets</span>
            </li>


            <li
             onClick={() => {
              navigate('/connections')
            }}>
              <i class="fa fa-link" aria-hidden="true"></i>
              <span className="side">Connections</span>
            </li>

            <li
             onClick={() => {
              navigate('/profiling')
            }}>
              <i className="fa-solid fa-file-arrow-down"></i>
              <span className="side">Profiling</span>
              
            </li>
            <li
             onClick={() => {
              navigate('/projects')
            }}>
            <i class='fas fa-project-diagram '></i>
              <span className="side">Projects</span>
            </li>
            <li
             onClick={() => {
              navigate('/validate')
            }}>
            <i className="fa-solid fa-file-arrow-down"></i>
              <span className="side">Validation</span>
            </li>


          </ul>
        </div>
        {/* <div className="bottom">
          <div className="item noti">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item help" style={{ fontSize: "20px" }}>
            <i className="fa-solid fa-circle-question"></i>
          </div>
          <div className="item profile">
            <img
              src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="avatar"
            />
          </div>

        </div> */}
      </div>

    </div>
  );
};

export default Sidebar;
