import React, { useState, useEffect } from "react";
import styled from "styled-components";

const NavbarWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  height: 70px;
  z-index: 3;
  transition-timing-function: ease-in;
  transition: all 0.5s;
  ${(props) =>
    props.isScroll &&
    `
    background-color: rgba(0, 0, 0);
  `}
`;
const NavbarLogo = styled.img`
  object-fit: contain;
  height: 55px;
  position: fixed;
  left: 50px;
  top: 5px;
`;
const NavbarAvatar = styled.img`
  object-fit: contain;
  height: 45px;
  position: fixed;
  right: 50px;
  top: 10px;
`;

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);
  }, []);
  const handleOnScroll = () => {
    if (window.scrollY > 100) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };
  return (
    <NavbarWrapper onScroll={handleOnScroll} isScroll={isScroll}>
      <NavbarLogo src="https://i.imgur.com/1Ejaf0l.png" />
      <NavbarAvatar src="https://i.imgur.com/waWudiz.png" />
    </NavbarWrapper>
  );
};

export default Navbar;
