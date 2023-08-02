import PropTypes from "prop-types";
import styled from "styled-components";

StatBox.propTypes = {
  icon: PropTypes.string,
  iconcolor: PropTypes.string,
  stat: PropTypes.string,
  unit: PropTypes.string,
};

const Box = styled.div`
  padding: 1rem;
  background: rgba(0 0 0 / 2%);
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border-radius: 10px;

  .icon {
    width: 60px;
    height: 60px;
    background: ${(props) => props.iconcolor};
    border-radius: 10px;
  }
`;

function StatBox({ iconcolor, stat, unit }) {
  return (
    <Box iconcolor={iconcolor}>
      <div className={`icon`}>{/* Icon */}</div>
      <p>
        <strong>{stat}</strong>
        <br />
        {unit}
      </p>
    </Box>
  );
}

export default StatBox;
