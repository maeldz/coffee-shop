import React, { useContext, useState, useRef } from "react";
import {
  PanGestureHandler,
  PanGestureHandlerStateChangeEvent,
  State,
} from "react-native-gesture-handler";
import { Animated, Dimensions } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { ThemeContext } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

import Wrapper from "../../components/Wrapper";
import Bag from "../../components/Bag";
import CupSize from "../../components/CupSize";

import { useCart } from "../../contexts/cart";

const { height } = Dimensions.get("window");

import {
  Main,
  Container,
  Content,
  Header,
  LeftSide,
  Button,
  Heading,
  ImageBackground,
  Image,
  Circle,
  Title,
  Description,
  ProductOptions,
  PriceRow,
  PricePrefix,
  IntegerPart,
  DecimalPart,
  Sizes,
  Small,
  Medium,
  Large,
  AddButton,
  AddButtonText,
  PushBar,
} from "./styles";

const Product: React.FC = () => {
  const navigation = useNavigation();
  const { colors } = useContext(ThemeContext);
  const { addToCart, clearCart, items } = useCart();

  const translateY = useRef(new Animated.Value(0)).current;
  let offset = useRef(0).current;
  let opened = useRef(false).current;
  const [semiOpened, setSemiOpened] = useState(false);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: items.length ? translateY : new Animated.Value(0),
        },
      },
    ],
    {
      useNativeDriver: true,
    }
  );

  const { product } = useRoute<RouteProp<ParamList, "Produto">>().params;

  const [active, setActive] = useState("large");
  const [total, setTotal] = useState(product.prices.large.toFixed(2));

  function isActive(size: string) {
    return active === size;
  }

  function handleSelect(size: string) {
    setActive(size);
    setTotal(product.prices[size].toFixed(2));
  }

  function splitDecimal(number: string) {
    const [integer, decimal] = number.split(".");
    return [integer, "." + decimal];
  }

  function handleAddProduct(item: typeof product) {
    Animated.timing(translateY, {
      toValue: -85,
      duration: 350,
      useNativeDriver: true,
    }).start(() => {
      translateY.setValue(0);
      translateY.setOffset(-85);
    });

    const formattedItem = {
      id: item.id,
      title: item.title,
      image: item.image,
      size: active,
      price: total,
      flavor: item.flavor,
      amount: 0,
    };

    addToCart(formattedItem);
  }

  function onHandlerStateChanged(event: PanGestureHandlerStateChangeEvent) {
    let { translationY } = event.nativeEvent;

    if (event.nativeEvent.oldState === State.ACTIVE && items.length) {
      offset += translationY;

      if (translationY <= -100 || offset <= -height + 100) {
        opened = true;
      } else {
        opened = false;
        translateY.setValue(offset);
        translateY.setOffset(0);
      }

      Animated.timing(translateY, {
        toValue: opened ? -height : 0,
        duration: 350,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? -height : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Wrapper>
      <Main>
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChanged}
        >
          <Container
            style={{
              transform: [
                {
                  translateY: items.length
                    ? translateY.interpolate({
                        inputRange: [(height - 30) * -1, 0],
                        outputRange: [(height - 30) * -1, 0],
                        extrapolate: "clamp",
                      })
                    : 0,
                },
              ],
            }}
          >
            <Content
              style={{
                transform: [
                  {
                    translateY: items.length
                      ? translateY.interpolate({
                          inputRange: [height * -1, 0],
                          outputRange: [(height / 8) * -1, 0],
                          extrapolate: "clamp",
                        })
                      : 0,
                  },
                ],
                opacity: items.length
                  ? translateY.interpolate({
                      inputRange: [(height / 1.2) * -1, (height / 2) * -1],
                      outputRange: [0.1, 1],
                    })
                  : 1,
              }}
            >
              <Header>
                <LeftSide>
                  <Button onPress={() => navigation.goBack()}>
                    <Feather
                      name="chevron-left"
                      size={32}
                      color={colors.heading}
                      style={{ marginLeft: -10 }}
                    />
                  </Button>
                  <Heading>{product.title}</Heading>
                </LeftSide>
                <Button onPress={() => clearCart()}>
                  <Feather name="heart" size={26} color={colors.heading} />
                </Button>
              </Header>
              <ImageBackground>
                <Image source={product.image} />
                <Circle />
              </ImageBackground>

              <Title>{product.flavor + " " + product.title}</Title>

              <Description>{product.description}</Description>
              <ProductOptions>
                <PriceRow>
                  <PricePrefix>$ </PricePrefix>
                  <IntegerPart duration={400}>
                    {splitDecimal(total)[0]}
                  </IntegerPart>
                  <DecimalPart duration={400}>
                    {splitDecimal(total)[1]}
                  </DecimalPart>
                </PriceRow>
                <Sizes>
                  <Small
                    active={isActive("small")}
                    onPress={() => handleSelect("small")}
                  >
                    <CupSize
                      height={30}
                      active={isActive("small")}
                      size="small"
                    />
                  </Small>
                  <Medium
                    active={isActive("medium")}
                    onPress={() => handleSelect("medium")}
                  >
                    <CupSize
                      height={34}
                      active={isActive("medium")}
                      size="medium"
                    />
                  </Medium>
                  <Large
                    active={isActive("large")}
                    onPress={() => handleSelect("large")}
                  >
                    <CupSize
                      height={38}
                      active={isActive("large")}
                      size="large"
                    />
                  </Large>
                </Sizes>
              </ProductOptions>
              <AddButton onPress={() => handleAddProduct(product)}>
                <AddButtonText>Add to Bag</AddButtonText>
              </AddButton>
            </Content>
            <PushBar
              style={{
                opacity: items.length
                  ? translateY.interpolate({
                      inputRange: [-100, -85],
                      outputRange: [1, 0],
                    })
                  : 0,
              }}
            />
          </Container>
        </PanGestureHandler>
        <Bag
          animatedEvent={animatedEvent}
          onHandlerStateChanged={onHandlerStateChanged}
          translateY={translateY}
        />
      </Main>
    </Wrapper>
  );
};

export default Product;
