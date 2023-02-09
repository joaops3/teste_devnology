import type { NextPage } from 'next'
import Head from 'next/head'
import {useEffect, useState} from "react"
import {Flex, VStack, Input as ChakraInput, Link, InputGroup, FormLabel, Box, FormControl, InputLeftElement, FormHelperText, Button, FormErrorMessage, Image, Text} from "@chakra-ui/react"

import {User, LockSimple} from "phosphor-react"
import { useRouter } from "next/router"
import AuthService from '../services/AuthService'
import useAuthContext from '../context/AuthContext'
import Logo from '../components/UI/Logo'


const Home: NextPage = () => {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false)
  const {signIn, isLogged, user} = useAuthContext()
  const route = useRouter()
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(!email || !password) {
      setError(true)
      return
    }
    
    signIn(email, password)
  };

  useEffect(()=> {
    // if(isLogged && user){
    //   route.push(`/profile/${user.id}`)
    // }
  },[])

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
           |<Logo></Logo>
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
                  focusBorderColor="primary.normal"
                  colorScheme={"yellow"}
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
                  focusBorderColor="primary.normal"
                  colorScheme={"yellow"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                ></ChakraInput>
              </InputGroup>
            </FormControl>

            <Button as={"button"} type="submit" mt="3" width={"40%"} colorScheme={"yellow"} size="md">
              Login
            </Button>

            <Box textAlign={"left"} w="100%">
              <Text>
                Não Possui conta ?{" "}
                <Link href="/sign" _hover={{ color: "primary.normal" }}>
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
