import React from "react";
import "./Sidebar.css";
import { Avatar } from "@material-ui/core";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar_recentItem">
      <span className="sidebar_hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1547989453-11e67ffb3885?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=889&q=80"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        {/*quick import -> Ctrl+Space*/}
        <h2>Eldhose</h2>
        <h4>eldhose@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who Viewed You</p>
          <p className="sidebar_statno">3210</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on Post</p>
          <p className="sidebar_statno">2109</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("design")}
        {recentItem("reactjs")}
        {recentItem("developer")}
        {recentItem("programmer")}
        {recentItem("softwareengineer")}
      </div>
    </div>
  );
}

export default Sidebar;
