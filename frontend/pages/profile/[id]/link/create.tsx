import { Flex, useDisclosure, Heading } from "@chakra-ui/react";
import React from "react";
import MainContainer from "../../../../components/containers/MainContainer";
import { Gear } from "phosphor-react";
import FormLink from "../../../../components/form/FormLink";
import { ILink } from "../../../../@types/interfaces";
import useProtected from "../../../../services/useProtected";

const LinkCreate = () => {
  useProtected()
  return (
    <>
      <MainContainer>
        <Flex direction="column" mx="auto" alignItems={"center"} gap="5" mb="5">
          <Heading color={"gray.600"}>Salvar novo Link</Heading>

          <FormLink type="create" data={{} as ILink}></FormLink>
        </Flex>
      </MainContainer>
    </>
  );
};

export default LinkCreate;
