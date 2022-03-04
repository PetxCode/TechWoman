import React from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header/Header";
import Home from "./component/Home/Home";
import Project from "./component/Project/Project";
import About from "./component/About/About";
import UseFooter from "./component/Footer/UseFooter";
import Register from "./component/Register/Register";
import SignIn from "./component/Register/SignIn";
import OrientationImage from "./component/Home/OrientationImage";
import MicrosoftImage from "./component/Home/MicrosoftImage";
import CapstoneImage from "./component/Home/CapstoneImage";
import { PreviewImage } from "./component/Home/PreviewImages";
import styled from "styled-components";
import CUlturalDayImage from "./component/Home/CulturalDayImages";
import AmericanCornerImage from "./component/Home/AmericanCornerImages";
import WorkshopKreatngImage from "./component/Home/WorkshopKreatngImages";

const App = () => {
  return (
    <div style={{ fontFamily: "Raleway" }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<About />} />
          <Route path="/upload" element={<Project />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<SignIn />} />

          <Route path="/culturalDay" element={<CUlturalDayImage />} />
          <Route path="/ameriacanCorner" element={<AmericanCornerImage />} />
          <Route path="/workshopKreatng" element={<WorkshopKreatngImage />} />

          <Route path="/orientation" element={<OrientationImage />} />
          <Route path="/microsoft" element={<MicrosoftImage />} />
          <Route path="/capstone" element={<CapstoneImage />} />

          <Route path="/preview" element={<PreviewImage />} />
        </Routes>
        <UseFooter />
      </BrowserRouter>
    </div>
  );
};

export default App;
