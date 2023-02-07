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
} from "@chakra-ui/react";
import { BiChevronDown, BiPhone } from "react-icons/bi";
import MenuItem from "./MenuItem";

interface Props {}

const HeaderLinks = forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BiChevronDown />}
          variant={"link"}
          color={"gray.800"}
          mx="10"
          borderRadius={"none"}
          _hover={{ textDecoration: "none" }}
          p="3"
        >
          Operações
        </MenuButton>
        <MenuList bg="gray.100" borderColor={"gray.100"}>
          <MenuItem href={`/profile/1/transfer`}>Tranferência</MenuItem>
          <MenuItem href={`/profile/1/pix/pix_transfer`}>Pagamento Pix</MenuItem>
          <MenuItem href={`/profile/1/billet/billet_payment`}>Pagar Boleto</MenuItem>
        </MenuList>
      </Menu>

      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BiChevronDown />}
          variant={"link"}
          color={"gray.800"}
          mx="10"
          borderRadius={"none"}
          _hover={{ textDecoration: "none" }}
          p="3"
        >
          Saldo
        </MenuButton>
        <MenuList bg="gray.100" borderColor={"gray.100"}>
          <MenuItem href={`/profile/1/balance/statement`}>Extrato</MenuItem>

          <MenuItem href={`/profile/1/pix/pix_register`}>Cadastrar Chave Pix</MenuItem>

          <MenuItem href={`/profile/1/billet/billet_creation`}>Gerar Boleto</MenuItem>
        </MenuList>
      </Menu>
      <Menu>
        <MenuButton
          as={Button}
          leftIcon={<BiPhone></BiPhone>}
          rightIcon={<BiChevronDown />}
          variant={"link"}
          color={"gray.800"}
          mx="10"
          borderRadius={"none"}
          _hover={{ textDecoration: "none" }}
          p="3"
        >
          Suporte
        </MenuButton>
        <MenuList bg="gray.100" borderColor={"gray.100"}>
          <MenuItem href={`/profile/1/support/whatsapp`}>Whatsapp</MenuItem>

          <MenuItem href={`/profile/1/support/phone`}>Telefone</MenuItem>
        </MenuList>
      </Menu>
    </>
  );
});
HeaderLinks.displayName = "HeaderLinks"
export default HeaderLinks;
