import React, { useState } from "react";
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
  Box,
  useBreakpointValue,
  VStack,
  MenuItem as ChakraMenuItem,
  useDisclosure,
} from "@chakra-ui/react";

import { BiMenu} from "react-icons/bi";
import {BsEyeSlash, BsEye } from "react-icons/bs";

import MenuItem from "./MenuItem";
import HeaderLinks from "./HeaderLinks";
import DrawerBar from "./Drawer";
import Link from "next/link";

const Header: React.FC = () => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  const [showBalance, setShowBalance] = useState<boolean>(true);
  const { isOpen, onClose, onOpen, onToggle, isControlled, getButtonProps, getDisclosureProps } = useDisclosure();
  return (
    <>
      <Flex
        as={"header"}
        w="100%"
        bgColor={"gray.100"}
        justifyContent="center"
        align={"center"}
        boxShadow="0 2rem 2rem 0 #C6F6D5CC"
        px={{ base: "3", md: 0 }}
        mb="14"
        // position={"fixed"}
      >
        <Flex w={{ base: "100%", md: "100%" }} maxWidth={1420} justify="space-between" align={"center"} py="4">
          <HStack>
            <Link href={`/profile/1`}>
              <Image src="/logo.svg" width={["40px", "100px"]} mr="2" _hover={{ cursor: "pointer" }}></Image>
            </Link>
            {isMobile ? <BiMenu onClick={() => onOpen()} size="30"></BiMenu> : <HeaderLinks />}
          </HStack>
          <HStack spacing={5}>
            <VStack spacing={1}>
              <Text fontSize={{ base: "10", md: "15" }}>Nome Sobrenome</Text>

              <HStack display={"flex"} alignItems="center" justifyContent={"center"}>
                <Text fontSize={{ base: "10", md: "15" }} minWidth={"77px"}>
                  {showBalance ? "R$ 1000.00" : ""}
                </Text>
                { showBalance ? <BsEye size={25} style={{ cursor: "pointer" }} onClick={() => setShowBalance(!showBalance)}></BsEye> : <BsEyeSlash size={25} style={{ cursor: "pointer" }} onClick={() => setShowBalance(!showBalance)}></BsEyeSlash> }
              </HStack>
            </VStack>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<Avatar name="Nome Sobrenome"></Avatar>}
                variant="none"
              />
              <MenuList bg="gray.100" borderColor={"gray.100"}>
                <Box p="3">
                  <Text>Conta: xxxxx-xx</Text>
                </Box>
                <MenuItem href={`/profile/1/user/data`}>Dados Cadastrais</MenuItem>

                <MenuItem href="/">Logout</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Flex>
      </Flex>
      <DrawerBar
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
        onToggle={onToggle}
        isControlled={isControlled}
        getButtonProps={getButtonProps}
        getDisclosureProps={getDisclosureProps}
      ></DrawerBar>
    </>
  );
};

export default Header;
