import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Success({ informations, setInformations }) {
  const navigate = useNavigate();
  const seats = [];
  informations.seats.forEach((value, i) => {
    seats.push(
      <h3 data-identifier="seat-infos-reserve-finished" key={i}>
        Assento {value}
      </h3>
    );
  });
  let CPF = "";
  for (let i = 0; i < informations.cpf.length; i++) {
    if (i === 3 || i === 6) {
      CPF += ".";
    } else if (i === 9) {
      CPF += "-";
    }
    CPF += informations.cpf[i];
  }

  function Home() {
    setInformations({});
    navigate("/");
  }

  return (
    <>
      <Title>
        <h1>Pedido feito</h1>
        <h1>com sucesso!</h1>
      </Title>
      <Info>
        <h2>Filme e sessão</h2>
        <h3 data-identifier="movie-session-infos-reserve-finished">
          {informations.movie}
        </h3>
        <h3 data-identifier="movie-session-infos-reserve-finished">
          {informations.date} {informations.hour}
        </h3>
      </Info>
      <Info>
        <h2>Ingressos</h2>
        {seats}
      </Info>
      <Info>
        <h2>Comprador</h2>
        <h3 data-identifier="buyer-infos-reserve-finished">
          {informations.name}
        </h3>
        <h3 data-identifier="buyer-infos-reserve-finished">{CPF}</h3>
      </Info>
      <DivButtom>
        <Buttom data-identifier="back-to-home-btn" onClick={Home}>
          Voltar para Home
        </Buttom>
      </DivButtom>
    </>
  );
}

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 110px;
  margin-bottom: 30px;
  h1 {
    font-family: "Roboto";
    color: #247a6b;
    font-weight: bold;
    font-size: 25px;
  }
`;

const Info = styled.div`
  margin-left: 30px;
  margin-bottom: 10px;
  height: 110px;
  h2 {
    font-family: "Roboto";
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 10px;
  }
  h3 {
    font-family: "Roboto";
    font-size: 22px;
    margin-bottom: 1px;
  }
`;

const DivButtom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0px;
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
`;
