import styled from "styled-components/native";

import background from "../../assets/images/background.jpg";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 10px 10px 0 10px;
`;

export const Input = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.gray,
}))`
  margin-bottom: 10px;
  border: 1px solid ${(props) => props.theme.colors.inactive};
  background: ${(props) => props.theme.colors.white};
  padding: 8px 15px;
  border-radius: 20px;
`;

export const ProductList = styled.FlatList``;

export const Product = styled.TouchableOpacity`
  padding: 10px;
  background: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.inactive};
  margin: 0 10px 10px 0;
  flex: 0.5;
  border-radius: 15px;
`;

export const BackgroundImage = styled.ImageBackground.attrs({
  source: background,
  imageStyle: {
    borderRadius: 15,
  },
})`
  height: 170px;
  padding: 10px 0;
`;

export const ProductImage = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 100%;
  height: 150px;
`;

export const ProductInfo = styled.View``;

export const ProductTitle = styled.Text`
  font-family: kaleko205;
  margin-top: 10px;
`;

export const ProductFlavor = styled.Text`
  font-family: cyntho_light;
  color: ${(props) => props.theme.colors.gray};
  margin-bottom: 10px;
  font-size: 12px;
`;

export const ProductRating = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const BottomRow = styled.View`
  flex-direction: row;
`;

export const Rating = styled.Text`
  font-family: cyntho_bold;
  color: ${(props) => props.theme.colors.green};
  font-size: 12px;
  margin-left: 5px;
`;

export const Categories = styled.View`
  flex-direction: row;
  margin-left: 5px;
  align-items: center;
`;

export const CategorieRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Categorie = styled.Text`
  font-family: cyntho_light;
  color: ${(props) => props.theme.colors.gray};
  font-size: 11px;
`;

export const Divider = styled.View`
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background: ${(props) => props.theme.colors.gray};
  margin: 0 3px;
`;
