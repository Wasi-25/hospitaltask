import React, { useEffect, useState } from 'react';
import "./Billing.css";
import Nav from "../../Components/Nav/Nav";
import { Button } from "@mui/material";
import {FaGreaterThan} from "react-icons/fa";
import {FaLessThan} from "react-icons/fa";
import PatientCard from '../../Components/PatientCard/PatientCard';
import Bill from '../../Components/Bill/Bill';

const Billing = () => {

  const [patient, setPatient] = useState([]);
  const [bill,setBill] = useState([]);

  const loadData = async ()=>{
    let response = await fetch("https://hospitaltask.onrender.com/api/patient", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      }
    });
    response = await response.json();
    // console.log(response[0])
    setPatient(response[0]);
  }
  const loadBill = async ()=>{
    let response = await fetch("https://hospitaltask.onrender.com/api/bill", {
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      }
    });
    response = await response.json();
    // console.log(response[0])
    setBill(response[0]);
  }

  useEffect(()=>{
    loadData();
    loadBill();
  },[]);

  return (
    <>
      <div className='main'>
        <Nav />
      </div>

      <div className='top'>
        <h2>Billing Overview</h2>
        <div className="topdate">
          <Button variant='contained'><FaLessThan style={{padding:"0px"}}/></Button>
          <span style={{fontSize:"15px", margin:"0px 8px"}}> February 2023 </span>
          <Button variant='contained'><FaGreaterThan style={{padding:"0px"}}/></Button>
        </div>
      </div>

      <div className='maindiv'>
        
         <div className='divleft' style={{width:"20vw"}}>

          {
            patient !==[]
            ? patient.map((data)=>{
              return(
              <div key={data._id}>
                <PatientCard 
                name = {data.name}
                age={data.age}
                gender={data.gender}
                billno={data.billno}
                imgSrc ={data.img}
                />
                </div>
              )
            }):<div>No Patients !</div>
          }

        </div>

        <div className='divright' style={{width:"50vw"}}>

          <div className='divright_head'>
            <div>
          <h6>Billing Details</h6>
          <div>
              <Button variant='contained' style={{margin:"0px 10px", borderRadius:"18px", textTransform:"initial"}} className='printbutton'>Print Bill</Button>
          </div>
          </div>
          <Bill />
          </div>
        </div>
      </div>
    </>
  )
  
}
export default Billing;
