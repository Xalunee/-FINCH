import styled from "styled-components";

const StyledButtonRandomize = styled.button`
  width: 40px;
  height: 40px;

  cursor: pointer;
  border: none;
  background: none;
`;

const ImageMagicWand = styled.img.attrs(({ src }) => ({
  src: src,
  alt: "Волшебная палочка",
}))`
  width: 20px;
`;

const ButtonRandomize = ({ onClick }: any) => {
  return (
    <StyledButtonRandomize onClick={onClick}>
      <ImageMagicWand
        src={require("../assets/magic-wand.png")}
      ></ImageMagicWand>
    </StyledButtonRandomize>
  );
};

export default ButtonRandomize;
