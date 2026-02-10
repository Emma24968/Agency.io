import React from "react";
import { portfolio } from "../assets/assets";
export default function Portfolio() {
  return (
    <div>
      <div className="flex flex-col items-center text-center">
        <p className="font-bold text-3xl mt-30">Our Work</p>
        <h5>
          Browse our portfolio of innovative digital projects that showcase{" "}
          <p>creativity,prformance and result</p>
        </h5>
      </div>
      <div
        className="grid grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  gap-6
  max-w-[70rem]
  mx-auto
  px-4
  sm:px-6
  mt-20"
      >
        {portfolio.map((portfolios, index) => {
          return (
            <div key={index}>
              <img src={portfolios.image} />
              <h5 className="font-bold text-[18px]">{portfolios.title}</h5>
              <p className="text-[14px]">{portfolios.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
