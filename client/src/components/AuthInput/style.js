import styled, { keyframes } from 'styled-components';

export const Input = styled.input.attrs({
  autocomplete: 'off',
})`
  width:100%;
  height: 32px;
  background: rgba(0, 0, 0, 0);
  font-family: sans-serif;
  font-size: 20px;
  font-style: italic;
  font-weight: bold;
  text-align: center;
  color: gray;
  border: 1px solid #c8c6c6;
  letter-spacing: -0.5px;
  margin: 15px 0;
  border: none;
  outline:none;
  border-bottom: 1px solid rgba(255,255,255,0.61);
  &::-webkit-input-placeholder {
    font-weight: lighter;
    rgba(255,255,255,0.61);
  }
`;

const appear = keyframes`
  0% {
    opacity:0;
    transform: translate(-50%,-100%);
  };
  50% {
    opacity:.5;
  };
  100% {
    opacity:1;
    transform: translate(-50%, 0%);
  };
`;

export const ErrorMsg = styled.div`
  position:relative;
  &:after {
    display:${({ isError }) => (isError ? 'block' : 'none')};
    content:"${({ isError }) => (isError)}";
    color: #b73c3c;
    font-size: 13px;
    font-weight: bold;
    position:absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 0%);
    white-space: nowrap;
    word-wrap: normal;
    animation: ${appear} 0.8s ease;
  }
`;
