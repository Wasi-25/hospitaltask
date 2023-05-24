import React, { useState } from 'react';
import "./PatientCard.css";
import { Button } from '@mui/material';

const PatientCard = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`divleft_inner ${isActive ? 'actives' : ''}`} onClick={handleClick}>
            <div className='patient_photo'>
              <img src={props.imgSrc} alt="" className='patimg' />
            </div>
            <div className='patient_details'>
                <p>{props.name}</p>
                <p>{props.age}, {props.gender}</p>
                <span style={{opacity:"0.7"}}>Bill No.</span>
                <span>{props.billno}</span><br />
                {isActive && <Button style={{border:"1px solid blue", textTransform:"initial", borderRadius:"18px", padding:"0px", width:"200px"}}>View Prescription</Button>}
          </div>
          </div>
  )
}

export default PatientCard
