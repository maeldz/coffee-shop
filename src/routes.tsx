import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Orders from "./pages/Orders";
import Account from "./pages/Account";

import Product from "./pages/Product";

import TabBar from "./components/TabBar";

const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Routes: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  function WithBottomTab() {
    return (
      <BottomTab.Navigator tabBar={(props) => <TabBar {...props} />}>
        <BottomTab.Screen
          name="Produtos"
          component={Home}
          initialParams={{
            colors: { focused: colors.green, normal: colors.gray },
            icon: "home",
          }}
        ></BottomTab.Screen>
        <BottomTab.Screen
          name="Favoritos"
          component={Favorites}
          initialParams={{
            colors: { focused: colors.green, normal: colors.gray },
            icon: "heart",
          }}
        />
        <BottomTab.Screen
          name="Compras"
          component={Orders}
          initialParams={{
            colors: { focused: colors.green, normal: colors.gray },
            icon: "shopping",
          }}
        />
        <BottomTab.Screen
          name="Perfil"
          component={Account}
          initialParams={{
            colors: { focused: colors.green, normal: colors.gray },
            icon: "account",
          }}
        />
      </BottomTab.Navigator>
    );
  }

  function App() {
    return (
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Produtos" component={WithBottomTab} />
        <Stack.Screen name="Produto" component={Product} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

export default Routes;
