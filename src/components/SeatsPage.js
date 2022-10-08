import styled from "styled-components";

export default function SeatsPage() {
    const lugares = [];
    for(let i=1;i<=50;i++) {
        lugares.push(<Seat numero={1}>{i}</Seat>);
    }

    return(
        <Page>
            <h1>Selecione o(s) assento(s)</h1>
            <Seats>
                {lugares}
            </Seats>
            <Seats>
                <Legenda>
                <Seat numero={1}></Seat>
                <h2>Selecionado</h2>
                </Legenda>
                <Legenda>
                <Seat numero={2}></Seat>
                <h2>Disponível</h2>
                </Legenda>
                <Legenda>
                <Seat numero={3}></Seat>
                <h2>Indisponível</h2>
                </Legenda>
            </Seats>
            <Form>
                    <label htmlFor="Nome">Nome do Comprador:</label>
                    <input id='Nome' type='text' placeholder="Digite seu nome..." />
                    <label htmlFor="CPF">CPF do Comprador:</label>
                    <input id='CPF' type='number' placeholder="Digite seu CPF..." />
            </Form>
            <Buttom>Reservar assento(s)</Buttom>
        </Page>
    );
}

const Page = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-family: "Roboto";
    font-size: 25px;
    margin: 50px;
  }
`;

const Seats = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
width: 330px;
`;

const Seat = styled.div`
width: 25px;
height: 25px;
border-radius: 50%;
font-family: 'Roboto';
font-size: 10px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
margin: 3px;
${props => {
    switch(props.numero) {
        case 1:
            return(
                `background-color: #1AAE9E;
                border: 1px solid #0E7D71`);
        case 2:
            return(
                `background-color: #C3CFD9;
                border: 1px solid #7B8B99`);
        case 3:
            return(
                `background-color: #FBE192;
                border: 1px solid #F7C52B`);
        default:
    }
}}
`;

const Legenda = styled.div`
display: flex;
flex-direction: column;
align-items: center;
h2 {
    font-family: 'Roboto';
    font-size: 15px;
}
`;

const Form = styled.form`
display: flex;
flex-direction: column;
font-family: 'Roboto';
font-size: 20px;
width: 330px;
margin: 50px;
input {
    height: 50px;
    margin: 5px 0px;
    font-family: 'Roboto';
    font-size: 20px;
}
input::placeholder {
    font-family: 'Roboto';
    font-size: 20px;
    font-style: italic;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`;

const Buttom = styled.button`
  width: 225px;
  height: 45px;
  background-color: #e8833a;
  border-radius: 3px;
  font-family: "Roboto";
  font-size: 20px;
  color: white;
  cursor: pointer;
  border: 0px;
  margin-top: 60px;
`;