import React from "react";
import { Bar, BarChart, Line, LineChart, XAxis, YAxis } from "recharts";

const DashBoard = () => {
  const data = [
    {
      month: "Mar",
      investment: 1900,
      sell: 2400,
      revenue: 2000,
    },
    {
      month: "Apr",
      investment: 2000,
      sell: 2600,
      order: 2400,
    },
    {
      month: "May",
      investment: 3500,
      sell: 2800,
      order: 2500,
    },
    {
      month: "Jun",
      investment: 2000,
      sell: 3200,
      order: 3200,
    },
    {
      month: "Jul",
      investment: 2500,
      sell: 2700,
      order: 2500,
    },
    {
      month: "Aug",
      investment: 3000,
      sell: 4500,
      order: 3900,
    },
  ];
  return (
    <div>
      <div className="p-8 charts-container">
        <h2 className="text-2xl font-bold text-center p-8">
          Its Our Website DashBoard.
        </h2>
        <div className="grid md:grid-cols-2 sm:grid-cols-1">
          <div>
            <h3 className="text-xl font-bold text-center p-8">
              Investment Vs order
            </h3>
            <LineChart width={300} height={300} data={data}>
              <Line dataKey={"investment"}></Line>
              <XAxis dataKey={"month"}></XAxis>
              <YAxis dataKey={"sell"}></YAxis>
              <Line dataKey={"order"}></Line>
            </LineChart>
          </div>
          <div>
            <h3 className="text-xl font-bold text-center p-8">Sell Vs order</h3>
            <BarChart width={300} height={300} data={data}>
              <XAxis dataKey={"month"}></XAxis>
              <YAxis dataKey={"investment"}></YAxis>
              <Bar dataKey={"order"} barSize={30} fill="#8884d8"></Bar>
              <Bar dataKey={"sell"} barSize={30} fill="#2ff3d3"></Bar>
            </BarChart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
