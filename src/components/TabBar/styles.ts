import styled from "styled-components/native";

export const Container = styled.View`
  height: 70px;
  padding: 0 20px;
  background: ${(props) => props.theme.colors.white};
  border-top-color: ${(props) => props.theme.colors.inactive};
  border-top-width: 1px;
  flex-direction: row;
`;
