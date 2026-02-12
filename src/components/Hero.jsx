import React from "react";
import assets from "../assets/assets";

export default function Hero() {
  return (
    <div className="flex flex-col items-center  gap-6 py-20 px-4 text-center w-full text-gray-700 dark:text-white">
      <button className="flex items-center gap-2 border border-gray-300 pr-4 p-2 rounded-full rounded">
        <img src={assets.group_profile} alt="" width={70} />
        <span className="font-medium text-xs">Trusted by 10k+ people</span>
      </button>
      <h1 className="font-bold text-5xl">
        Turning imagination into
        <p>
          <span className="bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent">
            digital{" "}
          </span>
          impact
        </p>
      </h1>
      <h5>
        Creating meaning connections and turning big ideas{" "}
        <p>into interactive digital experiences.</p>
      </h5>
      <div className="absolute left-100 top-70 -z-50">
        <img src={assets.bgImage1} alt="gradient color" className="absolute -top-60  mr-1 " />
      </div>
      <img
        src={assets.hero_img}
        alt="hero image"
        width={800}
        className="z-10"
      />
    </div>
  );
}
