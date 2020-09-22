import React from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";

import { Container, SelectedContainer, Label } from "./styles";

interface TabBarButtonProps {
  options: BottomTabNavigationOptions;
  routeName: string;
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  colors: {
    focused: string;
    normal: string;
  };
  icon: string;
}

const TabBarButton: React.FC<TabBarButtonProps> = ({
  options,
  routeName,
  isFocused,
  onPress,
  onLongPress,
  colors,
  icon,
}) => {
  const label =
    options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : routeName;

  return (
    <Container
      accessibilityRole="button"
      accessibilityState={isFocused ? { selected: true } : {}}
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
    >
      {isFocused ? (
        <SelectedContainer color={colors.focused}>
          <MaterialCommunityIcons
            name={icon}
            size={26}
            color={colors.focused}
          />

          <Label color={colors.focused}>{label}</Label>
        </SelectedContainer>
      ) : (
        <MaterialCommunityIcons name={icon} size={24} color={colors.normal} />
      )}
    </Container>
  );
};

export default TabBarButton;
