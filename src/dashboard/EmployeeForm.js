import React from 'react'
import "./EmployeeForm.css";
import {useNavigate} from 'react-router-dom';
import Sidebar from './Sidebar';
export default function EmployeeForm() {
  const Navigate=useNavigate();

  const handleClick=(event)=>
  {
    event.preventDefault();
    Navigate('/Sidebar');
    alert("Saved")
  }
  return (
    
    
    
    
    <div class='ss'>
      <Sidebar/>
    <div class='c'>
      <h1>Add Employee</h1>
      <br></br>
      <div class='a'>
      <table >
      <tr>
      <td><label for='aa'>Emp ID</label></td>
      </tr>
      
      <tr>
      <td><input id='aa' type="text" placeholder='Enter your Empid' class='f'/></td></tr>
      <br></br>
      <tr>
      <td><label for='ab' >First Name</label></td>
      <td><label for='ac' >Last Name</label></td>
      </tr>
      <tr>
       <td><input id='ab' type="text" placeholder='Enter your First Name' className='a1'/></td>
      <td><input id='ac' type="text" placeholder='Enter your Last Name' className='a1'/></td>
      </tr>
      <tr>
      </tr><br></br>
      <tr>
      <td><label for='ad'>Mobile Number</label></td>
      <td><label for='ae' >Email ID</label></td>
      </tr>
      <tr>
      <td><input id='ad' type="tel" placeholder='Enter your Mobile Number' className='a1' pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/></td>
      <td><input id='ae'  type="email" placeholder='Enter your Email ID' className='a1'/></td>
      </tr><br></br>
      <tr>
      <td><label for='af'>Department</label></td>
      <td><label for='ag'>Country</label></td>
      </tr>
      <tr>
      <select type='text' className='a1'>
      <option value="" disabled selected hidden>--select--</option>
      <option value="fghj" >GM</option>
      <option value="fgh">Backend</option>
      <option value="fhj">FrontEnd</option>
      <option value="fg" >Full-Stack</option>
      </select>
      <td><input id='ag' type="email" placeholder='Enter your Country'className='a1'/></td>
      </tr><br></br>
      <tr>
      <td><label for='ah'>State</label></td>
      <td><label for='ai'>City</label></td>
      </tr>
      <tr>
      <td><input id='ah' type="text" placeholder='Enter your State' className='a1'/></td>
      <td><input id='ai' type="text" placeholder='Enter your City' className='a1'/></td>
      </tr><br></br>
      <tr>
      <td><label for='aj'>DOB</label></td>
      <td><label for='ak'>Date of Joining</label></td>
      </tr>
      <tr>
      <td><input id='aj' type="date" className='a1'/></td>
      <td><input id='ak' type="date" className='a1'/></td>
      </tr><br></br>
      <tr>
      <td><label for='al'>Photo</label></td>
      <td><label for='am'>Address</label></td>
      </tr>
      <tr>
      <td><input id='al' type="file" name="filename" className='a1'/></td>
      <textarea placeholder='Enter your Address' className='ta'>
      <td><input id='am' type="text"  /></td>
      </textarea>
      </tr><br></br>  
      <br></br>
       </table>
       <div className='submitbutton'>
       <button onClick={handleClick}>Submit</button>
       </div>
      </div>
      </div>
      </div>
  )
}
