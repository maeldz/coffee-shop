interface ProductProps {
  id: number;
  title: string;
  description: string;
  prices: {
    small: number;
    medium: number;
    large: number;
    [index: string]: number;
  };
  flavor: string;
  image: ImageSourcePropType;
  rating: string;
  categories: string[];
}

type ParamList = {
  Produto: {
    product: ProductProps;
  };
};
