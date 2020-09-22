import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

import logo from "../../assets/images/logo.png";

import { Container, Logo, RightSide, Button, Badge } from "./styles";

const Header: React.FC = () => {
  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Logo source={logo} />

      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={24}
            color={colors.heading}
          />
          <Badge />
        </Button>
      </RightSide>
    </Container>
  );
};

export default Header;
