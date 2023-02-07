import type { NextPage } from 'next'
import Head from 'next/head'
import {useState} from "react"
import {Flex, VStack, Input as ChakraInput, Link, InputGroup, FormLabel, Box, FormControl, InputLeftElement, FormHelperText, Button, FormErrorMessage, Image, Text} from "@chakra-ui/react"

import {User, LockSimple} from "phosphor-react"
import { useRouter } from "next/router"


const Home: NextPage = () => {
  const router = useRouter()
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(!email || !password) {
      setError(true)
      return
    }
    router.push("/profile/1");
  };

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
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          borderRadius="8"
          boxShadow={"1px 6px 92px -2px rgba(0,0,0,0.4);"}
        >
          <VStack spacing={"5"}>
            <Image src="/logo.svg" p="5" py="7"></Image>
            <FormControl isInvalid={error} display="flex" justifyContent={"center"}>
              <FormErrorMessage my={3}>E-mail ou senha incorretos!</FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="e-mail">E-mail</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <User size={20} />
                </InputLeftElement>
                <ChakraInput as={"input"}
                  id="e-mail"
                  type={"e-mail"}
                  placeholder="E-mail"
                  size={"md"}
                  bg={"white"}
                  focusBorderColor="green.500"
                  colorScheme={"whatsapp"}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                ></ChakraInput>
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputGroup>
                <InputLeftElement>
                  <LockSimple size={20} />
                </InputLeftElement>
                <ChakraInput as={"input"}
                  id="password"
                  type={"Password"}
                  placeholder="Password"
                  size={"md"}
                  bg={"white"}
                  focusBorderColor="green.500"
                  colorScheme={"whatsapp"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></ChakraInput>
              </InputGroup>
              <Link href="/forgot_password" _hover={{ color: "green.400" }}>
                <FormHelperText color={"green.800"} _hover={{ color: "green.600" }} cursor="pointer">
                  Esqueci minha senha
                </FormHelperText>
              </Link>
            </FormControl>

            <Button as={"button"} type="submit" mt="3" width={"40%"} colorScheme={"whatsapp"} size="md">
              Login
            </Button>

            <Box textAlign={"left"} w="100%">
              <Text>
                Não Possui conta ?{" "}
                <Link href="/sign" _hover={{ color: "green.400" }}>
                  Cadastrar
                </Link>
              </Text>
            </Box>
          </VStack>
        </Flex>
      </Flex>
    </>
  );
}

export default Home
