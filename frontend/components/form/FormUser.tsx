import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  Flex,
  VStack,
  Input as ChakraInput,
  InputGroup,
  FormLabel,
  FormControl,
  InputLeftElement,
  FormHelperText,
  Button,
  FormErrorMessage,
  Image,
  Box,
  SimpleGrid,
  RadioGroup,
  Radio,
  Stack,
  PopoverTrigger,
  Popover,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  UnorderedList,
  ListItem,
  Grid,
  GridItem,
  HStack,
  Select,
  Heading,
  useToast
} from "@chakra-ui/react";
import { IUserForm } from "../../@types/interfaces";
import UF from "../../utils/UF.json";
import InputMask from "react-input-mask"
import { UserService } from "../../services/UserService";
import { useRouter } from "next/dist/client/router";

interface Props {
  type?: "edit | register";
}

interface IUserFormData {
  data: IUserForm;
}

const FormUser = ({ type = "register" }) => {
  const [passwordConfirmationError, setPasswordConfirmationError] = useState<boolean>(false);
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const route = useRouter()
  const toast = useToast()
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<IUserFormData>({
    defaultValues: {} as IUserFormData,
  });

  const onSubmit: SubmitHandler<IUserFormData> = (data) => {
    if(data.data.password !== passwordConfirmation){
        setPasswordConfirmationError(true)
        return
    }
    setLoading(true)

    UserService().signin({...data.data}).then((resp) => {
      toast({
        title: 'Sucesso',
        description: "Conta criada com sucesso",
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      
      setLoading(false)
      route.push("/")
      
    }).catch((e)=> {
      toast({
        title: 'Erro',
        description: e.response.data.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      console.log()
      setLoading(false)
    })
  };

 
  return (
    <>
      <Flex
        as={"form"}
        w="100%"
        maxWidth={["360px", "1420px"]}
        direction={"column"}
        borderRadius="8"
        onSubmit={handleSubmit(onSubmit)}
        mb="3"
        px="2"
      >
        <Heading my="2">{type === "register" ? "CADASTRAR" : "EDITAR"}</Heading>
        <SimpleGrid
          column={2}
          mt={["0px", "0px"]}
          minChildWidth={["none", "500px"]}
          spacingX={2}
          spacingY={2}
          bg={"gray.100"}
          boxShadow={"0 0 4px RGBA(0, 0, 0, 0.16)"}
          p={5}
          px="8"
          borderRadius="8"
        >
          <FormControl isInvalid={errors.data?.name ? true : false}>
            <FormLabel>Primeiro Nome</FormLabel>
            <Controller
              name="data.name"
              control={control}
              defaultValue={getValues("data.name")}
              rules={{ required: "O primeiro nome é obrigatório", maxLength: 50 }}
              render={({ field }) => (
                <ChakraInput
                  id="data.name"
                  size={"md"}
                  type="text"
                  bg="white"
                  focusBorderColor="primary.normal"
                  {...field}
                />
              )}
            />
            <FormErrorMessage>{errors.data?.name?.message}</FormErrorMessage>
          </FormControl>
         
          <FormControl isInvalid={errors.data?.email ? true : false}>
            <FormLabel>Email</FormLabel>
            <Controller
              name="data.email"
              control={control}
              defaultValue={getValues("data.email")}
              rules={{ required: "O Email é obrigatório", maxLength: 50 }}
              render={({ field }) => (
                <ChakraInput
                  id="data.email"
                  size={"md"}
                  bg="white"
                  type="email"
                  focusBorderColor="primary.normal"
                  {...field}
                />
              )}
            />
            <FormErrorMessage>{errors.data?.email?.message}</FormErrorMessage>
          </FormControl>
          {type === "edit" ? (
            <></>
          ) : (
            <>
              <FormControl isInvalid={errors.data?.password ? true : false}>
                <FormLabel>Senha</FormLabel>
                <Controller
                  name="data.password"
                  control={control}
                  defaultValue={getValues("data.password")}
                  rules={{ required: "A senha é obrigatório", maxLength: 40 }}
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger>
                        <ChakraInput
                          id="data.password"
                          size={"md"}
                          bg="white"
                          type="password"
                          focusBorderColor="primary.normal"
                          {...field}
                        />
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader>Requisitos</PopoverHeader>
                        <PopoverBody mx="auto">
                          <UnorderedList>
                            <ListItem>A senha deve conter 1 Letra Maiuscula</ListItem>
                            <ListItem>A senha deve conter 1 Letra Minuscula</ListItem>
                            <ListItem>A senha deve conter 1 numero</ListItem>
                            <ListItem>A senha deve conter 1 caractere especial</ListItem>
                            <ListItem>A senha deve conter min 8 e max 20 caracteres</ListItem>
                          </UnorderedList>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  )}
                />
                <FormErrorMessage>{errors.data?.password?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={passwordConfirmationError}>
                <FormLabel>Confirmação de senha</FormLabel>

                <ChakraInput size={"md"} bg="white" type="password" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} focusBorderColor="primary.normal" />

              {passwordConfirmationError && ( <FormErrorMessage>As senhas não conferem</FormErrorMessage>)}
              </FormControl>
            </>
          )}
        </SimpleGrid>

        <Flex justify={"flex-end"} mt="5">
          <Button isLoading={loading} as={"button"} colorScheme={"yellow"} type="submit">
            Cadastrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default FormUser;
