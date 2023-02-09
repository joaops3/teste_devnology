import {
  Flex,
  useDisclosure,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import MainContainer from "../../../../components/containers/MainContainer";
import { Gear } from "phosphor-react";
import FormLink from "../../../../components/form/FormLink";

const LinkCreate = () => {
  
  


  return (
    <>
      <MainContainer>
        <Flex direction="column" mx="auto" alignItems={"center"} gap="5" mb="5">
          <Heading color={"gray.600"}>Salvar novo Link</Heading>

         <FormLink type="create" data={{}}></FormLink>
        </Flex>
      </MainContainer>
    </>
  );
};

export default LinkCreate;
