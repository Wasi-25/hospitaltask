import React from 'react';
import "./Nav.css";
import { Button } from "@mui/material";
import {BiBell} from 'react-icons/bi'

const Nav = () => {
  return (
    <div className='container1'>
        <input type="text" className='inputsearch' placeholder='Search Patient'/>
        <div className="butt">
            <Button variant='contained' className='buttons' style={{margin:"0px 10px", borderRadius:"18px", textTransform:"initial"}}>Make an Appointment</Button>
            <Button variant="contained" className='buttons' style={{margin:"0px 10px", borderRadius:"18px", textTransform:"initial"}}>Add Patient</Button>
            <Button variant="contained" className='buttons' style={{margin:"0px 10px", borderRadius:"18px", padding:"10px", textTransform:"initial"}}><BiBell style={{fontSize: "18px"}}/></Button>
        </div>
    </div>
  )
}

export default Nav