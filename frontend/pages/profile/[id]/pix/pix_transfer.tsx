import {
  Text,
  Flex,
  HStack,
  IconButton,
  Input as ChakraInput,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Card from "../../../../components/UI/Card";
import MainContainer from "../../../../components/UI/MainContainer";
import { IdentificationCard, At, DeviceMobile } from "phosphor-react";
import SelectedInput from "../../../../components/UI/SelectedInput";
import CurrencyInput from "../../../../components/UI/CurrencyInput";


const Pix_transfer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [step1, setStep1] = useState<boolean>(false);
  const [step2, setStep2] = useState<boolean>(false)
  const [value, setValue] = useState<string>("");
  const [amouth, setAmouth] = useState<string>("")
  const [selectedInput, setSelectedInput] = useState<"EMAIL" | "CPF" | "MOBILE">("CPF");
  
  return (
    <>
      <MainContainer>
        <Flex direction="column" mx="auto" gap="5" mb="5">
          <Heading color={"gray.600"}>PIX</Heading>
          <Card title="Dados">
            <Text as="p">
              <strong>Chave Pix: </strong> 1211121
            </Text>
            <Text as="p">
              <strong>Tipo Pix: </strong> CPF
            </Text>
            <Text as="p">
              <strong>Saldo: </strong> 1000,00
            </Text>
          </Card>

          <Card title="Transferência">
            <HStack display={"flex"} justifyContent="center" w="100%" mx="auto">
              <IconButton
                aria-label="pix type button"
                colorScheme={"green"}
                onClick={() => setSelectedInput("CPF")}
                icon={<IdentificationCard size={30} />}
              ></IconButton>
              <IconButton
                aria-label="pix type button"
                onClick={() => setSelectedInput("EMAIL")}
                colorScheme={"green"}
                icon={<At size={30} />}
              ></IconButton>
              <IconButton
                aria-label="pix type button"
                colorScheme={"green"}
                onClick={() => setSelectedInput("MOBILE")}
                icon={<DeviceMobile size={30} />}
              ></IconButton>
            </HStack>
            <Text mt="5">
              <strong>Tipo: </strong> {selectedInput}
            </Text>
          <SelectedInput selected={selectedInput} value={value} setValue={setValue}/>
            <CurrencyInput value={amouth} setValue={setAmouth} mt={4}></CurrencyInput>
            <Flex w="100%" mt="5" justifyContent={"center"}>
              <Button colorScheme={"whatsapp"} onClick={onOpen} isDisabled={value === "" ? true : false}>
                Enviar
              </Button>
            </Flex>
          </Card>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Comfirmação</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>
                  <strong>Dados destinatario: </strong>joao
                </Text>
                <Text>
                  <strong>Chave pix: </strong>joao
                </Text>
                <Text>
                  <strong>CPF: </strong> xxx.xxx.xxx-xx
                </Text>
                <Text>
                  <strong>Valor a ser enviado: </strong> R$ 1000,00
                </Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme={"whatsapp"} mr={3}>
                  Confirmar
                </Button>
                <Button colorScheme="red" onClick={onClose}>
                  Cancelar
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Flex>
      </MainContainer>
    </>
  );
};

export default Pix_transfer;
