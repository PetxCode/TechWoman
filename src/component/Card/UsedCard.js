import React from "react";
import { AiOutlineWoman } from "react-icons/ai";
import { GiReactor } from "react-icons/gi";
import { ImManWoman } from "react-icons/im";
import styled from "styled-components";
import Card from "./Card";

const UsedCard = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Card
            title="Project"
            title1="TechWomen Nigeria"
            icon={<GiReactor />}
          />
          <Card
            title="Techwomen"
            title1="Nigeria Conference"
            icon={<AiOutlineWoman />}
          />
          <Card
            title="Join Our Techwoman's"
            title1="Experience Circle"
            icon={<ImManWoman />}
          />
        </Wrapper>
      </Container>
    </div>
  );
};

export default UsedCard;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
`;
