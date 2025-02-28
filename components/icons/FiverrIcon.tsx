import React from "react";

interface IconProps {
  className?: string;
}

const FiverrIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="-2.5 -2 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      preserveAspectRatio="xMinYMin"
    > 
      <path d="M16.25 16.25v-10h-10v-.625c0-1.034.841-1.875 1.875-1.875H10V0H8.125A5.632 5.632 0 0 0 2.5 5.625v.625H0V10h2.5v6.25H0V20h8.75v-3.75h-2.5V10h6.285v6.25H10V20h8.75v-3.75h-2.5z" fill="white"/>
      <circle cx="14.375" cy="1.875" r="1.875" fill="white"/>
    </svg>
  );
};

export default FiverrIcon;
