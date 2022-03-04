import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { app } from "../../base";
import { Image } from "antd";
import "antd/dist/antd.css";

const CapstoneImage = () => {
  const [visible, setVisible] = useState(false);
  const [getData, setGetData] = useState(null);
  const [getData1, setGetData1] = useState(null);
  const [getData2, setGetData2] = useState(null);

  const getOrientationData = async () => {
    await app
      .firestore()
      .collection("CapStone")
      .orderBy("createdAt", "asc")

      .onSnapshot((snapshot) => {
        const r = [];
        snapshot.forEach((doc) => {
          r.push({ ...doc.data(), id: doc.id });
        });
        setGetData(r);
      });
  };

  useEffect(() => {
    getOrientationData();
  }, []);

  return (
    <div>
      <Container>
        <Wrapper>
          <Hold>
            <Title>Preview Cap Stone in slideshow</Title>

            <Image
              preview={{ visible: false }}
              width={400}
              height={200}
              style={{ objectFit: "cover" }}
              src="https://firebasestorage.googleapis.com/v0/b/tech-women-nigeria.appspot.com/o/orientation%2FIMG_9893-1200x480.jpg?alt=media&token=a82c130e-d290-4708-8298-58ee98d4c43f"
              onClick={() => setVisible(true)}
            />
            <div style={{ display: "none" }}>
              <Image.PreviewGroup
                preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
              >
                <Image src="https://firebasestorage.googleapis.com/v0/b/tech-women-nigeria.appspot.com/o/orientation%2FIMG_9893-1200x480.jpg?alt=media&token=a82c130e-d290-4708-8298-58ee98d4c43f" />
                {getData?.map((props) => (
                  <Div key={props.id}>
                    <Image src={props.uploadImage} />
                    {/* <Name>Pix</Name> */}
                  </Div>
                ))}
              </Image.PreviewGroup>
            </div>
            <Title>Highlight from Cap Stone</Title>
            <Pix>
              {getData?.map((props) => (
                <Div key={props.id}>
                  <Picture src={props.uploadImage} />
                  {/* <Name>Pix</Name> */}
                </Div>
              ))}
            </Pix>
          </Hold>
        </Wrapper>
      </Container>
    </div>
  );
};

export default CapstoneImage;

const Hold = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Picture = styled.img`
  width: 250px;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
  margin: 20px;
  /* box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px; */
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

const Name = styled.div``;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Pix = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Title = styled.div`
  margin-bottom: 0px;
  margin-top: 20px;
  font-weight: bold;
  font-size: 18px;
  text-transform: uppercase;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Container = styled.div`
  min-height: calc(60vh - 100px);
  padding-bottom: 50px;
  padding-top: 150px;
  width: 100%;
  min-height: 500px;
  height: 100%;
  display: flex;
`;
