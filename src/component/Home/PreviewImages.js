import React, { useEffect, useState } from "react";
import { Image } from "antd";
import "antd/dist/antd.css";
import { app } from "../../base";
import styled from "styled-components";

export const PreviewImage = () => {
  const [visible, setVisible] = useState(false);

  const [getData, setGetData] = useState(null);

  const getOrientationData = async () => {
    await app
      .firestore()
      .collection("Orientation")
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
    <>
      <Image
        preview={{ visible: false }}
        width={200}
        src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp"
        onClick={() => setVisible(true)}
      />
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{ visible, onVisibleChange: (vis) => setVisible(vis) }}
        >
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
          {getData?.map((props) => (
            <Div key={props.id}>
              <Image src={props.uploadImage} />
              {/* <Name>Pix</Name> */}
            </Div>
          ))}
        </Image.PreviewGroup>
      </div>
    </>
  );
};

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
