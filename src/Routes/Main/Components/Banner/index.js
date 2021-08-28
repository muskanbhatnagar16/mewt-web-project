import React from "react";
import styled from "styled-components";

import bannerImg from "Assets/practo_banner.webp";
import Search from "Routes/Main/Components/Banner/Components/Search";

const Wrapper = styled.div`
  background-color: #283587;
`;

function Banner() {
  return (
    <div className="w-full">
      <Wrapper className="h-52 w-full text-center font-semibold flex flex-col">
        <h1 className="pt-8 text-5xl text-white mb-12">
          Experience the new appointment booking system
        </h1>
        <Search />
      </Wrapper>
      <img src={bannerImg} />
    </div>
  );
}

export default Banner;
