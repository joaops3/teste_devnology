import { Flex, useDisclosure, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MainContainer from "../../../../components/containers/MainContainer";
import FormLink from "../../../../components/form/FormLink";
import LinkService from "../../../../services/LinkService";
import { useRouter } from "next/dist/client/router";
import Loading from "../../../../components/UI/Loading";
import { ILink } from "../../../../@types/interfaces";
import useProtected from "../../../../services/useProtected";

const Edit = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [step1, setStep1] = useState<boolean>(false);
  const [data, setData] = useState<ILink>({} as ILink);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const route = useRouter();
  const id = route.query.linkid as string;

  const getLinkForUpdate = () => {
    LinkService()
      .getOne(id)
      .then((resp) => {
        setData(resp.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useProtected()
  useEffect(() => {
    getLinkForUpdate();
  }, []);

  return (
    <>
      <MainContainer>
        {isLoading ? (
          <Loading></Loading>
        ) : (
          <Flex
            direction="column"
            mx="auto"
            alignItems={"center"}
            gap="5"
            mb="5"
          >
            <Heading color={"gray.600"}>Editar Link</Heading>

            <FormLink type="edit" data={data}></FormLink>
          </Flex>
        )}
      </MainContainer>
    </>
  );
};

export default Edit;
