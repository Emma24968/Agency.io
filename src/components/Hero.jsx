import React from "react";
import assets from "../assets/assets";

export default function Hero() {
  return (
    <div className="flex flex-col items-center gap-6 py-20 px-4 text-center w-full text-gray-700 dark:text-white">
      <button className="flex items-center gap-2 border border-gray-300 pr-4 p-2 rounded-full rounded">
        <img src={assets.group_profile} alt="" width={70} />
        <span className="font-medium text-xs">Trusted by 10k+ people</span>
      </button>
      <h1 className="font-bold text-5xl">Turning imagination into<p><span>digital </span>impact</p></h1>
      <h5>Creating meaning connections and turning big ideas <p>into interactive digital experiences.</p></h5>
      <img src={assets.bgImage1} alt="gradient color" className="absolute " />
      <img src={assets.hero_img} alt="hero image" />
    </div>
  );
}
