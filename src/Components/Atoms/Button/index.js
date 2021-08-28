import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: #283587;
  ${({ block }) => block && `width: 100%;`}
`;

const Button = ({ children, block }) => {
  return (
    <ButtonWrapper
      block={block}
      className="hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
    >
      {children}
    </ButtonWrapper>
  );
};

export default Button;
