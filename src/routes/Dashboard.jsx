import styled from "styled-components";

const Dash = styled.section`
  width: 84%;
  margin: 4rem auto;

  & > header {
    & h2 {
      font-size: 3rem;
      font-weight: 500;
      margin-bottom: 2rem;

      & span {
        color: ${(props) => props.theme.colors.red.base};
      }
    }

    & p {
      font-size: 1.125rem;
    }
  }
`;

function Dashboard() {
  return (
    <Dash>
      <header>
        <h2>
          Bonjour <span>Thomas</span>
        </h2>
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </header>
    </Dash>
  );
}

export default Dashboard;
