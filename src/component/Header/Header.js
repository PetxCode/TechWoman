import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import { app } from "../../base";

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const [toggle, setToggle] = useState(false);
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

  const onToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    getData();
  }, [userCheck]);
  return (
    <Diva>
      <Container>
        <Wrapper>
          <Logo to="/">TechWomen</Logo>

          <Navigation>
            <Nav to="/"> Home </Nav>
            <Nav to="/gallery"> Galaries </Nav>
            {userCheck?.isAdmin ? <Nav to="/upload"> Upload Image </Nav> : null}

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
              <Nav to="/register"> Register </Nav>
            )}
          </Navigation>
          <Menu onClick={onToggle} />
        </Wrapper>
      </Container>

      {toggle ? <SideBar toggle={toggle} setToggle={setToggle} /> : null}
    </Diva>
  );
};

export default Header;

const Menu = styled(BiMenuAltRight)`
  display: none;

  @media screen and (max-width: 700px) {
    display: block;

    margin: 0 20px;
    font-size: 50px;
    transition: all 350ms;
    transform: scale(1);

    :hover {
      transform: scale(0.97);
      cursor: pointer;
    }
  }
`;

const Diva = styled.div``;

const Navigation = styled.div`
  display: flex; 

  @media screen and (max-width: 700px) {
    display: none;
`;

const Nav = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 15px 30px;
  margin: 0 10px;
  border-radius: 3px;
  transition: all 350ms;
  background-color: rgba(0, 64, 128, 0.1);

  :hover {
    background-color: #004080;
    color: white;
    cursor: pointer;
  }
`;

const Nav1 = styled.div`
  color: black;
  text-decoration: none;
  padding: 15px 30px;
  margin: 0 10px;
  border-radius: 3px;
  transition: all 350ms;
  background-color: rgba(0, 64, 128, 0.1);

  :hover {
    background-color: #004080;
    color: white;
    cursor: pointer;
  }
`;

const Logo = styled(Link)`
  text-decoration: none;
  width: 100px;
  height: 60px;
  border-radius: 30px;
  object-fit: cover;
  margin: 0px 30px;
  /* overflow: hidden; */
  font-weight: bold;
  font-style: italic;
  color: #004080;
  font-size: 20px;
  display: flex;
  align-items: center;

  :hover {
  }
`;

const Wrapper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 100px;
  background-color: whitesmoke;
  position: fixed;
  z-index: 1;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;
