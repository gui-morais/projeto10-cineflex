import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./Header";
import MainPage from "./MainPage";
import SessionsPage from "./SessionsPage";
import SeatsPage from "./SeatsPage";
import Success from "./Success";
import { useState } from "react";

export default function App() {
  const [informations, setInformations] = useState({});
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sessoes/:idFilme" element={<SessionsPage />} />
        <Route
          path="/assentos/:idSessao"
          element={<SeatsPage setInformations={setInformations} />}
        />
        <Route
          path="/sucesso"
          element={
            <Success
              informations={informations}
              setInformations={setInformations}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
