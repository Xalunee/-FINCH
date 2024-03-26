import styled from "styled-components";

const StyledButtonRandomize = styled.button`
  width: 20px;
  height: 20px;

  cursor: pointer;
  border: none;
  background-color: #ffffff;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url("./magic-wand.svg");
`;

interface IButtonRandomize {
  onClick: () => void;
}

const ButtonRandomize = ({ onClick }: IButtonRandomize) => {
  return <StyledButtonRandomize onClick={onClick} />;
};

export default ButtonRandomize;
