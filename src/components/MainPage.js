import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function MainPage() {
  const [listMovies, setListMovies] = useState(null);
  useEffect(() => {
    const url = "https://mock-api.driven.com.br/api/v5/cineflex/movies";
    const requisition = axios.get(url);
    requisition.then((response) => setListMovies(response.data));
    requisition.catch((erro) => alert(erro.response.data));
  }, []);

  const renderMovies = [];
  if (listMovies !== null) {
    listMovies.map((value) =>
      renderMovies.push(
        <Link key={value.id} to={`/sessoes/${value.id}`}>
          <Movie data-identifier="movie-outdoor">
            <img
              src={value.posterURL}
              alt="Não foi possível carregar a imagem"
            />
          </Movie>
        </Link>
      )
    );
  }

  return (
    <Page>
      <h1>Selecione o filme</h1>
      <Movies>{renderMovies}</Movies>
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

const Movies = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Movie = styled.div`
  cursor: pointer;
  width: 145px;
  height: 210px;
  margin: 10px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  img {
    width: 130px;
    height: 190px;
  }
`;
