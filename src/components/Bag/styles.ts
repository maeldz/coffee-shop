import styled from "styled-components/native";
import { Animated, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export const Container = styled(Animated.View)`
  background: ${(props) => props.theme.colors.green};
  height: ${height}px;
  z-index: -1;
  position: absolute;
`;

export const Content = styled(Animated.View)`
  position: absolute;
  top: ${height}px;
  opacity: 0;
  width: 100%;
  height: ${height - 30}px;
  padding: 20px 20px 20px 5px;
`;

export const Head = styled.Text`
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  font-family: cyntho_bold;
  font-size: 28px;
  margin: 10px 0;
`;

export const ProductList = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MiddleInfo = styled.View`
  justify-content: space-between;
`;

export const ProductInfo = styled.View``;

export const ProductName = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-family: kaleko205;
  text-transform: capitalize;
`;

export const ProductSize = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-family: cyntho_light;
  font-size: 12px;
`;

export const ProductPrice = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-family: kaleko205;
  font-size: 13px;
  margin-top: 5px;
`;

export const ProductAmount = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-family: kaleko205;
`;

export const CartBottom = styled.View`
  margin-top: auto;
  margin-left: 15px;
`;

export const Separator = styled.View`
  height: 0.2px;
  background: ${(props) => props.theme.colors.white};
  margin: 10px 0;
`;

export const TotalRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TotalText = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-family: cyntho_bold;
  font-size: 25px;
`;

export const Total = styled.Text`
  color: ${(props) => props.theme.colors.white};
  font-family: cyntho_bold;
  font-size: 25px;
`;

export const ConfirmOrderButton = styled.TouchableOpacity`
  background: ${(props) => props.theme.colors.white};
  margin-top: 10px;
  padding: 15px 0;
  border-radius: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const ConfirmOrderText = styled.Text`
  color: ${(props) => props.theme.colors.green};
  font-family: kaleko205;
`;

export const SimpleCart = styled(Animated.View)`
  height: 85px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const SimpleProducts = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex-direction: row;
  height: 100%;
  width: 70%;
`;

export const SimpleTotal = styled.View`
  width: 30%;
  align-items: flex-end;
`;

export const SimpleTotalText = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-family: kaleko205;
  font-size: 20px;
  color: ${(props) => props.theme.colors.white};
  margin: 0 10px;
`;
