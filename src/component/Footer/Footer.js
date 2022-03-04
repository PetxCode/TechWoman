import React from "react";
import styled from "styled-components";

const Footer = ({
  title,
  subtitle1,
  subtitle2,
  subtitle3,
  subtitle4,
  subtitle5,
  subtitle6,
}) => {
  return (
    <div>
      <Card>
        <Title>{title}</Title>
        <SubTitle>{subtitle1}</SubTitle>
        <SubTitle>{subtitle2}</SubTitle>
        <SubTitle>{subtitle3}</SubTitle>
        <SubTitle>{subtitle4}</SubTitle>
        <SubTitle>{subtitle5}</SubTitle>
        <SubTitle>{subtitle6}</SubTitle>
      </Card>
    </div>
  );
};

export default Footer;

const Card = styled.div`
  margin: 40px;
`;
const Title = styled.div`
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 35px;
`;
const SubTitle = styled.div`
  margin-left: 15px;
  margin: 10px;
  font-size: 18px;
  opacity: 0.8;

  :hover {
    cursor: pointer;
    opacity: 1;
    transform: scale(1.02);
  }
`;

const Contain = styled.div`
  width: 100%;
  height: 700px;
  background-color: black;
  color: white;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 50px;
`;
