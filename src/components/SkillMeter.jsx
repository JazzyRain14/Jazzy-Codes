import React, { useState } from "react";

const SkillMeter = ({ skillName, className, percentage }) => {
  const [isHovered, setIsHovered] = useState(false);

  const mouseOn = () => {
    setIsHovered(true);
  };
  const mouseOff = () => {
    setIsHovered(false);
  };
  return (
    <>
      <div>
        <h1 className="text-sm text-white/100 font-semibold">{skillName}</h1>
        <div className="relative transition-all duration-300 cursor-pointer hover:shadow-xl">
          {isHovered && (
            <span className="absolute -top-4 left-1/2 translate-x-1/2 bg-[#333] text-white py-1 px-2">
              {percentage}%
            </span>
          )}
          <span className="border-[#08244f] border block h-5 rounded overflow-hidden transition-all duration-3">
            <span
              className={className}
              style={{ width: `${percentage}%` }}
              onMouseOver={mouseOn}
              onMouseOut={mouseOff}
            ></span>
          </span>
        </div>
      </div>
    </>
  );
};

export default SkillMeter;
