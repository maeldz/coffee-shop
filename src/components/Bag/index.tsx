import React, { useMemo } from "react";
import { Dimensions } from "react-native";
import { Animated } from "react-native";
import {
  PanGestureHandler,
  PanGestureHandlerStateChangeEvent,
} from "react-native-gesture-handler";
import { useCart } from "../../contexts/cart";

import SimpleProduct from "../SimpleProduct";

const { height } = Dimensions.get("window");

import {
  Container,
  Content,
  Head,
  ProductList,
  Info,
  MiddleInfo,
  ProductInfo,
  ProductName,
  ProductSize,
  ProductPrice,
  ProductAmount,
  CartBottom,
  Separator,
  TotalRow,
  TotalText,
  Total,
  ConfirmOrderButton,
  ConfirmOrderText,
  SimpleCart,
  SimpleProducts,
  SimpleTotal,
  SimpleTotalText,
} from "./styles";

interface BagProps {
  translateY: Animated.Value;
  animatedEvent: (...args: any[]) => void;
  onHandlerStateChanged: (event: PanGestureHandlerStateChangeEvent) => void;
}

const Bag: React.FC<BagProps> = ({
  animatedEvent,
  onHandlerStateChanged,
  translateY,
}) => {
  const { items } = useCart();

  const total = useMemo(
    () =>
      items
        .reduce((next, item) => Number(item?.price) * item?.amount + next, 0)
        .toFixed(2),
    [items]
  );

  return (
    <PanGestureHandler
      onGestureEvent={animatedEvent}
      onHandlerStateChange={onHandlerStateChanged}
    >
      <Container>
        <Content
          style={{
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [height * -1 + 30, 0],
                  outputRange: [height * -1 + 30, 0],
                  extrapolate: "clamp",
                }),
              },
            ],
            opacity: translateY.interpolate({
              inputRange: [-150, -100],
              outputRange: [1, 0],
            }),
          }}
        >
          <Head>My Bag</Head>
          <ProductList>
            {items.map((item) => (
              <Info key={item?.id + item?.size}>
                <SimpleProduct item={item} scale={1.2} badge={false} />
                <MiddleInfo>
                  <ProductInfo>
                    <ProductName>{item.flavor + " " + item.title}</ProductName>
                    <ProductSize>{`Size ${item.size
                      .charAt(0)
                      .toUpperCase()}`}</ProductSize>
                  </ProductInfo>
                  <ProductPrice>{`$ ${item.price}`}</ProductPrice>
                </MiddleInfo>
                <ProductAmount>{`x ${item.amount}`}</ProductAmount>
              </Info>
            ))}
          </ProductList>

          <CartBottom>
            <Separator />
            <TotalRow>
              <TotalText>Total</TotalText>
              <Total>{`$ ${total}`}</Total>
            </TotalRow>
            <ConfirmOrderButton>
              <ConfirmOrderText>Confirm Order</ConfirmOrderText>
            </ConfirmOrderButton>
          </CartBottom>
        </Content>

        <SimpleCart
          style={{
            opacity: translateY.interpolate({
              inputRange: [-100, -85],
              outputRange: [0, 1],
            }),
          }}
        >
          <SimpleProducts>
            {items.map((item) => (
              <SimpleProduct
                key={item?.id + item?.size}
                item={item}
                style={{ marginTop: 10 }}
              />
            ))}
          </SimpleProducts>
          <SimpleTotal>
            <SimpleTotalText>{`$ ${total}`}</SimpleTotalText>
          </SimpleTotal>
        </SimpleCart>
      </Container>
    </PanGestureHandler>
  );
};

export default Bag;
