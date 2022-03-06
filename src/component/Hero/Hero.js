import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import pix1 from "./Images/11.jpg";
import pix2 from "./Images/2.jpg";
import pix3 from "./Images/3.jpg";
import pix4 from "./Images/4.jpg";
import pix5 from "./Images/5.jpg";
import pix6 from "./Images/12.jpg";
import pix7 from "./Images/7.png";
import { app } from "../../base";
import { useEffect } from "react";

const Hero = () => {
  const myPix =
    "https://firebasestorage.googleapis.com/v0/b/tech-women-nigeria.appspot.com/o/TechWoman%2FIMG-20220218-WA0040.jpg?alt=media&token=74e5c0ce-7461-49c9-91bb-2e0920fa04db";

  const [getData, setGetData] = useState(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 7500,
    cssEase: "linear",
    autoplay: true,
    pauseOnHover: true
  };

  const getMicroSoftVisitData = async () => {
    await app
      .firestore()
      .collection("MicroSoftVisit")
      .orderBy("createdAt", "asc")
      .limit(5)
      .onSnapshot((snapshot) => {
        const r = [];
        snapshot.forEach((doc) => {
          r.push({ ...doc.data(), id: doc.id });
        });
        setGetData(r);
      });
  };

  useEffect(() => {
    getMicroSoftVisitData();
  }, []);

  return (
    <Conatiner>
      <SliderSetting {...settings}>
        {getData.map((props) => (
          <Wrap key={props.id}>
            <Header>
              <Image src={props.uploadImage} />
            </Header>
          </Wrap>
        ))}

        {/*         
        <Wrap>
          <Header>
            <Image src={pix2} />
          </Header>
        </Wrap>
        <Wrap>
          <Header>
            <Image src={pix3} />
          </Header>
        </Wrap>
        <Wrap>
          <Header>
            <Image src={pix4} />
          </Header>
        </Wrap>
        <Wrap>
          <Header>
            <Image src={pix5} />
          </Header>
        </Wrap>
        <Wrap>
          <Header>
            <Image src={pix6} />
          </Header>
        </Wrap>
        <Wrap>
          <Header>
            <Image src={pix7} />
          </Header>
        </Wrap> */}
      </SliderSetting>
    </Conatiner>
  );
};

export default Hero;

// const Container = styled.div`
//   width: 80%;
// `;

const Header = styled.h3`
  background-color: white;
`;
const Conatiner = styled.div`
  padding-top: 50px;
  width: 100%;
  /* height: 30vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
`;
const SliderSetting = styled(Slider)`
  width: 90%;
  /* height: 30vh; */
  display: flex;
  align-items: center;
`;
const Wrap = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 100%;
  height: 40vh;
  margin: 0 5px;
  background-color: white;
  border-radius: 5px;
  object-fit: cover;
`;
