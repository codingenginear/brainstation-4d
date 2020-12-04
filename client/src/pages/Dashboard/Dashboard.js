import React, { useState } from "react";
import "./Dashboard.scss";
import screen5 from "../../assets/images/screen5.svg";
import DashboardComponentOne from "../../components/DashboardComponentOne/DashboardComponentOne";
import DashboardComponentTwo from "../../components/DashboardComponentTwo/DashboardComponentTwo";

function Dashboard() {
  const [showDashboardOne, setShowDashboardOne] = useState(false);
  const onClick = () => {
    setShowDashboardOne(true);
  };

  const [showDashboardTwo, setShowDashboardTwo] = useState(false);
  const onClickTwo = () => {
    setShowDashboardTwo(true);
  };

  return (
    <div className='dashboard'>
      <img
        src={screen5}
        alt='dashboard'
        className='dashboard__image'
        onClick={onClick}
      />
      {showDashboardOne && <DashboardComponentOne onClickTwo={onClickTwo} />}
      {showDashboardOne && showDashboardTwo && <DashboardComponentTwo />}
    </div>
  );
}

export default Dashboard;
