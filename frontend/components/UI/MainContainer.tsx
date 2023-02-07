import React from "react";
import Header from "../header/Header";
import { Flex, SimpleGrid, Box, Text, Heading, Progress, Button, Divider } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const MainContainer: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Flex as="section" w="100%" maxWidth="1420px" mx="auto" px={["4, 8"]}>
        {children}
      </Flex>
    </>
  );
};

export default MainContainer;
