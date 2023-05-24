import React from 'react';
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { TfiViewGrid } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";
import { BsClipboard2Pulse } from "react-icons/bs";
import { IoNewspaperOutline } from "react-icons/io5";
import { HiOutlineSupport } from "react-icons/hi";
import { IoSettingsOutline } from "react-icons/io5"

const Sidebar = ({children}) => {

  const menuItem = [
    {
      path:"/",
      name:"Dashboard",
      icon: <TfiViewGrid />
    },
    {
      path:"/patient",
      name:"Patient",
      icon: <VscAccount />
    },
    {
      path:"/appointment",
      name:"Appointment",
      icon: <BsClipboard2Pulse />
    },
    {
      path:"/billing",
      name:"Billing",
      icon: <IoNewspaperOutline />
    }
  ]

  return (
      <div className="containers">
        <div className="sidebar">
          <div className="top_section">
            <h1 className="logo">Logo</h1>
          </div>
          {
            menuItem.map((item, index)=>(
              <NavLink to={item.path} key={index} className="link" activeClassName="active">
                <div className="icon">{item.icon}</div>
                <div className="link_text">{item.name}</div>
              </NavLink>
            ))
          }
          <hr style={{margin:"0px 13px"}}></hr>
        <div className='bottom_sidebar'>
          <NavLink to="#" className="link" style={{background:"none", "marginTop":"86.46%",  marginLeft:"-12px"}}>
            <div className="icon"><HiOutlineSupport /></div>
            <div className="link_text">Support</div>
          </NavLink>
          <NavLink to="#" className="link" style={{background:"none", "marginTop":"-8%",  marginLeft:"-12px"}}>
            <div className="icon"><IoSettingsOutline/></div>
            <div className="link_text">Settings</div>
          </NavLink>
          
        </div>
        </div>
        <main>{children}</main>
      </div>
  )
}

export default Sidebar