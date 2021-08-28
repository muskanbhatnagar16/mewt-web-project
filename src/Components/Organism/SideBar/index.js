import * as React from "react";
import styled from "styled-components";
import SimpleBar from "simplebar-react";

const Wrapper = styled.div`
  background-color: white;
  box-shadow: 0 0 24px 0 rgba(0, 0, 0, 0.06), 0 1px 0 0 rgba(0, 0, 0, 0.02);
  display: block;
  position: fixed;
  transition: all 200ms ease-out;
  z-index: 9999;
  float: right !important;
  top: 0;
  bottom: 0;
  width: 400px;
  ${({ width }) => width && `width: ${width || 500}px !important`};
  ${({ visible }) =>
    visible ? "right: 0px !important;" : "right: -1500px !important;"}
`;

const OverLay = styled.div`
  background-color: rgba(#eff2f7, 0.55);
  position: absolute;
  top: 0;
  bottom: 0;
  display: none;
  z-index: 9998;
  transition: all 0.2s ease-out;
  ${({ visible }) =>
    visible && "display: block;width: 100vw;height: 100vh;cursor:pointer;"}
`;

const RightBar = ({ content, width, visible, hideSideBar }) => {
  return (
    <React.Fragment>
      <Wrapper visible={visible} style={{ width }} className="right-bar">
        <SimpleBar style={{ height: "900px" }}>
          <div data-simplebar className="h-100">
            {content}
          </div>
        </SimpleBar>
      </Wrapper>
      <OverLay
        onClick={hideSideBar}
        visible={visible}
        className="rightbar-overlay"
      ></OverLay>
    </React.Fragment>
  );
};

export default RightBar;
