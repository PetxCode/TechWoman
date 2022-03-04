import React from "react";
import styled from "styled-components";
import ImageUpload from "../ImageUpload/ImageUpload";

const Project = () => {
  return (
    <Container>
      <ImageUpload />
    </Container>
  );
};

export default Project;

const Container = styled.div`
  padding-top: 100px;
`;
