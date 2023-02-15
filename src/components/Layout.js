import Container from "./Container";
import RightSideDisplay from "./RightSideDisplay";
import PiechartDisplay from "./PiechartDisplay";
import Indicator from "./Indicator";

import { Flex } from "@chakra-ui/react";

const Layout = () => {
  return (
    <Container>
      <Indicator />
      <Flex
        direction={"row"}
        pt={"0.75rem"}
        align={"space-around"}
        justify={"center"}
      >
        <Flex direction={"column"} mt={"0.75rem"} w={"10rem"}>
          <PiechartDisplay />
        </Flex>
        <Flex>
          <RightSideDisplay />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Layout;
