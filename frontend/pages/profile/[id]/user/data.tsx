import { Box, Button, Flex, Link, Heading, Text, Highlight, VStack, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import MainContainer from "../../../../components/UI/MainContainer";
import { PencilSimple } from "phosphor-react";
const Data = () => {
  return (
    <>
      <MainContainer>
        <Flex justify={"center"} w="100%" direction={"column"} px={["2", "0"]}>
          <Flex w="100%" justifyContent={"flex-end"}>
            <Link href={`/profile/1/user/edit`} _hover={{ textDecoration: "none" }}>
              <Button leftIcon={<PencilSimple size={20} />} size={"lg"} colorScheme={"whatsapp"}>
                Editar
              </Button>
            </Link>
          </Flex>
          <Box mb="2">
            <Heading>Dados Cadastrais</Heading>
          </Box>
          <SimpleGrid
            bg={"gray.100"}
            w="100%"
            column={2}
            minChildWidth="340px"
            boxShadow={"0 0 4px RGBA(0, 0, 0, 0.16)"}
            borderRadius="8"
          >
            <Box gap="1" py="5" pl="2" borderRadius={8}>
              <Heading as="h5" fontSize={20}>
                Usuário:
              </Heading>
              <Text as="p" textTransform={"capitalize"}>
                <strong>Nome: </strong>joao
              </Text>
              <Text as="p" textTransform={"capitalize"}>
                <strong>Nascimento: </strong>04/08/1988
              </Text>
              <Text as="p">
                <strong>CPF: </strong>xxx.xxx.xxx-xx
              </Text>
              <Text as="p" textTransform={"capitalize"}>
                <strong>Genero: </strong>Masculino
              </Text>
              <Text as="p" textTransform={"capitalize"}>
                <strong>celular: </strong>19 98521544
              </Text>
              <Text as="p" textTransform={"capitalize"}>
                <strong>telefone: </strong>38545214
              </Text>
              <Text as="p">
                <strong>Email: </strong>Email@gmail.com
              </Text>
            </Box>
            <Box gap="1" py="5" pl="2" borderRadius={8}>
              <Heading as="h5" fontSize={20}>
                Endereço:
              </Heading>
              <Text as="p" textTransform={"capitalize"}>
                <strong>Rua: </strong>joao
              </Text>
              <Text as="p" textTransform={"capitalize"}>
                <strong>Bairro: </strong>04/08/1988
              </Text>
              <Text as="p">
                <strong>Numero: </strong>xxx.xxx.xxx-xx
              </Text>
              <Text as="p" textTransform={"capitalize"}>
                <strong>CEP: </strong>Masculino
              </Text>
              <Text as="p" textTransform={"capitalize"}>
                <strong>Complemento: </strong>19 98521544
              </Text>
              <Text as="p" textTransform={"capitalize"}>
                <strong>Cidade: </strong>38545214
              </Text>
              <Text as="p">
                <strong>Estado: </strong>Email@gmail.com
              </Text>
            </Box>
          </SimpleGrid>
        </Flex>
      </MainContainer>
    </>
  );
};

export default Data;
