import React from "react";
import { ImageSourcePropType, Text } from "react-native";

import m from "../../assets/images/M-active.png";
import m_inactive from "../../assets/images/M-inactive.png";
import s from "../../assets/images/S-active.png";
import s_inactive from "../../assets/images/S-inactive.png";
import l from "../../assets/images/L-active.png";
import l_inactive from "../../assets/images/L-inactive.png";

import { Container, Active, Inactive } from "./styles";

interface CupProps {
  size: string;
  active: boolean;
  height: number;
}

interface Icon {
  small: {
    active: ImageSourcePropType;
    inactive: ImageSourcePropType;
  };
  medium: {
    active: ImageSourcePropType;
    inactive: ImageSourcePropType;
  };
  large: {
    active: ImageSourcePropType;
    inactive: ImageSourcePropType;
  };
  [index: string]: {
    active: ImageSourcePropType;
    inactive: ImageSourcePropType;
  };
}

const CupSize: React.FC<CupProps> = ({ size, active, height }) => {
  const icon: Icon = {
    small: {
      active: s,
      inactive: s_inactive,
    },
    medium: {
      active: m,
      inactive: m_inactive,
    },
    large: {
      active: l,
      inactive: l_inactive,
    },
  };

  return (
    <Container>
      <Active height={height} source={icon[size].active} active={active} />
      <Inactive height={height} source={icon[size].inactive} active={active} />
    </Container>
  );
};

export default CupSize;
