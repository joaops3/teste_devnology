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
  Heading
} from "@chakra-ui/react";
import { IAdress, IUser } from "../../interfaces/interfaces";
import UF from "../../utils/UF.json";
import InputMask from "react-input-mask"

interface Props {
  type?: "edit | register";
}

interface IUserData {
  users: IUser;
  address: IAdress;
}

const FormUser = ({ type = "register" }) => {
  const {
    handleSubmit,
    control,
    reset,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<IUserData>({
    defaultValues: {} as IUserData,
  });

  const onSubmit: SubmitHandler<IUserData> = (data) => {};

  const [passwordConfirmationError, setPasswordConfirmationError] = useState<boolean>(false);
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
          <FormControl isInvalid={errors.users?.first_name ? true : false}>
            <FormLabel>Primeiro Nome</FormLabel>
            <Controller
              name="users.first_name"
              control={control}
              defaultValue={getValues("users.first_name")}
              rules={{ required: "O primeiro nome é obrigatório", maxLength: 20 }}
              render={({ field }) => (
                <ChakraInput
                  id="users.first_name"
                  size={"md"}
                  type="email"
                  bg="white"
                  focusBorderColor="green.300"
                  {...field}
                />
              )}
            />
            <FormErrorMessage>{errors.users?.first_name?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.users?.last_name ? true : false}>
            <FormLabel>Sobrenome</FormLabel>
            <Controller
              name="users.last_name"
              control={control}
              defaultValue={getValues("users.last_name")}
              rules={{ required: "O sobrenome é obrigatório", maxLength: 20 }}
              render={({ field }) => (
                <ChakraInput
                  id="users.last_name"
                  size={"md"}
                  type="email"
                  bg="white"
                  focusBorderColor="green.300"
                  {...field}
                />
              )}
            />
            <FormErrorMessage>{errors.users?.last_name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors.users?.date_of_birth ? true : false}>
            <FormLabel>Nascimento</FormLabel>
            <Controller
              name="users.date_of_birth"
              control={control}
              defaultValue={getValues("users.date_of_birth")}
              rules={{ required: "A data de nascimento é obrigatório", maxLength: 20 }}
              render={({ field }) => (
                <ChakraInput
                  id="users.date_of_birth"
                  size={"md"}
                  type="date"
                  bg="white"
                  focusBorderColor="green.300"
                  {...field}
                />
              )}
            />
            <FormErrorMessage>{errors.users?.date_of_birth?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.users?.mothers_name ? true : false}>
            <FormLabel>Nome da mãe</FormLabel>
            <Controller
              name="users.mothers_name"
              control={control}
              defaultValue={getValues("users.mothers_name")}
              rules={{ required: "O nome da mãe é obrigatório", maxLength: 20 }}
              render={({ field }) => (
                <ChakraInput id="users.mothers_name" size={"md"} bg="white" focusBorderColor="green.300" {...field} />
              )}
            />
            <FormErrorMessage>{errors.users?.mothers_name?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.users?.genre ? true : false}>
            <FormLabel>Genero</FormLabel>
            <Controller
              name="users.genre"
              control={control}
              defaultValue={getValues("users.genre")}
              rules={{ required: "O nome da genero é obrigatório", maxLength: 20 }}
              render={({ field }) => (
                <RadioGroup defaultValue="MALE">
                  <Stack spacing={5} direction="row">
                    <Radio colorScheme="whatsapp" bg="white" value="MALE">
                      Masculino
                    </Radio>
                    <Radio colorScheme="whatsapp" bg="white" value="FEMALE">
                      Feminino
                    </Radio>
                  </Stack>
                </RadioGroup>
              )}
            />
            <FormErrorMessage>{errors.users?.genre?.message}</FormErrorMessage>
          </FormControl>

          <Stack> </Stack>
        {  type ==="edit" ? <div></div> :  <FormControl isInvalid={errors.users?.document ? true : false}>
              <FormLabel>CPF</FormLabel>
              <Controller
                name="users.document"
                control={control}
                defaultValue={getValues("users.document")}
                rules={{ required: "O CPF é obrigatório", maxLength: 15 }}
                render={({ field }) => (
                  <ChakraInput as={InputMask}
                    id="users.document"
                    mask="999.999.999-99"
                    maskChar={null}
                    size={"md"}
                    bg="white"
                    focusBorderColor="green.300"
                    {...field}
                  />
                )}
              />
              <FormErrorMessage>{errors.users?.document?.message}</FormErrorMessage>
            </FormControl>}
          <Stack></Stack>
          <FormControl isInvalid={errors.users?.mobile ? true : false}>
            <FormLabel>Celular</FormLabel>
            <Controller
              name="users.mobile"
              control={control}
              defaultValue={getValues("users.mobile")}
              rules={{ required: "O Celular é obrigatório", maxLength: 15 }}
              render={({ field }) => (
                <ChakraInput
                  id="users.mobile"
                  type="number"
                  size={"md"}
                  bg="white"
                  focusBorderColor="green.300"
                  {...field}
                />
              )}
            />
            <FormErrorMessage>{errors.users?.mobile?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.users?.phone ? true : false}>
            <FormLabel>Telefone</FormLabel>
            <Controller
              name="users.phone"
              control={control}
              defaultValue={getValues("users.phone")}
              //rules={{ required: "O Telefone é obrigatório", maxLength: 15 }}
              render={({ field }) => (
                <ChakraInput
                  id="users.phone"
                  type="number"
                  size={"md"}
                  bg="white"
                  focusBorderColor="green.300"
                  {...field}
                />
              )}
            />
            <FormErrorMessage>{errors.users?.phone?.message}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={errors.users?.email ? true : false}>
            <FormLabel>Email</FormLabel>
            <Controller
              name="users.email"
              control={control}
              defaultValue={getValues("users.email")}
              rules={{ required: "O Email é obrigatório", maxLength: 40 }}
              render={({ field }) => (
                <ChakraInput
                  id="users.email"
                  size={"md"}
                  bg="white"
                  type="email"
                  focusBorderColor="green.300"
                  {...field}
                />
              )}
            />
            <FormErrorMessage>{errors.users?.email?.message}</FormErrorMessage>
          </FormControl>
          <Stack></Stack>
          {type === "edit" ? (
            <></>
          ) : (
            <>
              <FormControl isInvalid={errors.users?.password ? true : false}>
                <FormLabel>Senha</FormLabel>
                <Controller
                  name="users.password"
                  control={control}
                  defaultValue={getValues("users.password")}
                  rules={{ required: "A senha é obrigatório", maxLength: 40 }}
                  render={({ field }) => (
                    <Popover>
                      <PopoverTrigger>
                        <ChakraInput
                          id="users.password"
                          size={"md"}
                          bg="white"
                          type="password"
                          focusBorderColor="green.300"
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
                <FormErrorMessage>{errors.users?.password?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={passwordConfirmationError}>
                <FormLabel>Comfirmação de senha</FormLabel>

                <ChakraInput size={"md"} bg="white" type="email" focusBorderColor="green.300" />

                <FormErrorMessage>As senhas não conferem</FormErrorMessage>
              </FormControl>
            </>
          )}
        </SimpleGrid>

        <Box bg={"gray.100"} p={5} mt="8" px="8" borderRadius="8" boxShadow={"0 0 4px RGBA(0, 0, 0, 0.16)"}>
          <SimpleGrid minChildWidth={"300px"} spacing={2}>
            <FormControl isInvalid={errors.address?.street ? true : false}>
              <FormLabel>Rua</FormLabel>
              <Controller
                name="address.street"
                control={control}
                defaultValue={getValues("address.street")}
                rules={{ required: "A rua é obrigatório", maxLength: 50 }}
                render={({ field }) => (
                  <ChakraInput
                    id="address.street"
                    size={"md"}
                    bg="white"
                    placeholder="Rua"
                    focusBorderColor="green.300"
                    {...field}
                  />
                )}
              />
              <FormErrorMessage>{errors.address?.street?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.address?.neighborhood ? true : false}>
              <FormLabel>bairro</FormLabel>
              <Controller
                name="address.neighborhood"
                control={control}
                defaultValue={getValues("address.neighborhood")}
                rules={{ required: "O bairro é obrigatório", maxLength: 40 }}
                render={({ field }) => (
                  <ChakraInput
                    id="address.neighborhood"
                    size={"md"}
                    bg="white"
                    placeholder="Bairro"
                    focusBorderColor="green.300"
                    {...field}
                  />
                )}
              />
              <FormErrorMessage>{errors.address?.neighborhood?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.address?.number ? true : false}>
              <FormLabel>Numero</FormLabel>
              <Controller
                name="address.number"
                control={control}
                defaultValue={getValues("address.number")}
                rules={{ required: "O numero é obrigatório", maxLength: 15 }}
                render={({ field }) => (
                  <ChakraInput
                    id="address.number"
                    size={"md"}
                    bg="white"
                    placeholder="00"
                    focusBorderColor="green.300"
                    {...field}
                  />
                )}
              />
              <FormErrorMessage>{errors.address?.number?.message}</FormErrorMessage>
            </FormControl>
          </SimpleGrid>
          <SimpleGrid minChildWidth={"300px"} spacing={2} mt="2">
            <FormControl isInvalid={errors.address?.city ? true : false}>
              <FormLabel>Cidade</FormLabel>
              <Controller
                name="address.city"
                control={control}
                defaultValue={getValues("address.city")}
                rules={{ required: "A cidade é obrigatório", maxLength: 30 }}
                render={({ field }) => (
                  <ChakraInput
                    id="address.city"
                    size={"md"}
                    bg="white"
                    placeholder="Cidade"
                    focusBorderColor="green.300"
                    {...field}
                  />
                )}
              />
              <FormErrorMessage>{errors.address?.state?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.address?.state ? true : false}>
              <FormLabel>Estado</FormLabel>
              <Controller
                name="address.state"
                control={control}
                defaultValue={getValues("address.state")}
                rules={{ required: "O estado é obrigatório", maxLength: 30 }}
                render={({ field }) => (
                  <Select placeholder="Selecione" id="address.state" focusBorderColor="green.300" bg="white" {...field}>
                    {UF.map((state, key) => {
                      return <option key={key} value={state.uf}>{state.name}</option>;
                    })}
                  </Select>
                )}
              />
              <FormErrorMessage>{errors.address?.zip_code?.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.address?.zip_code ? true : false}>
              <FormLabel>CEP</FormLabel>
              <Controller
                name="address.zip_code"
                control={control}
                defaultValue={getValues("address.zip_code")}
                rules={{ required: "O Cep é obrigatório", maxLength: 15 }}
                render={({ field }) => (
                  <ChakraInput
                    id="address.zip_code"
                    type={"number"}
                    size={"md"}
                    bg="white"
                    placeholder="00000-000"
                    focusBorderColor="green.300"
                    {...field}
                  />
                )}
              />
              <FormErrorMessage>{errors.address?.zip_code?.message}</FormErrorMessage>
            </FormControl>
          </SimpleGrid>
        </Box>

        <Flex justify={"flex-end"} mt="5">
          <Button as={"button"} colorScheme={"whatsapp"} type="submit">
            Cadastrar
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default FormUser;
