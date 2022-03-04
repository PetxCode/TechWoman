import React, { useState } from "react";
import styled from "styled-components";
import { app } from "../../base";
import demo from "./2.jpg";
import firebase from "firebase";
import { LinearProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ImageUpload = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(demo);
  const [uploadImage, setUploadImage] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [title, setTitle] = useState("Orientation");

  const handleImage = async (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);

    const fileRef = await app.storage().ref();
    const storageRef = fileRef.child("TechWoman/" + file.name).put(file);

    storageRef.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
        const count = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercentage(count);
        console.log(percentage, count);
      },
      (err) => {
        console.log(err.message);
      },
      () => {
        storageRef.snapshot.ref.getDownloadURL().then((url) => {
          setUploadImage(url);
          console.log(uploadImage);
        });
      }
    );
  };

  const functionName = async () => {
    await app.firestore().collection("Orientation").doc().set({
      title,
      uploadImage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  const pushToOrientation = async () => {
    await app.firestore().collection("Orientation").doc().set({
      title,
      uploadImage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    navigate("/");
  };

  const pushToCapStone = async () => {
    await app.firestore().collection("CapStone").doc().set({
      title,
      uploadImage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    navigate("/");
  };

  const pushToMicroSoftVisit = async () => {
    await app.firestore().collection("MicroSoftVisit").doc().set({
      title,
      uploadImage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    navigate("/");
  };

  const pushToCulturalDay = async () => {
    await app.firestore().collection("CulturalDay").doc().set({
      title,
      uploadImage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    navigate("/");
  };

  const pushToAmericanCorner = async () => {
    await app.firestore().collection("AmericanCorner").doc().set({
      title,
      uploadImage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    navigate("/");
  };

  const pushToWorkshopKreatng = async () => {
    await app.firestore().collection("WorkshopKreatng").doc().set({
      title,
      uploadImage,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    navigate("/");
  };

  return (
    <div>
      <Container>
        <Wrapper>
          <Image src={image} />
          {percentage > 0 && percentage < 99.999 ? (
            <Holder>
              <Linear>
                <LinearProgress variant="determinate" value={percentage} />
              </Linear>
              <Done>{Math.round(percentage)}%</Done>
            </Holder>
          ) : null}
          <UploadImage htmlFor="pix">Upload Your Image</UploadImage>
          <ImageInput type="file" id="pix" onChange={handleImage} />

          <Select
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          >
            <option value="Orientation">Orientation</option>
            <option value="Cap-Stone">Cap-Stone</option>
            <option value="MicroSoft Visit">MicroSoft Visit</option>

            <option value="Cultural Day">Cultural Day</option>
            <option value="Workshop at American Corner">
              Workshop at American Corner
            </option>
            <option value="Kreatng Workshop">Kreatng Workshop</option>
          </Select>

          <br />
          <br />

          {/* <div>Title: {title}</div> */}
          {title === "Orientation" ? (
            <div>
              {uploadImage === "" ? (
                <Button>Uploading to Orientation, Database please wait!</Button>
              ) : (
                <Button bg onClick={pushToOrientation}>
                  Uploaded to Orientation Database, now submit
                </Button>
              )}
            </div>
          ) : title === "Cap-Stone" ? (
            <div>
              {uploadImage === "" ? (
                <Button>Uploading to Cap-Stone Database, please wait!</Button>
              ) : (
                <Button bg onClick={pushToCapStone}>
                  Uploaded to Cap-Stone Database, now submit
                </Button>
              )}
            </div>
          ) : title === "MicroSoft Visit" ? (
            <div>
              {uploadImage === "" ? (
                <Button>
                  Uploading to MicroSoft Visit Database, please wait!
                </Button>
              ) : (
                <Button bg onClick={pushToMicroSoftVisit}>
                  Uploaded to MicroSoft Visit Database, now submit
                </Button>
              )}
            </div>
          ) : title === "Cultural Day" ? (
            <div>
              {uploadImage === "" ? (
                <Button>
                  Uploading to Cultural Day Database, please wait!
                </Button>
              ) : (
                <Button bg onClick={pushToCulturalDay}>
                  Uploaded to Cultural Day Database, now submit
                </Button>
              )}
            </div>
          ) : title === "Workshop at American Corner" ? (
            <div>
              {uploadImage === "" ? (
                <Button>
                  Uploading to Workshop at American Corner Database, please
                  wait!
                </Button>
              ) : (
                <Button bg onClick={pushToAmericanCorner}>
                  Uploaded to Workshop at American Corner Database, now submit
                </Button>
              )}
            </div>
          ) : title === "Kreatng Workshop" ? (
            <div>
              {uploadImage === "" ? (
                <Button>
                  Uploading to Kreatng Workshop Database, please wait!
                </Button>
              ) : (
                <Button bg onClick={pushToWorkshopKreatng}>
                  Uploaded to Kreatng Workshop Database, now submit
                </Button>
              )}
            </div>
          ) : null}
        </Wrapper>
      </Container>
    </div>
  );
};

export default ImageUpload;

const Done = styled.div`
  margin-left: 10px;
  font-weight: bold;
`;

const Linear = styled.div`
  width: 200px;
`;
const Holder = styled.div`
  width: 250px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Button = styled.div`
  padding: 15px 40px;
  background-color: ${({ bg }) => (bg ? "#004080" : "red")};
  color: white;
  border-radius: 5px;
  margin-bottom: 30px;
  margin: 0 20px;
  transform: scale(1);
  transition: all 350ms;
  text-align: center;

  :hover {
    cursor: pointer;
    transform: scale(1.021);
  }

  @media screen and (max-width: 500px) {
    /* display: none; */
    margin: 0px 20px;
  }
`;

const ImageInput = styled.input`
  display: none;
`;

const Select = styled.select`
  width: 300px;
  height: 40px;
  outline: none;
  border: 1px solid lightgray;
  border-radius: 3px;
  padding-left: 10px;

  font-family: Raleway;
  font-weight: 500;
`;

const UploadImage = styled.label`
  padding: 15px 40px;
  background-color: gray;
  color: white;
  border-radius: 30px;
  margin-bottom: 30px;

  transform: scale(1);
  transition: all 350ms;

  :hover {
    cursor: pointer;
    transform: scale(1.021);
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: orange;
  object-fit: cover;
  border: 1px solid gray;
  margin-bottom: 10px;
`;

const Wrapper = styled.div`
  margin: 40px 0;
  width: 500px;
  height: 500px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(249, 243, 243, 1) 0px 10px 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  min-height: calc(80vh - 100px);
  height: 100%;
  background-color: #fdfbfb;
  display: flex;
  align-items: center;
  justify-content: center;
`;
