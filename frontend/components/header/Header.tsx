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

import { BiMenu } from "react-icons/bi";
import { BsEyeSlash, BsEye } from "react-icons/bs";

import MenuItem from "./MenuItem";
import HeaderLinks from "./HeaderLinks";
import DrawerBar from "./Drawer";
import Link from "next/link";
import useAuthContext from "../../context/AuthContext";
import Logo from "../UI/Logo";

const Header: React.FC = () => {
  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  const [showBalance, setShowBalance] = useState<boolean>(true);
  const {
    isOpen,
    onClose,
    onOpen,
    onToggle,
    isControlled,
    getButtonProps,
    getDisclosureProps,
  } = useDisclosure();

  const { user, logout } = useAuthContext();
  return (
    <>
      <Flex
        as={"header"}
        w="100%"
        bgColor={"gray.100"}
        justifyContent="center"
        align={"center"}
        boxShadow="0 2rem 2rem 0 #FEFCBFCC"
        px={{ base: "3", md: 3 }}
        mb="14"

        // position={"fixed"}
      >
        <Flex
          w={{ base: "100%", md: "100%" }}
          maxWidth={1420}
          justify="space-between"
          align={"center"}
          py="4"
        >
          <HStack>
            <Link href={`/profile/${user.id}`}>
              <Logo></Logo>
            </Link>
            {isMobile ? (
              <BiMenu onClick={() => onOpen()} size="30"></BiMenu>
            ) : (
              <HeaderLinks id={user.id} />
            )}
          </HStack>
          <HStack spacing={5}>
            <VStack spacing={1}>
              <Text fontSize={{ base: "10", md: "15" }}>
                {user.name ?? " "}
              </Text>
            </VStack>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<Avatar bg="yellow.400" name={user.name ?? ""}></Avatar>}
                variant="none"
              />
              <MenuList bg="gray.100" borderColor={"gray.100"}>
                {/* <MenuItem href={`/profile/${user.id}/user/data`}>Dados Cadastrais</MenuItem> */}

                <ChakraMenuItem
                  _hover={{ bg: "yellow.200" }}
                  as={"button"}
                  onClick={() => {
                    logout();
                  }}
                >
                  Logout
                </ChakraMenuItem>
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
