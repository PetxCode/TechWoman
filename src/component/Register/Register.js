import React, { useState } from "react";
import styled from "styled-components";
import { app } from "../../base";
import demo from "./2.jpg";
import firebase from "firebase";
import { LinearProgress } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(demo);
  const [uploadImage, setUploadImage] = useState("");
  const [percentage, setPercentage] = useState(0);
  const [title, setTitle] = useState("Orientation");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          console.log(url);
        });
      }
    );
  };

  const registerWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const userData = await app.auth().signInWithPopup(provider);

    if (userData) {
      await app.firestore().collection("user").doc(userData.user.uid).set({
        uploadImage: userData.user.photoURL,
        email: userData.user.email,
        password: null,
        isAdmin: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }
    navigate("/");
  };

  const registerUser = async () => {
    const userData = await app
      .auth()
      .createUserWithEmailAndPassword(email, password);

    if (userData) {
      await app.firestore().collection("user").doc(userData.user.uid).set({
        uploadImage,
        email,
        password,
        isAdmin: false,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    }

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

          <Input
            placeholder="Enter your Email"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Input
            placeholder="Enter your Password"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <br />
          <br />

          <ButtonHolder>
            <Button
              bg
              onClick={() => {
                console.log(email, password);
                registerUser();
              }}
            >
              Register
            </Button>
            <Button onClick={registerWithGoogle}>Google</Button>
          </ButtonHolder>

          <Title>
            Already have an Account, <Show to="/signin">Sign in here</Show>
          </Title>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Register;

const Show = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  color: red;
  margin-left: 5px;
  cursor: pointer;
`;

const Title = styled.div`
  display: flex;
  margin-top: 30px;
`;

const ButtonHolder = styled.div`
  display: flex;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  border: 1px solid lightgray;
  border-radius: 3px;
  outline: none;
  padding-left: 10px;
  margin-top: 10px;
`;

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
  margin: 0 10px;
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
  margin-top: 20px;
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
  padding-bottom: 30px;
`;

const Container = styled.div`
  padding-top: 100px;
  width: 100%;
  min-height: calc(80vh - 100px);
  height: 100%;
  background-color: #fdfbfb;
  display: flex;
  align-items: center;
  justify-content: center;
`;
