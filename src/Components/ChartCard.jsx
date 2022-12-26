import React from "react";
import Logo from ".././assets/images/logo.svg";

const ChartCard = () => {
  return (
    <div className="card">
      <div className="">
        <div>
          <p>My balance</p>
          <p>$921.48</p>
        </div>
        <img src={Logo} alt="" />
      </div>
      <div className="">
        <p>Spending - Last 7 days</p>
        <div className=""></div>
        <div className="">
          <div>
            <p>Total this month</p>
            <p>$478.33</p>
          </div>
          <div>
            <p>+2.4%</p>
            <p>from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
