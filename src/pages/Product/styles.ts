import styled from "styled-components/native";
import { Animated } from "react-native";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

import Ticker from "../../components/AnimatedDigits";

interface sizeButtonProps {
  active: boolean;
}

export const Main = styled.View``;

export const Container = styled(Animated.View)`
  flex: 1;
  height: ${height}px;
  padding: 10px 20px 0 20px;
  background: ${(props) => props.theme.colors.white};
  position: absolute;
`;

export const Content = styled(Animated.View)`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LeftSide = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.TouchableOpacity``;

export const Heading = styled.Text`
  font-family: cyntho_bold;
  font-size: 20px;
`;

export const ImageBackground = styled.View`
  height: 40%;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;
export const Circle = styled.View`
  height: 220px;
  width: 220px;
  background: ${(props) => props.theme.colors.backgroundImage};
  border-radius: 110px;
  position: absolute;
  z-index: -1;
`;

export const Image = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  margin-top: 30px;
  align-self: center;
  font-family: kaleko205;
  text-transform: capitalize;
  font-size: 25px;
`;

export const Description = styled.Text`
  font-family: cyntho_light;
  font-size: 14px;
  color: ${(props) => props.theme.colors.tag};
  align-self: center;
  margin: 10px 0;
  line-height: 18px;
`;

export const ProductOptions = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`;

export const PriceRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PricePrefix = styled.Text`
  font-family: kaleko205;
  font-size: 25px;
`;

export const IntegerPart = styled(Ticker).attrs({
  textStyle: {
    fontFamily: "kaleko205",
    fontSize: 50,
  },
})``;

export const DecimalPart = styled(Ticker).attrs({
  textStyle: {
    fontFamily: "kaleko205",
    fontSize: 25,
  },
})``;

export const Sizes = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Small = styled.TouchableOpacity<sizeButtonProps>`
  width: 60px;
  height: 60px;
  background: ${(props) =>
    props.active ? "#E5F0EC" : props.theme.colors.inactive2};
  border: 2.5px solid
    ${(props) =>
      props.active ? props.theme.colors.green : props.theme.colors.inactive};
  border-radius: 4px;
  margin-left: 10px;

  align-items: center;
  justify-content: center;
`;

export const Medium = styled.TouchableOpacity<sizeButtonProps>`
  width: 60px;
  height: 60px;
  background: ${(props) =>
    props.active ? "#E5F0EC" : props.theme.colors.inactive2};
  border: 2.5px solid
    ${(props) =>
      props.active ? props.theme.colors.green : props.theme.colors.inactive};
  border-radius: 4px;
  margin-left: 10px;

  align-items: center;
  justify-content: center;
`;

export const Large = styled.TouchableOpacity<sizeButtonProps>`
  width: 60px;
  height: 60px;
  background: ${(props) =>
    props.active ? "#E5F0EC" : props.theme.colors.inactive2};
  border: 2.5px solid
    ${(props) =>
      props.active ? props.theme.colors.green : props.theme.colors.inactive};
  border-radius: 4px;
  margin-left: 10px;

  align-items: center;
  justify-content: center;
`;

export const AddButton = styled.TouchableOpacity`
  margin-top: auto;
  align-self: stretch;
  margin-bottom: 20px;
  padding: 15px 0;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.colors.green};
`;

export const AddButtonText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-family: cyntho_bold;
  font-size: 18px;
`;

export const PushBar = styled(Animated.View)`
  background: ${(props) => props.theme.colors.inactive};
  height: 5px;
  width: 50px;
  margin-bottom: 10px;
  border-radius: 10px;
  align-self: center;
  opacity: 0;
`;
