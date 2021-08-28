import React from "react";
import styled from "styled-components";

const BadgeButton = styled.span`
  background-color: #b55ca3;
`;

const Badge = () => {
  return (
    <BadgeButton className="inline-flex items-center justify-center px-2 py-1 mr-2 text-xs font-bold leading-none text-red-100 rounded-full">
      PLUS
    </BadgeButton>
  );
};

export default Badge;
