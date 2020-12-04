import React from "react";
import dashboardOne from "../../assets/icons/dashboardOne.svg";
import "./DashboardComponentOne.scss";

function DashboardComponentOne({ onClickTwo }) {
  return (
    <div className='dashboard-one-overlay'>
      <img
        src={dashboardOne}
        alt='dashboardOne'
        className='dashboard-one'
        onClick={onClickTwo}
      />
    </div>
  );
}

export default DashboardComponentOne;
