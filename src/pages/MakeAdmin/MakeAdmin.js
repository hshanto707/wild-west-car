import React from 'react';
import { useState } from 'react';
import  TextField  from '@mui/material/TextField';
import  Button  from '@mui/material/Button';
import  Alert  from '@mui/material/Alert';

const MakeAdmin = () => {
    
    const [email,setEmail] = useState('');
    const [success,setSuccess] =useState(false);
    const handleOnBlur = e =>{
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e =>{
        const user = {email};

        fetch('https://limitless-everglades-07733.herokuapp.com/users/admin',{
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            setSuccess(true);
        });

        e.preventDefault()
    }
    return (
        <div>
          <h1 className="dash-title mb-3">MAKE ADMIN /</h1>
            <form onSubmit={handleAdminSubmit}>
              <TextField 
               label="Email"
               type="email"
               sx={{width:'50%', mr: 3}}
               onBlur={handleOnBlur}
               variant="standard" />
              <Button type="submit" variant="contained" className="button-dark text-dark">Proceed</Button>
            </form>
            { success && 
              <Alert severity="success">Made admin successfully!</Alert>
            }
        </div>
    );
};

export default MakeAdmin;