import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import LinearProgress from "@mui/material/LinearProgress";

const UseFooter = () => {
  return (
    <div>
      <Contain>
        <FooterHolder>
          <Wrapper>
            <Footer
              title="TechWomen"
              subtitle1="Front End Engineering"
              subtitle2="Back End Engineering"
              subtitle3="Cloud Engineering"
              subtitle4="Hello"
            />
            <Footer
              title="TechWomen"
              subtitle1="Front End Engineering"
              subtitle2="Back End Engineering"
              subtitle3="Cloud Engineering"
              subtitle4="Hello"
            />
            <Footer
              title="TechWomen"
              subtitle1="Front End Engineering"
              subtitle2="Back End Engineering"
              subtitle3="Cloud Engineering"
              subtitle4="Hello"
            />
            <Footer
              title="TechWomen"
              subtitle1="Front End Engineering"
              subtitle2="Back End Engineering"
              subtitle3="Cloud Engineering"
              subtitle4="Hello"
            />
          </Wrapper>
          <Space />
          <Holder>
            <Hold1>
              <HoldSubTitle>Powered by</HoldSubTitle>
              <HoldTitle>SheCodes</HoldTitle>
            </Hold1>
            <Hold>
              <Icon href="https//facebook.com" rel="noopener" target="_blank">
                <BsFacebook />
              </Icon>
              <Icon href="https//facebook.com" rel="noopener" target="_blank">
                <AiFillTwitterCircle />
              </Icon>
              <Icon href="https//facebook.com" rel="noopener" target="_blank">
                <BsLinkedin />
              </Icon>
            </Hold>
          </Holder>
        </FooterHolder>
      </Contain>
    </div>
  );
};

export default UseFooter;
const Space = styled.div`
  flex: 1;
`;

const FooterHolder = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 700px;
  height: 100%;
`;

const Icon = styled.a`
  text-decoration: none;
  color: white;
  margin: 10px;
  opacity: 0.6;
  transform: scale(1);
  transition: all 350ms;

  :hover {
    cursor: pointer;
    opacity: 1;
    transform: scale(1.04);
    color: #004080;
  }
`;
const HoldTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const HoldSubTitle = styled.div`
  font-size: 14px;
`;

const Hold1 = styled.div`
  text-align: center;
`;

const Hold = styled.div`
  font-size: 35px;
  display: flex;
`;

const Holder = styled.div`
  display: flex;
  justify-content: space-around;
  padding-bottom: 30px;
  align-items: center;

  @media screen and (max-width: 700px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 50px;
  }
`;

const Wrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 50px;
`;

const Contain = styled.div`
  width: 100%;
  min-height: 700px;
  height: 100%;
  background-color: black;
  color: white;
  flex-direction: column;
`;
