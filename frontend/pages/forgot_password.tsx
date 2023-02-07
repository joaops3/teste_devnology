import React, {useState} from 'react'
import {Flex, VStack, Input as ChakraInput, InputGroup, FormLabel, FormControl, InputLeftElement, FormHelperText, Button, FormErrorMessage, Text, Heading, Image} from "@chakra-ui/react"
import Link from "next/link";
import { CheckCircle } from "phosphor-react";
import { User, LockSimple } from "phosphor-react";
const Forgot_password = () => {

  const [isSubmited, setIsSubmited] = useState<boolean>(false)

  return (
    <>
      <Flex w={"100%"} height={"100vh"} align={"center"} justify={"center"}>
        <Flex
          as={"form"}
          bg={"gray.200"}
          w="100%"
          maxWidth={360}
          direction={"column"}
          p={5}
          px="8"
          boxShadow={"1px 6px 92px -2px rgba(0,0,0,0.4);"}
          borderRadius="8"
        >
          {isSubmited ? (
            <VStack spacing={"5"}>
              <CheckCircle size={50} color="green" />
              <Heading fontSize={20}>E-mail enviado com sucesso</Heading>
            </VStack>
          ) : (
            <VStack spacing={"5"}>
              <Image src="/logo.svg" p="5" py="7"></Image>
              <Text>Recuperação de Email </Text>
              <FormControl>
                <FormLabel htmlFor="e-mail">E-mail</FormLabel>
                <InputGroup>
                  <InputLeftElement>
                    <User size={20} />
                  </InputLeftElement>
                  <ChakraInput
                    id="e-mail"
                    type={"e-mail"}
                    placeholder="E-mail"
                    size={"md"}
                    bg={"white"}
                    focusBorderColor="green.500"
                    colorScheme={"whatsapp"}
                  ></ChakraInput>
                </InputGroup>
              </FormControl>
              <Button
                type="submit"
                mt="3"
                width={"40%"}
                colorScheme={"whatsapp"}
                size="md"
                onClick={() => {
                  setIsSubmited(true);
                }}
              >
                Enviar
              </Button>
            </VStack>
          )}
        </Flex>
      </Flex>
    </>
  );
}

export default Forgot_password