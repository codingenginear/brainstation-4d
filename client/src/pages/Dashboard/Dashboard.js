import React from "react";
import "./Dashboard.scss";
import screen5 from "../../assets/images/screen5.svg";

function Dashboard() {
  return (
    <div className='dashboard'>
      <img src={screen5} alt='dashboard' className='dashboard__image' />
    </div>
  );
}

export default Dashboard;
