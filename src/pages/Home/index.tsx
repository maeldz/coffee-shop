import React, { useContext } from "react";
import { FlatList, ImageSourcePropType, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { ThemeContext } from "styled-components/native";

import Wrapper from "../../components/Wrapper";

import frappucino_caramel from "../../assets/images/frappuccino-caramel.png";
import frappucino_mocha from "../../assets/images/frappucino-mocha.png";

import {
  Container,
  Input,
  Product,
  BackgroundImage,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductFlavor,
  ProductRating,
  BottomRow,
  Rating,
  Categories,
  CategorieRow,
  Categorie,
  Divider,
} from "./styles";

interface Item {
  id: number;
  title: string;
  description: string;
  prices: {
    small: number;
    medium: number;
    large: number;
  };
  flavor: string;
  image: ImageSourcePropType;
  rating: string;
  categories: string[];
}

const Home: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  const navigation = useNavigation();

  const data: Item[] = [
    {
      id: 1,
      title: "Frappuccino",
      description:
        "Buttery caramel syrup meets coffee, milk and ice for a rendezvous in the blender.",
      prices: {
        small: 3.2,
        medium: 3.45,
        large: 3.7,
      },
      flavor: "caramel",
      image: frappucino_caramel,
      rating: "4.5",
      categories: ["coffee", "frappuccino"],
    },
    {
      id: 2,
      title: "Frappuccino",
      description:
        "Buttery caramel syrup meets coffee, milk and ice for a rendezvous in the blender.",
      prices: {
        small: 3.2,
        medium: 3.45,
        large: 3.7,
      },
      flavor: "mocha",
      image: frappucino_mocha,
      rating: "5.0",
      categories: ["coffee", "frappuccino"],
    },
  ];

  return (
    <Wrapper header>
      <Container>
        <Input placeholder="Procurar" />
        <FlatList<Item>
          data={data}
          keyExtractor={(item) => String(item.id)}
          numColumns={2}
          scrollEnabled={false}
          renderItem={({ item }) => (
            <Product
              onPress={() => navigation.navigate("Produto", { product: item })}
            >
              <BackgroundImage>
                <ProductImage source={item.image} />
              </BackgroundImage>

              <ProductInfo>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductFlavor>{item.flavor}</ProductFlavor>
              </ProductInfo>

              <BottomRow>
                <ProductRating>
                  <MaterialCommunityIcons
                    name="star"
                    size={16}
                    color={colors.green}
                  />
                  <Rating>{item.rating}</Rating>
                </ProductRating>

                <Categories>
                  {item.categories.map((categorie, index) => {
                    return index > 0 ? (
                      <CategorieRow key={categorie}>
                        <Divider />
                        <Categorie>{categorie}</Categorie>
                      </CategorieRow>
                    ) : (
                      <CategorieRow key={categorie}>
                        <Categorie>{categorie}</Categorie>
                      </CategorieRow>
                    );
                  })}
                </Categories>
              </BottomRow>
            </Product>
          )}
        />
      </Container>
    </Wrapper>
  );
};

export default Home;
