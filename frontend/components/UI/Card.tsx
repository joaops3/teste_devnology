import React from 'react'
import {Flex, Box, Heading} from "@chakra-ui/react"

interface Props {
  title: string
  children: React.ReactNode
}
const Card: React.FC<Props> = ({children, title}) => {
  return (
    <>
      <Box maxWidth={768} minHeight="250px" w={["360px", "768px"]} p="2" bg={"gray.100"} borderRadius="8" boxShadow={"0 0 4px RGBA(0, 0, 0, 0.16)"} mx="auto">
        <Heading textAlign={"center"} fontSize="25px" mt="2" bg={"gray.100"} minHeight="70px">{title}</Heading>
        <Box bg="white" minHeight={"180px"} p="3" borderRadius="8">{children}</Box>
      </Box>
    </>
  );
}

export default Card