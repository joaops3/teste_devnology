import React, { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Heading,
  Icon,
  useToast,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import { BsPencilSquare } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { UserService } from "../../services/UserService";
import Link from "next/link";
import useAuthContext from "../../context/AuthContext";

interface Props {
  title: string;
  id: string;
  idLink: string;
  url: string;
  type?: "personal" | "outside";
}
const Card: React.FC<Props> = ({
  title,
  id,
  idLink,
  url,
  type = "personal",
}) => {
  const { handleRefreshPage } = useAuthContext();
  const [disabled, setDisabled] = useState<boolean>(false);
  const toast = useToast();
  const handleDelete = () => {
    setDisabled(true);
    UserService()
      .removeLinkUser(id, idLink)
      .then((resp) => {
        handleRefreshPage();
        toast({
          title: "Sucesso",
          description: "Item deletado com sucesso",
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((e) => {
        toast({
          title: "Erro",
          description: "Erro ao deletar",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
        setDisabled(false);
      });
  };
  return (
    <>
      <Flex
        as={Button}
        disabled={disabled}
        alignItems={"center"}
        maxWidth={768}
        minHeight="70px"
        w={["300px", "768px"]}
        p="2"
        bg={"gray.100"}
        borderRadius="8"
        boxShadow={"0 0 4px RGBA(0, 0, 0, 0.16)"}
        mx="auto"
      >
        <ChakraLink
          as="h2"
          flex={1}
          href={url}
          fontWeight={"semibold"}
          textAlign={"start"}
          textTransform="capitalize"
          fontSize="20px"
          mt="2"
          _hover={{ textDecoration: "none" }}
        >
          {title}
        </ChakraLink>{" "}
        {type === "personal" && (
          <Flex alignItems={"center"} gap="5">
            <Link href={`/profile/${id}/link/${idLink}`}>
              <Icon
                as={BsPencilSquare}
                fontSize={25}
                _hover={{ color: "primary.normal" }}
                cursor="pointer"
              />
            </Link>
            <Icon
              as={AiOutlineDelete}
              _hover={{ color: "primary.normal" }}
              cursor="pointer"
              fontSize={25}
              onClick={() => {
                handleDelete();
              }}
            />
          </Flex>
        )}
      </Flex>
    </>
  );
};

export default Card;
