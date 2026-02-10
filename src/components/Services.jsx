import React from "react";
import assets, { company_logos } from "../assets/assets";
import { category } from "../assets/assets";
export default function Services() {
  return (
    <div>
      <img src={assets.bgImage2} alt="gradient color" className="absolute" />
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
        {category.map((categories, index) => {
          return (
            <div className="flex border bg-white z-50 p-4" key={index}>
              <div className="border-6 rounded-full border-gray-200 ">
                <img src={categories.image} alt="" />
              </div>
              <div>
                <h5>{categories.title}</h5>
                <p>{categories.description}</p>
              </div>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}
