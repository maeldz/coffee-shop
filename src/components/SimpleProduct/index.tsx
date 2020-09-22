import React from "react";
import { ScrollViewProps } from "react-native";
import { ImageSourcePropType, Text, ViewStyle } from "react-native";

import {
  Container,
  BackgroundCircle,
  Image,
  SizeBadge,
  SizeBadgeText,
} from "./styles";

interface ProductProps {
  item: {
    id: number;
    title: string;
    image: ImageSourcePropType;
    size: string;
    price: string;
    flavor: string;
    amount: number;
  };
  scale?: number;
  badge?: boolean;
}

const SimpleProduct: React.FC<ProductProps & ScrollViewProps> = ({
  item,
  scale = 1,
  badge = true,
  ...props
}) => {
  return (
    <Container scale={scale} {...props}>
      <BackgroundCircle scale={scale} />
      <Image source={item?.image} scale={scale} />
      {badge && (
        <SizeBadge scale={scale}>
          <SizeBadgeText scale={scale}>{item?.size.charAt(0)}</SizeBadgeText>
        </SizeBadge>
      )}
    </Container>
  );
};

export default SimpleProduct;
