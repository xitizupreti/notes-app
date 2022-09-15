import React from "react";
import logo from './logo.jpg';

const Header=()=>{
  return (
  <>
  <div className="header">
<img src={logo} alt="logo" width='80' height='90%'/>
<h1>Notes App</h1>
  </div>
  </>
  );
};

export default Header;