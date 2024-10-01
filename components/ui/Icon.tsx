import React from "react";
import { Icon } from "@iconify/react";
const Icons = ({ icon, className, width, rotate, hFlip, vFlip } : { icon?: string, className?: string, width?: number, rotate?: number, hFlip?: boolean, vFlip?: boolean}) => {
  return (
    <>
      <Icon
        width={width}
        rotate={rotate}
        hFlip={hFlip}
        icon={icon}
        className={className}
        vFlip={vFlip}
      />
    </>
  );
};

export default Icons;
