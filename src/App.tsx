import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";
import { AppLoading, registerRootComponent } from "expo";
import { useFonts } from "expo-font";
import { ThemeProvider } from "styled-components/native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import Routes from "./routes";

import { CartProvider, useCart } from "./contexts/cart";

function App() {
  const theme = useColorScheme() === "dark" ? dark : light;
  const { loading } = useCart();

  const [fontsLoaded] = useFonts({
    roboto_700: require("./assets/fonts/Roboto-Bold.ttf"),
    cyntho_light: require("./assets/fonts/CynthoNext-Light.ttf"),
    cyntho_bold: require("./assets/fonts/CynthoNext-Bold.ttf"),
    kaleko205: require("./assets/fonts/Kaleko205-Bold.ttf"),
  });

  if (!fontsLoaded || loading) {
    return <AppLoading />;
  }

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <CartProvider>
          <Routes />
          <StatusBar style="auto" />
        </CartProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default registerRootComponent(App);
