import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";

export default function SeatsPage({ setInformations }) {
  const { idSessao } = useParams();
  const [listSeats, setListSeats] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const url = `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`;
    const requisition = axios.get(url);
    requisition.then((response) => setListSeats(response.data));
    requisition.catch((erro) => alert(erro.response.data));
  }, []);

  const [chosenSeats, setChosenSeats] = useState([]);
  const renderSeats = [];

  const footer = [];
  if (listSeats !== null) {
    listSeats.seats.forEach((value) => {
      if (value.isAvailable) {
        if (chosenSeats.includes(value)) {
          renderSeats.push(
            <Seat
              data-identifier="seat"
              key={value.id}
              numero={1}
              onClick={() => handleSeat(value)}
            >
              {value.name}
            </Seat>
          );
        } else {
          renderSeats.push(
            <Seat
              data-identifier="seat"
              key={value.id}
              numero={2}
              onClick={() => handleSeat(value)}
            >
              {value.name}
            </Seat>
          );
        }
      } else {
        renderSeats.push(
          <Seat
            data-identifier="seat"
            key={value.id}
            numero={3}
            onClick={() => alert("Esse assento não está disponível")}
          >
            {value.name}
          </Seat>
        );
      }
    });

    footer.push(
      <>
        <div>
          <img
            src={listSeats.movie.posterURL}
            alt="Não foi possível carregar a imagem"
          />
        </div>
        <div>
          <p data-identifier="movie-and-session-infos-preview">
            {listSeats.movie.title}
          </p>
          <p data-identifier="movie-and-session-infos-preview">
            {listSeats.day.weekday} - {listSeats.day.date}
          </p>
        </div>
      </>
    );
  }

  function handleSeat(seat) {
    if (chosenSeats.includes(seat)) {
      const newArray = chosenSeats.filter((value) => value !== seat);
      setChosenSeats(newArray);
    } else {
      const newArray = [...chosenSeats, seat];
      setChosenSeats(newArray);
    }
  }

  const [name, setName] = useState("");
  const [CPF, setCPF] = useState("");

  function confirmData(e) {
    e.preventDefault();

    if (chosenSeats.length === 0) {
      alert("Você não escolheu o(s) assento(s)");
    } else if (CPF.length !== 11) {
      alert("Seu CPF deve possuir 11 dígitos");
    } else if (CPF.indexOf(".") !== -1) {
      alert("Digite apenas números no seu CPF");
    } else {
      const reservation = {
        ids: [],
        name: name,
        cpf: CPF,
      };

      const newInformations = {
        movie: listSeats.movie.title,
        date: listSeats.day.date,
        hour: listSeats.name,
        seats: [],
        name: name,
        cpf: CPF,
      };
      chosenSeats.forEach((value) => {
        reservation.ids.push(value.id);
        newInformations.seats.push(value.name);
      });

      const URLpost =
        "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many";
      const requisitionPost = axios.post(URLpost, reservation);
      requisitionPost.then(() => {
        setChosenSeats([]);
        setName("");
        setCPF("");
        setInformations(newInformations);
        navigate("/sucesso");
      });

      requisitionPost.catch((erro) => alert(erro.response.data));
    }
  }

  return (
    <Page>
      <h1>Selecione o(s) assento(s)</h1>
      <Seats>{renderSeats}</Seats>
      <Seats>
        <Legenda>
          <Seat data-identifier="seat-selected-subtitle" numero={1}></Seat>
          <h2>Selecionado</h2>
        </Legenda>
        <Legenda>
          <Seat data-identifier="seat-available-subtitle" numero={2}></Seat>
          <h2>Disponível</h2>
        </Legenda>
        <Legenda>
          <Seat data-identifier="seat-unavailable-subtitle" numero={3}></Seat>
          <h2>Indisponível</h2>
        </Legenda>
      </Seats>
      <Form onSubmit={confirmData}>
        <label htmlFor="Nome">Nome do Comprador:</label>
        <input
          data-identifier="buyer-name-input"
          id="Nome"
          type="text"
          placeholder="Digite seu nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="CPF">CPF do Comprador:</label>
        <input
          data-identifier="buyer-cpf-input"
          id="CPF"
          type="number"
          placeholder="Digite seu CPF..."
          value={CPF}
          onChange={(e) => setCPF(e.target.value)}
          required
        />
        <Buttom data-identifier="reservation-btn" type="submit">
          Reservar assento(s)
        </Buttom>
      </Form>
      <Footer>{footer}</Footer>
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
  font-family: "Roboto";
  font-size: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 3px;
  ${(props) => {
    switch (props.numero) {
      case 1:
        return `background-color: #1AAE9E;
                border: 1px solid #0E7D71`;
      case 2:
        return `background-color: #C3CFD9;
                border: 1px solid #7B8B99`;
      case 3:
        return `background-color: #FBE192;
                border: 1px solid #F7C52B`;
      default:
    }
  }}
`;

const Legenda = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-family: "Roboto";
    font-size: 15px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  font-family: "Roboto";
  font-size: 20px;
  width: 330px;
  margin: 50px;
  input {
    height: 50px;
    margin: 5px 0px;
    font-family: "Roboto";
    font-size: 20px;
    padding-left: 20px;
  }
  input::placeholder {
    font-family: "Roboto";
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
  margin-left: auto;
  margin-right: auto;
`;
