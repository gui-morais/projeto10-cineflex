import styled from "styled-components";

export default function Header() {
  return <Head>CINEFLEX</Head>;
}

const Head = styled.div`
  background-color: #c3cfd9;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e8833a;
  font-family: "Roboto";
  font-size: 35px;
  padding: 10px;
`;
