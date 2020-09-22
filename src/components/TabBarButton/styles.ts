import styled from "styled-components/native";
import { lighten } from "polished";

interface FocusedProps {
  color: string;
}

export const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SelectedContainer = styled.View<FocusedProps>`
  align-items: center;
`;

export const Label = styled.Text<FocusedProps>`
  color: ${(props) => props.color};
  font-size: 10px;
  font-family: kaleko205;
  margin-top: 2px;
`;
