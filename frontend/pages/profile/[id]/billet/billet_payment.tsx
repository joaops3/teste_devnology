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
  VStack,
  Heading,
  Box,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Card from "../../../../components/UI/Card";
import MainContainer from "../../../../components/UI/MainContainer";
import { IdentificationCard, At, DeviceMobile } from "phosphor-react";
import SelectedInput from "../../../../components/UI/SelectedInput";
import CurrencyInput from "../../../../components/UI/CurrencyInput";

const Billet_payment = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [step1, setStep1] = useState<boolean>(false);
 
  const [value, setValue] = useState<string>("");
  const [amouth, setAmouth] = useState<string>("");
  const [selectedInput, setSelectedInput] = useState<"EMAIL" | "CPF" | "MOBILE">("CPF");

  return (
    <>
      <MainContainer>
        <Flex direction="column" mx="auto" gap="5" mb="5">
          <Heading color={"gray.600"}>Pagar </Heading>

          <Card title="Digite o numero do boleto">
            <ChakraInput
              type={"number"}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              placeholder="Código de barras"
              mt={4}
              focusBorderColor="green.500"
            ></ChakraInput>
            <Flex w="100%" mt="5" justifyContent={"center"}>
              <Button
                colorScheme={"whatsapp"}
                onClick={() => {
                  setStep1(true);
                }}
                isDisabled={value === "" ? true : false}
              >
                Enviar
              </Button>
            </Flex>
            {step1 && (
              <Flex justify={"left"} alignItems={"start"} direction="column" gap="2">
             
                  <Text>
                    <strong>Beneficiário: </strong> xxxxxxx
                  </Text>
                  <Text>
                    <strong>CNPJ: </strong> xx.xxx.xxx/0001-xx
                  </Text>
                  <Text>
                    <strong>Endereço: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iste
                    99
                  </Text>
                  <Text>
                    <strong>Valor: </strong> R$ 1000,000 
                  </Text>

                  <Flex justifyContent={"center"} w="100%">
                    <Button colorScheme={"whatsapp"} onClick={onOpen} isDisabled={value === "" ? true : false}>
                      Confirmar
                    </Button>
                  </Flex>
             
              </Flex>
            )}
          </Card>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Comfirmação</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>
                  <strong>Beneficiário: </strong> xxxxxxx
                </Text>
                <Text>
                  <strong>CNPJ: </strong> xx.xxx.xxx/0001-xx
                </Text>
                <Text>
                  <strong>Endereço: </strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iste 99
                </Text>
                <Text>
                  <strong>Valor: </strong> R$ 1000,000 
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

export default Billet_payment;
