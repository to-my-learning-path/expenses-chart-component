import React from "react";
import Logo from ".././assets/images/logo.svg";

const ChartCard = ({ data }) => {
  return (
    <div className=" my-16 px-4 mx-auto w-fit">
      <div className="bg-soft-red rounded-lg p-4 flex justify-between mb-4">
        <div className="text-very-pale-orange ">
          <p className=" text-[16px]  text-cream">My balance</p>
          <p className=" font-bold">$921.48</p>
        </div>
        <img src={Logo} alt="" />
      </div>
      <div className=" bg-very-pale-orange p-4 rounded-lg">
        <p className=" text-dark-brown font-bold">Spending - Last 7 days</p>
        <div className="flex justify-between gap-2 py-4 chart">
          {data.map((item) => (
            <div key={item.day} className=" flex flex-col-reverse max-w-min">
              <p className=" text-center text-medium-brown">{item.day}</p>
              <div
                className=" peer cursor-pointer bg-soft-red rounded-md hover:bg-cyan "
                style={{ height: `${item.amount * 2}px` }}
              ></div>
              <p className=" invisible peer-hover:visible mb-2 text-[12px] rounded bg-dark-brown p-1 text-[#fff]">{`$${Number(
                item.amount
              ).toFixed(2)}`}</p>
            </div>
          ))}
        </div>
        <div className=" flex justify-between py-4 border-t-cream border-t-2">
          <div>
            <p className=" text-[16px] text-medium-brown">Total this month</p>
            <p className=" font-bold">$478.33</p>
          </div>
          <div>
            <p className=" font-bold text-end">+2.4%</p>
            <p className=" text-[16px] text-medium-brown">from last month</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartCard;
