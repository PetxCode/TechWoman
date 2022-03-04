import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { AiFillHome } from "react-icons/ai";
import { MdCompassCalibration } from "react-icons/md";
import { GiFilmProjector } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { app } from "../../base";

const SideBar = ({ toggle, setToggle }) => {
  const { currentUser } = useContext(AuthContext);

  const [userCheck, setUserCheck] = useState([]);

  const getData = async () => {
    await app
      .firestore()
      .collection("user")
      .doc(currentUser?.uid)
      .get()
      .then((data) => {
        setUserCheck(data.data());
        // console.log(userCheck);
      });
  };

  useEffect(() => {
    getData();
  }, [userCheck]);

  return (
    <div>
      <Container>
        <Wrapper>
          <Navigation>
            <Nav
              to="/"
              onClick={() => {
                setToggle(false);
              }}
            >
              <Icon>
                <AiFillHome />
              </Icon>
              <span>Home</span>
            </Nav>
            <Nav
              to="/gallery"
              onClick={() => {
                setToggle(false);
              }}
            >
              <Icon>
                <MdCompassCalibration />
              </Icon>
              <span>Galleries</span>
            </Nav>

            {userCheck?.isAdmin ? (
              <Nav
                to="/upload"
                onClick={() => {
                  setToggle(false);
                }}
              >
                <Icon>
                  <GiFilmProjector />
                </Icon>
                <span>Upload</span>
              </Nav>
            ) : null}
            <Space />
            {currentUser ? (
              <Nav1
                onClick={() => {
                  app.auth().signOut();
                }}
              >
                {" "}
                Log Out{" "}
              </Nav1>
            ) : (
              <Nav2 to="/register"> Register </Nav2>
            )}
          </Navigation>
        </Wrapper>
      </Container>
    </div>
  );
};

export default SideBar;

const Space = styled.div`
  flex: 1;
`;
const Icon = styled.div``;

const Nav = styled(Link)`
  text-decoration: none;
  color: white;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  height: 80px;
  transform: scale(1);
  transition: all 350ms;
  font-size: 20px;

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
    color: white;
    cursor: pointer;
    transform: scale(1.02);
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  }

  span {
    margin: 0 10px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
  }
`;

const Nav1 = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 80px;
  transform: scale(1);
  transition: all 350ms;
  text-align: center;
  font-size: 25px;
  text-transform: uppercase;
  padding-left: 30px;

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transform: scale(1.02);
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    color: white;
  }

  span {
    margin: 0 10px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
  }
`;

const Nav2 = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  padding: 10px;
  height: 80px;
  transform: scale(1);
  transition: all 350ms;
  text-align: center;
  font-size: 25px;
  text-transform: uppercase;
  padding-left: 30px;

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
    cursor: pointer;
    transform: scale(1.02);
    font-weight: bold;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    color: white;
  }

  span {
    margin: 0 10px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
  }
`;

const Navigation = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Container = styled.div`
  display: none;

  @media screen and (max-width: 700px) {
    width: 300px;
    height: calc(90vh - 100px);
    background-color: #004080;
    display: block;
    color: white;
    position: fixed;
    z-index: 1;
    margin-top: 100px;
    font-family: Raleway;
  }
`;
