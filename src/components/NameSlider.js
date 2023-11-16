import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";
import logo1 from "../assets/images/logo1.jpg";
import logo2 from "../assets/images/logo1.jpg";
import logo3 from "../assets/images/logo1.jpg";

const Container = styled.div`
  background: white;
  margin-top: 9rem;
  display: flex;
`;

const SlideAnimation = keyframes`
 from{
  transform: translateX(0);
 }
 to{
  transform: translateX(-100%)
 }
`;

const NoScroll = styled.div`
  overflow: hidden;
  padding: 60px 0;
  background: white;
  white-space: nowrap;
  &:hover {
    animation-play-state: paused;
  }
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 250%;
    height: 100%;
    background: white;
    content: "";
  }
`;

const NameSlide = styled.div`
  display: inline-block;
  animation-name: ${SlideAnimation};
  animation-duration: 36s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Img = styled.img`
  height: 100px;
  margin: 0 30px;
`;

const NameSlider = () => {
  return (
    <Container>
      <NoScroll>
        <NameSlide>
          <Img src={logo1}></Img>
          <Img src={logo2}></Img>
          <Img src={logo3}></Img>
          <Img src={logo3}></Img>
          <Img src={logo1}></Img>
          <Img src={logo2}></Img>
          <Img src={logo3}></Img>
          <Img src={logo3}></Img>
        </NameSlide>
        <NameSlide>
          <Img src={logo1}></Img>
          <Img src={logo2}></Img>
          <Img src={logo3}></Img>
          <Img src={logo3}></Img>
          <Img src={logo1}></Img>
          <Img src={logo2}></Img>
          <Img src={logo3}></Img>
          <Img src={logo3}></Img>
        </NameSlide>
      </NoScroll>
    </Container>
  );
};

export default NameSlider;
