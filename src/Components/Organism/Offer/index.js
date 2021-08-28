import React from "react";
import styled from "styled-components";

import { Badge } from "Components/Atoms";

const OfferWrapper = styled.div`
  background-color: #fadff5;
`;

const Offer = () => {
  return (
    <OfferWrapper className="w-full p-3 flex flex-row justify-center">
      <div className="flex flex-row">
        <p className="font-semibold mr-2">Try</p>
        <Badge />
      </div>
      <p>
        Save upto <span className="font-bold">60%</span> on your healthcare
        expenses*
      </p>
    </OfferWrapper>
  );
};

export default Offer;
