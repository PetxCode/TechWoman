import React from "react";
import { GiReactor } from "react-icons/gi";
import styled from "styled-components";

const Card = ({ title, title1, icon }) => {
  return (
    <div>
      <Container bc>
        <Wrapper>
          <Icon>{icon}</Icon>
          <Title>
            <div>{title}</div>
            <span>{title1}</span>
          </Title>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Card;

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  margin: 0 10px;
`;

const Icon = styled.div`
  margin-right: 30px;
  margin-left: 10px;
  color: red;
  font-size: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const Container = styled.div`
  width: 300px;
  height: 180px;
  background-color: white;
  border-radius: 5px;
  transition: all 350ms;
  transform: scale(1);
  border: 1px solid;
  border-color: ${({ bc }) => (bc ? "red" : "white")};
  margin: 10px;

  :hover {
    transform: scale(1.02);
    cursor: pointer;
    border-color: white;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(249, 243, 243, 1) 0px 10px 10px;
  }
`;
