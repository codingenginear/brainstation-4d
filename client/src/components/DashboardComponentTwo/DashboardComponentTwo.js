import React from "react";
import dashboardOne from "../../assets/images/dashboardTwo.svg";
import "./DashboardComponentTwo.scss";

function DashboardComponentTwo() {
  return (
    <div className='dashboard-two-overlay'>
      <img src={dashboardOne} alt='dashboardOne' className='dashboard-two' />
    </div>
  );
}

export default DashboardComponentTwo;
