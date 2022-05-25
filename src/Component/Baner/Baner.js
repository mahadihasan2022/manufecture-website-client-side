import React from "react";

const Baner = () => {
  return (
    <div>
      <div class="carousel-inner relative w-full overflow-hidden">
        <div class="carousel-item active relative float-left w-full">
          <img
            src="https://5.imimg.com/data5/HV/OI/MY-6457442/pick-axe-500x500.jpg"
            class="block w-full"
            alt="Motorbike Smoke"
          />
          <div class="carousel-caption hidden md:block absolute text-center">
            <h5 class="text-2xl text-black font-bold">Construction Tools</h5>
            <p className="text-sm font-semibold text-black p-6">
              Construction tools list for building construction works such as
              concrete, brick masonry, levelling, woodworks, floor works, slab
              works, bricklaying, plastering, etc. It provided.
            </p>
            <button className="w-24 h-12 bg-lime-600 text-white font-bold">
              Show Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baner;
