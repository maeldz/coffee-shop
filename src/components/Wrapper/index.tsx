import React from "react";

import Header from "../Header";

import { Container } from "./styles";

interface Props {
  header?: boolean;
}

const Wrapper: React.FC<Props> = ({ children, header }) => {
  return (
    <Container>
      {header && <Header />}
      {children}
    </Container>
  );
};

export default Wrapper;
