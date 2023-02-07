import React from 'react'
import {Flex, Heading, Text} from "@chakra-ui/react"
const NotFound = () => {
  return (
    <Flex w="100%" h="100vh" justifyContent={"center"} direction="column" alignItems="center">
      <Heading>404</Heading>
      <Text>Conteudo não encontrado</Text>
    </Flex>
  )
}

export default NotFound