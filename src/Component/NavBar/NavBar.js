import "./NavBar.css";
import React from "react";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
function NavBar() {
  return (
    <div className="nav-bar">
      <h1>DOZ Pharmacy-Contacts</h1>
      <div className="nav-bar-left">
        <button>ADD CONTACT</button>
        <FilterListIcon id="filter" />
        <SearchIcon id="search" />
      </div>
    </div>
  );
}

export default NavBar;
