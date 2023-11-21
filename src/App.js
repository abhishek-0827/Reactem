// src/App.js
import React from 'react';
import Sidebar from './dashboard/Sidebar';
import EmployeeForm from './dashboard/EmployeeForm';
import { BrowserRouter, Routes , Route} from 'react-router-dom';
import SignUp from './signup';
import Loginpage from './dashboard/Loginpage';
//import Header from './dashboard/Header';

function App() {
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Loginpage/>}></Route>
         <Route path="/signup" element={<SignUp/>}></Route>
         <Route path="/Sidebar" element={<Sidebar/>}></Route>
         <Route path="/EmployeeForm" element={<EmployeeForm/>}></Route>
         <Route path="/Sidebar" element={<EmployeeForm/>}></Route>
       </Routes>
    </BrowserRouter>
    );
  };
  //<Header/>

export default App;
