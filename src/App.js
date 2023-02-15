import { Flex } from "@chakra-ui/react";
import Layout from "./components/Layout";

function App() {
  return (
    <Flex justify={"center"} minH={"100vh"}>
      <Flex align={"center"} justify={"center"}>
        <Layout />
      </Flex>
    </Flex>
  );
}

export default App;
