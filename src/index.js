import React from "react";
import ReactDOM from "react-dom";
import styled, { css } from "styled-components";
import GlobalStyles from "./GlobalStyles";

class App extends React.Component {
  state = {
    active: false
  };
  render() {
    const { active } = this.state;
    return (
      <Wrapper>
        <GlobalStyles />
        <Mini active={active} onClick={() => this.setState({ active: true })}>
          <Hamburger />
          <List>
            <li>
              <a href="#">Link one</a>
            </li>
            <li>
              <a href="#">Link two</a>
            </li>
            <li>
              <a href="#">Link three</a>
            </li>
            <li>
              <a href="#">Link four</a>
            </li>
            <li>
              <a href="#">Link five</a>
            </li>
          </List>
        </Mini>
        <Close onClick={() => this.setState({ active: false })} />
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
`;

const Mini = styled.div`
  cursor: ${({ active }) => (active ? "default" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  /* clip-path: inset(100px 50px); */
  /* clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); */
  /* clip-path: circle(100px at 10px, 10px); */

  width: 100%;
  height: 100%;
  background-color: transparent;
  clip-path: circle(${({ active }) => (active ? "150%" : "30px")} at 50px 50px);
  transform: translate3d(0, 0, 0);
  /* will-change: clip-path; */
  transition: clip-path 300ms ease-out, background-color 300ms ease-out;

  ${({ active }) =>
    active &&
    css`
      background-color: #000;

      + div {
        opacity: 1;
        visibility: visible;
      }
    `}
`;

const Close = styled.div`
  top: 30px;
  left: 30px;
  width: 35px;
  height: 35px;
  cursor: pointer;
  position: absolute;
  opacity: 0;
  visibility: hidden;

  &:after,
  &:before {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    background-color: #fff;
    transform-origin: 50%;
  }

  &:after {
    transform: translate(0, 20px) rotate(45deg);
  }
  &:before {
    transform: translate(0, 20px) rotate(-45deg);
  }
`;

const List = styled.ul`
  list-style: none;
  font-size: 20px;
  line-height: 30px;
  padding: 0;
  margin: 0;
  position: absolute;

  a {
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
  }
`;

const Hamburger = styled.div`
  width: 35px;
  height: 3px;
  position: absolute;
  top: 47px;
  left: 32px;
  background: #000;

  &:before,
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: inherit;
    background: inherit;
  }

  &:before {
    top: 10px;
  }
  &:after {
    top: -10px;
  }
`;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
