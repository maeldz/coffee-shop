import styled from "styled-components/native";

interface Props {
  scale: number;
}

export const Container = styled.View<Props>`
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  height: ${(props) => 85 * props.scale}px;
`;

export const BackgroundCircle = styled.View<Props>`
  width: ${(props) => 45 * props.scale}px;
  height: ${(props) => 45 * props.scale}px;
  border-radius: ${(props) => 22.5 * props.scale}px;
  background: rgba(0, 0, 0, 0.2);
`;

export const Image = styled.Image.attrs({
  resizeMode: "contain",
})<Props>`
  position: absolute;
  top: ${(props) => 5 * props.scale}px;
  height: ${(props) => 50 * props.scale}px;
  width: ${(props) => 50 * props.scale}px;
`;

export const SizeBadge = styled.View<Props>`
  position: absolute;
  background: ${(props) => props.theme.colors.white};
  width: ${(props) => 24 * props.scale}px;
  height: ${(props) => 24 * props.scale}px;
  border-radius: ${(props) => 12 * props.scale}px;
  align-items: center;
  justify-content: center;
  right: ${(props) => -8 * props.scale}px;
  top: ${(props) => 6 * props.scale}px;
`;

export const SizeBadgeText = styled.Text<Props>`
  font-family: cyntho_bold;
  text-transform: uppercase;
  font-size: ${(props) => 16 * props.scale}px;
`;
