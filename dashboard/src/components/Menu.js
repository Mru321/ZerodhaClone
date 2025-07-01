import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {

  const [selectedMenu, setSelectedMenu]=useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen]=useState(false);
  //to keep the selected menu highlighted.
  //to keep track of the menu which is currently selected
  const handleMenuCLicked= (index)=>{
    setSelectedMenu(index);
  };
  //to keep track of if the profile dropdown is open
  const handlePofileDropdown= ()=>{
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };
  //already styled class in css
  const menuClass="menu";
  const activeMenuClass="menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link style={{textDecoration:"none"}} to='/' onClick={()=>handleMenuCLicked(0)}>
              <p className={selectedMenu==0 ? activeMenuClass: menuClass}>Dashboard</p>
            </Link>
            
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to='/orders' onClick={()=>handleMenuCLicked(1)}>
              <p className={selectedMenu==1 ? activeMenuClass: menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to='/holdings' onClick={()=>handleMenuCLicked(2)}>
              <p className={selectedMenu==2 ? activeMenuClass: menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to='/positions' onClick={()=>handleMenuCLicked(3)}>
              <p className={selectedMenu==3 ? activeMenuClass: menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to='/funds' onClick={()=>handleMenuCLicked(4)}>
              <p className={selectedMenu==4 ? activeMenuClass: menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{textDecoration:"none"}} to='/apps' onClick={()=>handleMenuCLicked(5)}>
              <p className={selectedMenu==5 ? activeMenuClass: menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handlePofileDropdown}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
