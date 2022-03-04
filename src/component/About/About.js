import React from "react";
import styled from "styled-components";
import Orientation from "../Home/Orientation";

const About = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <div>This is the About Page</div>
          <a href="https://techwomenng.org/" rel="noopener" target="_blank">
            Know more about TechWomen
          </a>
          <Orientation />
        </Wrapper>
      </Container>
    </div>
  );
};

export default About;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;
const Container = styled.div`
  padding-top: 100px;
  width: 100%;
  height: 100%;
  min-height: calc(60vh - 80px);
`;
