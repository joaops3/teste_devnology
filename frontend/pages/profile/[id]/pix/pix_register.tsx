import React, { useState } from "react";
import {
  Flex,
  Button,
  IconButton,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";
import MainContainer from "../../../../components/UI/MainContainer";
import { IdentificationCard, At, DeviceMobile, QrCode } from "phosphor-react";
import SelectedInput from "../../../../components/UI/SelectedInput";

const Pix_register = () => {
  const [value, setValue] = useState<string>("");
  const [selectedInput, setSelectedInput] = useState<"EMAIL" | "CPF" | "MOBILE">("CPF");
 

  return (
    <>
      <MainContainer>
        <Flex direction={"column"} p="5" alignItems={"center"} minWidth="100%" justifyContent="center">
          <Heading mb="4">Cadastrar Chave</Heading>
          <SimpleGrid
            gap="4"
            minChildWidth={"320px"}
            column="4"
            flex={1}
            display="flex"
            justifyContent={"center"}
            flexDirection={["column", "row"]}
          >
            <IconButton
              colorScheme="green"
              aria-label="select pix button "
              size="lg"
              p="10"
              py="20"
              icon={<IdentificationCard size={100} />}
              onClick={() => {
                setSelectedInput("CPF");
              }}
            ></IconButton>
            <IconButton
              colorScheme="green"
              aria-label="Call Segun"
              size="lg"
              p="10"
              py="20"
              icon={<At size={100} />}
              onClick={() => {
                setSelectedInput("EMAIL");
              }}
            ></IconButton>
            <IconButton
              colorScheme="green"
              aria-label="Call Segun"
              size="lg"
              p="10"
              py="20"
              onClick={() => {
                setSelectedInput("MOBILE");
              }}
              icon={<DeviceMobile size={100} />}
            ></IconButton>
            <IconButton
              colorScheme="green"
              aria-label="Call Segun"
              size="lg"
              p="10"
              py="20"
              icon={<QrCode size={100} />}
            ></IconButton>
          </SimpleGrid>
          <SelectedInput selected={selectedInput} value={value} setValue={setValue}></SelectedInput>
          <Button size="lg" colorScheme={"whatsapp"} mt="8">
            Salvar
          </Button>
        </Flex>
      </MainContainer>
    </>
  );
};

export default Pix_register;
