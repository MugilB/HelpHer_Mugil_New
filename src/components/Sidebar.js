import React, { useState } from "react";
import "./Sidebar.css";
import "boxicons/css/boxicons.min.css";

const Sidebar = ({ onSelectView }) => { // Accept the prop here
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (view) => {
    if (onSelectView) { // Check if onSelectView is a function
      onSelectView(view); // Call the function passed from Dashboard
    }
    toggleSidebar(); // Optionally close the sidebar on item click
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="logo_details">
        <i className="bx bxl-audible icon"></i>
        <div className="logo_name">HelpHer</div>
        <i
          className={`bx ${isOpen ? "bx-menu-alt-right" : "bx-menu"}`}
          id="btn"
          onClick={toggleSidebar}
        ></i>
      </div>
      <ul className="nav-list">
        {/* <li>
          <i className="bx bx-search" onClick={toggleSidebar}></i>
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li> */}
        <li onClick={() => handleItemClick('users')}>
          <a href="#">
            <i className="bx bx-user"></i>
            <span className="link_name">Users</span>
          </a>
          <span className="tooltip">Users</span>
        </li>
        <li onClick={() => handleItemClick('bikeRides')}>
          <a href="#">
            <i className="bx bx-map-alt"></i>
            <span className="link_name">Bike Rides</span>
          </a>
          <span className="tooltip">Bike Rides</span>
        </li>
        <li onClick={() => handleItemClick('cyberCrime')}>
          <a href="#">
            <i className="bx bx-shield"></i>
            <span className="link_name">Cyber Crime</span>
          </a>
          <span className="tooltip">Cyber Crime</span>
        </li>
        <li onClick={() => handleItemClick('napkinRequests')}>
          <a href="#">
            <i className="bx bx-notepad"></i>
            <span className="link_name">Napkin Requests</span>
          </a>
          <span className="tooltip">Napkin Requests</span>
        </li>
        <li onClick={() => handleItemClick('pickAndDrop')}>
          <a href="#">
            <i className="bx bx-bus-school"></i>
            <span className="link_name">Pick and Drop</span>
          </a>
          <span className="tooltip">Pick and Drop</span>
        </li>
        <li className="profile">
          <div className="profile_details">
            <img src="profile.jpeg" alt="profile" />
            <div className="profile_content">
              <div className="name">HelpHer</div>
              <div className="designation">Admin</div>
            </div>
          </div>
          <i className="bx bx-log-out" id="log_out"></i>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;