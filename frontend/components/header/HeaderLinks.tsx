import React, { forwardRef } from "react";
import {
  Flex,
  HStack,
  Text,
  Icon,
  Avatar,
  Button,
  Image,
  Menu,
  IconButton,
  MenuButton,
  MenuList,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import { BiChevronDown, BiPencil } from "react-icons/bi";
import { AiOutlineStar, AiOutlineUnorderedList } from "react-icons/ai";
import MenuItem from "./MenuItem";

interface Props {
  id: string;
}

const HeaderLinks = forwardRef<HTMLDivElement, Props>(({ id }, ref) => {
  return (
    <>
      <Link href={`/profile/${id}/`}>
        <Text
          variant={"link"}
          fontWeight={"bold"}
          color={"gray.800"}
          mx="2"
          borderRadius={"none"}
          _hover={{ textDecoration: "none" }}
          p="3"
          display={"flex"}
          gap="2"
          alignItems={"center"}
        >
          <AiOutlineUnorderedList></AiOutlineUnorderedList>
          Meus Salvos
        </Text>
      </Link>

      <Link href={`/profile/${id}/link/`}>
        <Text
          variant={"link"}
          fontWeight={"bold"}
          color={"gray.800"}
          mx="2"
          borderRadius={"none"}
          _hover={{ textDecoration: "none" }}
          p="3"
          display={"flex"}
          gap="2"
          alignItems={"center"}
        >
          <BiPencil></BiPencil>
          Cadastrar
        </Text>
      </Link>

      <Menu>
        <MenuButton
          as={Button}
          leftIcon={<AiOutlineStar></AiOutlineStar>}
          rightIcon={<BiChevronDown />}
          variant={"link"}
          color={"gray.800"}
          mx={[0, 10]}
          borderRadius={"none"}
          _hover={{ textDecoration: "none" }}
          p="3"
        >
          Favoritos
        </MenuButton>
        <MenuList bg="gray.100" borderColor={"gray.100"}>
          <MenuItem href={`/profile/${id}/link/devblog`}>Devblog</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
});
HeaderLinks.displayName = "HeaderLinks";
export default HeaderLinks;
