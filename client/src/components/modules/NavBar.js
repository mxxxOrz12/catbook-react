import React from "react";

import "./NavBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = () => {
  return (
    // TODO Step 0a: Implement NavBar similar to old navigation bar found in old_index.html.
    // Hint: Look for the <nav> HTML tag.
    // Remember "class" attributes in HTML are renamed to "className" in ReactJS.
    <nav className="NavBar-container">
      <div className="NavBar-title">mxxxOrz的个人博客</div>
      <div className="NavBar-right">
        <div className="NavBar-item">首页</div>
        <div className="NavBar-item">归档</div>
        <div className="NavBar-item">关于</div>
      </div>
    </nav>
  );
};

export default NavBar;
