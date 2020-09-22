import styled from "styled-components/native";

export const Container = styled.View`
  height: 60px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.colors.white};

  padding: 14px;
`;

export const Logo = styled.Image`
  height: 100%;
  width: 140px;
`;

export const RightSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  margin-left: 20px;
`;

export const Badge = styled.View`
  background: ${(props) => props.theme.colors.red};

  width: 8px;
  height: 8px;
  border-radius: 4px;

  position: absolute;
  top: 2px;
  right: 3px;
`;
