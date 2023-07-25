import styled from "styled-components";

const AsideMenu = styled.aside`
  background: #000;
  padding: 3.75rem 1.625rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  align-items: center;
`;

const ActivityContainer = styled.section`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 1.5rem;
`;

const ActivityBlock = styled.div`
  height: 64px;
  width: 64px;
  border-radius: 6px;
  background: ${(props) => props.theme.colors.primary} no-repeat center center;
  background-size: 50%;
  background-image: url(${(props) => props.img});
  cursor: pointer;
`;

const AsideText = styled.p`
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  font-size: 0.75rem;
  letter-spacing: 0.02rem;
  color: ${(props) => props.theme.colors.primary};
`;

function Aside() {
  return (
    <AsideMenu>
      <ActivityContainer>
        <ActivityBlock img={"/aside-logos/meditation.svg"}></ActivityBlock>
        <ActivityBlock img={"/aside-logos/swim.svg"}></ActivityBlock>
        <ActivityBlock img={"/aside-logos/bike.svg"}></ActivityBlock>
        <ActivityBlock img={"/aside-logos/gym.svg"}></ActivityBlock>
      </ActivityContainer>
      <AsideText>Copyright, SportSee {new Date().getFullYear()}</AsideText>
    </AsideMenu>
  );
}

export default Aside;
