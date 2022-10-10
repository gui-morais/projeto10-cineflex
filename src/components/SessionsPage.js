import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";

export default function SessionsPage() {
  const { idFilme } = useParams();
  const [listSessions, setListSessions] = useState(null);
  useEffect(() => {
    const url = `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`;
    const requisition = axios.get(url);
    requisition.then((response) => setListSessions(response.data));
    requisition.catch((erro) => alert(erro.response.data));
  }, []);

  let footer;
  const renderSessions = [];
  if (listSessions !== null) {
    listSessions.days.map((value) =>
      renderSessions.push(
        <Schedules key={value.id}>
          <h2 data-identifier="session-date">
            {value.weekday} - {value.date}
          </h2>
          {value.showtimes.map((hour) => (
            <Link to={`/assentos/${hour.id}`} key={hour.id}>
              <Schedule data-identifier="hour-minute-btn">{hour.name}</Schedule>
            </Link>
          ))}
        </Schedules>
      )
    );
    footer = [
      <>
        <div data-identifier="movie-img-preview">
          <img
            src={listSessions.posterURL}
            alt="Não foi possível carregar a imagem"
          />
        </div>
        <div>
          <p data-identifier="movie-and-session-infos-preview">
            {listSessions.title}
          </p>
        </div>
      </>,
    ];
  }

  return (
    <Page>
      <h1>Selecione o horário</h1>
      <Sessions>
      {renderSessions}
      </Sessions>
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

const Schedules = styled.div`
  width: 95%;
  flex-wrap: wrap;
  h2 {
    font-family: "Roboto";
    font-size: 20px;
    margin: 20px 0px;
  }
`;

const Schedule = styled.button`
  width: 85px;
  height: 45px;
  background-color: #e8833a;
  border-radius: 3px;
  font-family: "Roboto";
  font-size: 20px;
  color: white;
  cursor: pointer;
  border: 0px;
  margin-right: 10px;
  margin-bottom: 10px;
`;
const Sessions = styled.div`
margin-bottom: 150px;
margin-left: 30px;
width: 100%;
`;