import React, { useState } from 'react';
import { TextField , Button , Container } from '@mui/material';
import {useNavigate} from 'react-router-dom';
import './Loginpage.css';

const Loginpage= () => {

  const [username, setUsername] = useState('');
  const handleUsername = (event) => { 
      setUsername(event.target.value) 
  }

  const [password, setPassword] = useState('');
  const handlePassword = (event) => { 
      setPassword(event.target.value) 
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
  };
  const Navigate=useNavigate();
  
  const handleClick=(event)=>{
    event.preventDefault();
    Navigate("/Sidebar");
  }
  const handleLink=(event)=>
  {
    event.preventDefault();
    Navigate("/signup");
  }



  return (
    <div className='box'>
      <div className='abc'>
    <Container >

      <h1 id='admin'> ADMIN</h1>
      <form onSubmit={handleSubmit} >

        <TextField variant="outlined" margin="normal" required fullWidth label="USER" onChange={handleUsername}>
            {username}
        </TextField>

        <TextField variant="outlined" margin="normal" required fullWidth label="PASSWORD" type="password" onChange={handlePassword}>
            {password}
        </TextField>
        <br></br>
        <Button type="submit" fullWidth variant="contained" color="primary" onClick={handleClick}>
          Log In
        </Button>
        <p><a href='' onClick={handleLink}>register?</a></p>
      </form>
    </Container>
    </div>
    </div>
  );
};

export default Loginpage;
