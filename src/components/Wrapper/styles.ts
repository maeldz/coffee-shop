import { Platform } from "react-native";
import styled from "styled-components/native";
import Constants from "expo-constants";

const statusBarHeight =
  Platform.OS === "android" ? Constants.statusBarHeight : 0;

export const Container = styled.View`
  background: ${(props) => props.theme.colors.primary};
  flex: 1;
  padding-top: ${statusBarHeight}px;
`;
