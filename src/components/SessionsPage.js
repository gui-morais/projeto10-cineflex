import styled from "styled-components";

export default function SessionsPage() {
  return (
    <Page>
      <h1>Selecione o horário</h1>
      <Schedules>
        <h2>Quinta-feira - 06/10/2022</h2>
        <Schedule>15:00</Schedule>
        <Schedule>19:00</Schedule>
      </Schedules>
      <Schedules>
        <h2>Sexta-feira - 07/10/2022</h2>
        <Schedule>15:00</Schedule>
        <Schedule>19:00</Schedule>
      </Schedules>
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
