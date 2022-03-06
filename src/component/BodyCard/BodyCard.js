import React from "react";
import styled from "styled-components";
import pix from "./3.jpg";

const BodyCard = ({ rr, title, subTitle, pix }) => {
  return (
    <div>
      <Container>
        <Wrapper rr={rr}>
          <Image src={pix} />
          <Holder>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
          </Holder>
        </Wrapper>
      </Container>
    </div>
  );
};

export default BodyCard;

const SubTitle = styled.div`
  /* width: 300px; */

  @media screen and (max-width: 700px) {
    width: 300px;
  }
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 30px;
  line-height: 1.2;
  margin-bottom: 20px;

  @media screen and (max-width: 700px) {
    line-height: 1;
    margin: 20px 0;
  }
`;

const Holder = styled.div`
  margin-left: 20px;
  width: 400px;

  @media screen and (max-width: 700px) {
    width: 300px;
    height: 300px;
    margin-right: 0px;
    text-align: center;
  }
`;

const Image = styled.img`
  height: 300px;
  width: 400px;
  object-fit: cover;
  border-radius: 5px;
  margin-right: 20px;
  /* margin-left: 10px; */

  @media screen and (max-width: 700px) {
    width: 300px;
    height: 300px;
    margin-right: 0px;
  }

  /* @media screen and (max-width: 1024px) {
    width: 500px;
  } */
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: ${({ rr }) => (rr ? "row" : "row-reverse")};

  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 250px;
  background-color: white;
  /* margin: 30px 0; */
  margin-top: 90px;
`;
