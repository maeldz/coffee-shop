import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: string;

    colors: {
      primary: string;
      heading: string;
      white: string;
      gray: string;
      tag: string;
      green: string;
      red: string;
      purple: string;
      inactive: string;
      inactive2: string;
      backgroundImage: string;
    };
  }
}
