import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import { Container } from "./styles";

import TabBarButton from "../TabBarButton";

interface ParamsProps {
  colors: {
    focused: string;
    normal: string;
  };
  icon: string;
}

const TabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <Container>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const { colors, icon } = route.params as ParamsProps;

        return (
          <TabBarButton
            key={route.key}
            isFocused={isFocused}
            options={options}
            routeName={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            colors={colors}
            icon={icon}
          />
        );
      })}
    </Container>
  );
};

export default TabBar;
