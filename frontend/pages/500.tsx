import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/react";
const Error = () => {
  return (
    <Flex w="100%" h="100vh" justifyContent={"center"} direction="column" alignItems="center">
      <Heading>500</Heading>
      <Text>Error</Text>
    </Flex>
  );
};

export default Error;
