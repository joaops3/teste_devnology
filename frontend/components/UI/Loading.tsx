import { Spinner, Flex } from "@chakra-ui/react";
import React from 'react'

const Loading = () => {
  return (
    <>
      <Flex w="100%" h={"70vh"} justify={"center"} alignItems="center">
        <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="green.300" size="xl" />
      </Flex>
    </>
  );
}

export default Loading