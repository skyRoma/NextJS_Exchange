import styled, { injectGlobal } from 'styled-components';
import logo from '../../images/logo.png';
import bg from '../../images/bg.jpg';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,900|Roboto');

  body {
    height: 100%;
    padding: 0;
    margin: 0;
    font-family: Roboto, sans-serif;
    // background: linear-gradient(to bottom,#1f50daeb,#bbf0f9);
    background-image: url(${bg});
    background-size: 100% 100%;
    user-select: none;
  }

  h1 {
    font-family: Montserrat;
  }

  .success-message {
    text-align: center;
    color: #5b945b;
    font-weight: bold;
    font-size: 16px;
  }
`;

export const StyledLink = styled.a`
    text-decoration: none;
    width: 40%;
    margin: 0 auto;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

export const LogoImg = styled.figure`
  background-image: url(${logo});
  background-size: 100%;
  background-repeat: no-repeat;
  width: 80%;
  height: 25%;
  margin: 20px auto;
  position: relative;
  bottom: 25px;
`;

export const HomeView = styled.section`
  min-width: 250px;
  max-width: 500px;
  width: 50%;
  height: 500px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  // background: linear-gradient(to bottom,#fbfbfb,#ffffff69);
  background-color: #000000bd;
  Box-shadow: 0px 0px 260px 60px rgba(169,159,151,0.26);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Button = styled.button`
  border: 1px solid #c8c6c6;
  background-color: rgba(88, 75, 75, 0.19);
  font-size: 35px;
  font-weight: bold;
  text-align: center;
  color: #6d03bb;
  width: 100%;
  border: none;
  cursor: pointer;
  margin-top: 12px;
  outline: none;
  &:active {
    background-color: rgba(160, 149, 149, 0.19);
  }
`;

export const StartBtn = Button.extend`
  position: relative;
  top: 23px;
  color: #339e7fc7;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;
