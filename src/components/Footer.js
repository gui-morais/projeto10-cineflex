import styled from "styled-components";

export default function Footer(props) {
  return <Foot>{props.children}</Foot>;
}

const Foot = styled.div`
  width: 100%;
  height: 120px;
  background-color: #dfe6ed;
  border: 1px solid #9eadba;
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  div:first-child {
    width: 65px;
    height: 90px;
    background-color: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
    img {
      width: 50px;
      height: 70px;
    }
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    p {
      font-family: "Roboto";
      font-size: 25px;
      margin: 4px 0px;
    }
  }
`;
