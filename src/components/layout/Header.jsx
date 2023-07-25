import { Link } from "react-router-dom";
import styled from "styled-components";

const Head = styled.header`
  background-color: ${(props) => props.theme.colors.secondary};
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  padding: 1rem 1.75rem;
  gap: 6%;
  font-weight: 500;

  & h1 {
    line-height: 0;

    & a {
      display: block;
    }
  }
`;

const Logo = styled.img`
  height: 60px;
`;

const HeaderMenu = styled.nav`
  flex: 1;
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  align-items: center;

  & a {
    color: ${(props) => props.theme.colors.primary};
    text-decoration: none;
  }
`;

function Header() {
  return (
    <Head className={`d-flex`}>
      <h1>
        <Link to={"/"}>
          <Logo src={"/logo.png"} alt="SportSee" />
        </Link>
      </h1>
      <HeaderMenu>
        <Link to={"/"}>Accueil</Link>
        <Link to={"/"}>Profil</Link>
        <Link to={"/"}>Réglage</Link>
        <Link to={"/"}>Communauté</Link>
      </HeaderMenu>
    </Head>
  );
}

export default Header;
