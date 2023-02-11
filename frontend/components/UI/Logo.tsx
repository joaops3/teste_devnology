import { Heading, Text } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  return (
    <Heading cursor={"pointer"} display={"flex"} color="black">
      <Text color={"primary.normal"} fontWeight={"thin"}>
        MI
      </Text>
      LINKS
    </Heading>
  );
};

export default Logo;
