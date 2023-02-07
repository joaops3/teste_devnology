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
import { IdentificationCard, At, DeviceMobile, Gear } from "phosphor-react";
import SelectedInput from "../../../../components/UI/SelectedInput";
import CurrencyInput from "../../../../components/UI/CurrencyInput";

const Billet_creation = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [step1, setStep1] = useState<boolean>(false);
  const [step2, setStep2] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [amouth, setAmouth] = useState<string>("");
  const [selectedInput, setSelectedInput] = useState<"EMAIL" | "CPF" | "MOBILE">("CPF");

  return (
    <>
      <MainContainer>
        <Flex direction="column" mx="auto" alignItems={"center"} gap="5" mb="5">
          <Heading color={"gray.600"}>To do</Heading>

          <Gear size={300} />
        </Flex>
      </MainContainer>
    </>
  );
};

export default Billet_creation;
