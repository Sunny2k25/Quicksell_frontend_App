import React, { useState } from "react";
import displayIcon from "../assets/Display.svg";
import downIcon from "../assets/down.svg";

const Controls = ({ setGrouping, setSorting }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);

  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
    setDropdownVisible(false);
  };

  const handleSortingChange = (e) => {
    setSorting(e.target.value);
    setDropdownVisible(false);
  };

  return (
    <div
      style={{
        position: "fixed",
        padding: "10px",
        top: 0,
        left: 0,
        zIndex: 1000,
        width: "100%",
        height: "50px",
        backgroundColor: "white",
        marginLeft: "40px",
      }}
    >
      {/* Display Button */}
      <div
        className="button-display"
        onClick={toggleDropdown}
        style={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <img src={displayIcon} alt="Settings Icon" />
        <span style={{ marginLeft: "5px", marginRight: "5px" }}>Display</span>
        <img src={downIcon} alt="Dropdown Arrow" />
      </div>

      {/* Dropdown Controls */}
      {isDropdownVisible && (
        <div
          className="controls"
          style={{
            position: "absolute",
            backgroundColor: "white",
            marginTop: "15px",
            display: "flex",
            gap: "20px",
            padding: "10px",
            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            borderRadius: "5px",
          }}
        >
          {/* Grouping Controls */}
          <div className="grouping">
            <h4>Grouping</h4>
            <select onChange={handleGroupingChange} style={{ padding: "5px" }}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>

          {/* Sorting Controls */}
          <div className="sorting">
            <h4>Ordering</h4>
            <select onChange={handleSortingChange} style={{ padding: "5px" }}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Controls;
