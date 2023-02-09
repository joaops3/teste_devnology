import React from 'react'
import FormUser from "../components/form/FormUser";
import {
  Flex,
  Image,
  Box,
  Link
} from "@chakra-ui/react";
import Logo from '../components/UI/Logo';
const SignIn = () => {
  return (
    <>
      <Flex w={"100%"} minHeight={"100vh"} align={"center"} justify={"center"} direction="column" mt="5" mb="5">
        <Box>
          <Link href="/">
           <Logo></Logo>
          </Link>
        </Box>
        <FormUser></FormUser>
      </Flex>
    </>
  );
}

export default SignIn