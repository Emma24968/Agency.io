import { teamData } from "../assets/assets";
import React from "react";

export default function Team() {
  return (
    <div className="flex flex-col items-center  gap-6 py-20 px-4 text-center w-full">
      <h3 className="font-bold text-3xl">Meet the Team</h3>
      <p>
        A passionate team of digial experts  dedicated to your<br /> brand's success
      </p>
      <div className="grid grid-cols-4 gap-6 items-center ">
        {teamData.map((team, index) => {
          return (
            <div
              key={index}
              className="flex gap- shadow-lg border-transparent border-1 hover:border-gray-100  bg-white p-4 rounded-lg"
            >
              <img
                src={team.image}
                width={50}
                height={20}
                className="rounded-full "
              />
              <div className="text-start">
                <h3>{team.name}</h3>
                <p>{team.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
