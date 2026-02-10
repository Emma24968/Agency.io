import React from "react";
import assets, { company_logos } from "../assets/assets";
import { category } from "../assets/assets";
export default function Services() {
  return (
    <div>
      <img
        src={assets.bgImage2}
        alt="gradient color"
        className="absolute top-150 -left-10"
      />
      <div className="flex flex-col items-center z-10">
        <p>Trusted by Leading Companies</p>
        <div className="flex gap-8 mt-8">
          {company_logos.map((logo, index) => (
            <img src={logo} key={index} alt="company logos" width={70} />
          ))}
        </div>
        <div className="flex flex-col items-center text-center">
          <p className="font-bold text-3xl mt-30">How can we help?</p>
          <h5>
            From strategy to execution,we craft digital solutions that move{" "}
            <p>your business forward</p>
          </h5>
        </div>
        <div className="grid grid-cols-2 gap-6 mt-8">
          {category.map((categories, index) => (
            <div
              key={index}
              className="flex gap-2 shadow-lg border-transparent border-1 hover:border-gray-100  bg-white z-50 p-4 rounded-lg "
            >
              <div className="border-2 rounded-full border-gray-200 items-center">
                <img src={categories.image}  alt={categories.title} />
              </div>

              <div className="x-10">
                <h5 className="font-semibold">{categories.title}</h5>
                <p className="text-sm text-gray-500">
                  {categories.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
