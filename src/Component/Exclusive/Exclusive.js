import React from "react";
import Shovel from "../../images/Shovel.jpg";

const Exclusive = () => {
  return (
    <div className="md:p-16">
      <h1 className="text-5xl text-center font-bold p-4">Hot Sale </h1>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 p-4">
        <div className="p-4">
          <img src={Shovel} className="rounded-lg" alt="" />
        </div>
        <div className="pt-12">
          <h1 className="text-2xl font-semibold text-center">Steel Shovel.</h1>
          <p className="text-lg p-4">
            We have accumulated Laptop prices in bd list including top laptops
            available in Bangladesh. Our extensive laptop price in the bd list
            allows you to choose.
          </p>
          <p className="text-center">
            <button className="w-24 h-12 bg-lime-600 text-white font-bold">
              Show
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Exclusive;
