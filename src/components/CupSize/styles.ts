import styled from "styled-components/native";

export const Container = styled.View``;

interface CupProps {
  active: boolean;
  height: number;
}

export const Active = styled.Image.attrs((props) => ({
  source: props.source,
  resizeMode: "contain",
}))<CupProps>`
  height: ${(props) => props.height}px;
  opacity: ${(props) => (props.active ? 1 : 0)};
`;

export const Inactive = styled.Image.attrs((props) => ({
  source: props.source,
  resizeMode: "contain",
}))<CupProps>`
  position: absolute;
  height: ${(props) => props.height}px;
  opacity: ${(props) => (props.active ? 0 : 1)};
`;
