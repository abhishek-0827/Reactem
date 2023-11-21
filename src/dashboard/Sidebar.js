import React from 'react'
import './Sidebar.css'
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from 'react-router-dom';
export default function Sidebar() {
  const Navigate= useNavigate();
  const Navi=useNavigate();
  const handleClick=(event)=>
  {
    event.preventDefault();
     Navigate("/EmployeeForm");
  }

  const handleSidebar=(event)=>{
    event.preventDefault();
    Navi("/Sidebar");
  }
  const handleOut=(event)=>{
    event.preventDefault();
    Navi("/");
  }
  return (
    <div >
      <ul className='navbar'>
        <li>
      <div>
        <input type='checkbox' id='check'></input>
        <label for='check'>
          <i id='btn'><ViewHeadlineIcon/></i>
          <i id='cancel'><CloseIcon/></i>
        </label>
    
      <div className='sidebar'>
      <header>
        Name
      </header>
      <ul>
        <li id='li1'><a href="Sidebar.js" onClick={handleSidebar}>Dashboard</a></li>
        <li id='li2'><a href="EmployeeForm.js" onClick={handleClick}>Employee Management</a></li>
        <li id='li3'><a href="#" >System Management</a></li>
        <li id='li4'><a href="#">Admin Management</a></li>
      </ul>
      </div>

      </div>
      </li>
      <li>
        <p id='p'>HOME</p>
      </li>
      <li id='logout'>
        <button onClick={handleOut}>Logout</button>
      </li>
      </ul>
    </div>
  )
}
