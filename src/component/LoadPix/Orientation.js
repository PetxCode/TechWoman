import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { app } from "../../base";

const Orientation = () => {
  const [getData, setGetData] = useState(null);
  const [getData1, setGetData1] = useState(null);
  const [getData2, setGetData2] = useState(null);

  const getOrientationData = async () => {
    await app
      .firestore()
      .collection("Orientation")
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

  const getCapStoneData = async () => {
    await app
      .firestore()
      .collection("CapStone")
      .orderBy("createdAt", "asc")
      .limit(5)
      .onSnapshot((snapshot) => {
        const r = [];
        snapshot.forEach((doc) => {
          r.push({ ...doc.data(), id: doc.id });
        });
        setGetData1(r);
      });
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
        setGetData2(r);
      });
  };

  useEffect(() => {
    getOrientationData();
    getCapStoneData();
    getMicroSoftVisitData();
    // app
    //   .firestore()
    //   .collection("Orientation")
    //   .orderBy("createdAt", "asc")
    //   .limit(5)
    //   .onSnapshot((snapshot) => {
    //     const r = [];
    //     snapshot.forEach((doc) => {
    //       r.push({ ...doc.data(), id: doc.id });
    //     });
    //     setGetData(r);
    //   });
    // console.log(getData);
  }, []);

  return (
    <div>
      <Container>
        <Wrapper>
          <Hold>
            <Title>Orientation</Title>
            <Pix>
              {getData?.map((props) => (
                <Div key={props.id}>
                  <Picture src={props.uploadImage} />
                  {/* <Name>Pix</Name> */}
                </Div>
              ))}
            </Pix>
          </Hold>
          <Hold>
            <Title>Cap Stone: view all</Title>
            <Pix>
              {getData1?.map((props) => (
                <Div key={props.id}>
                  <Picture src={props.uploadImage} />
                  {/* <Name>Pix</Name> */}
                </Div>
              ))}
            </Pix>
          </Hold>
          <Hold>
            <Title>Micrsoft Visit</Title>
            <Pix>
              {getData2?.map((props) => (
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

export default Orientation;

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
  margin: 30px;
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
  width: 100%;
  min-height: 500px;
  height: 100%;
  display: flex;
`;
