import styled from "styled-components";

export default function Header() {
    return (
        <Head>CINEFLEX</Head>
    );
}

const Head = styled.div`
background-color: #C3CFD9;
display: flex;
justify-content: center;
align-items: center;
color: #E8833A;
font-family: 'Roboto';
font-size: 35px;
padding: 10px;
`;