import React from "react";
import Hero from "../Hero/Hero";
import BodyCard from "../BodyCard/BodyCard";
import UsedCard from "../Card/UsedCard";
import USeBodyCard from "../BodyCard/USeBodyCard";
import styled from "styled-components";

const Home = () => {
  return (
    <div>
      <Container>
        <Hero />
        <UsedCard />
        <USeBodyCard />
      </Container>
    </div>
  );
};

export default Home;

const Container = styled.div`
  padding-top: 100px;
`;
