import styled from 'styled-components';
import logo from '../../images/logo.png';

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

export const Balance = styled.section`
  min-width: 247px;
  max-width: 500px;
  width: 16%;
  height: 60px;
  position: absolute;
  top: 5%;
  right: 8%;
  transform: translate(-25%, -25%);
  background-color: #000000bd;
  Box-shadow: 0px 0px 260px 60px rgba(169,159,151,0.26);
  color: white;
  text-align: center;
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
