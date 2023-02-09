import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, useToast } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import React, { useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { ILink, ILinkForm } from '../../@types/interfaces'
import LinkService from '../../services/LinkService'
import { UserService } from '../../services/UserService'

interface Props {
    type: 'edit' | 'create'
    data?: ILink
}

interface ILinkFormData {
    data: ILinkForm
}

const FormLink = ({type, data: defaultData}: Props) => {
const route = useRouter()
const id = route.query.id as string
const toast = useToast()
const [loading, setLoading] = useState<boolean>(false)
const [buttonLoading, setButtonLoading] = useState<boolean>(false)
const {handleSubmit, control, reset, setValue, getValues, formState: {errors}} = useForm<ILinkFormData>({defaultValues: {} as ILinkFormData })

const onSubmit: SubmitHandler<ILinkFormData> =(data) => {
    setButtonLoading(true)
    if(type ==="create") {
        UserService().addLinkToUser(id, {...data.data}).then((resp) => {
            toast({
                title: 'Sucesso',
                description: "item cadastrado com sucesso",
                status: 'success',
                duration: 5000,
                isClosable: true,
              })
              setValue('data.href', "")
              setValue('data.title', "")
              setButtonLoading(false)
        }).catch((e) =>{
            toast({
                title: 'Erro',
                description: 'Error ao criar',
                status: 'error',
                duration: 5000,
                isClosable: true,
              })
            setButtonLoading(false)
        }
        )
    }else if (type === 'edit'){
      LinkService().updateLink(defaultData?._id!, {...data.data}).then((resp) => {
        toast({
            title: 'Sucesso',
            description: "item Editado com sucesso",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
          setButtonLoading(false)
    }).catch((e) =>{
        toast({
            title: 'Erro',
            description: 'Error ao Editar',
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        setButtonLoading(false)
    }
    )
    }

}

const handleUpdateFields = () => {
  if(type !== "edit") return
    setValue('data.href', defaultData!.href)
    setValue('data.title', defaultData!.title)
    
}
    useEffect(()=> {
        handleUpdateFields()
    },[])
  return (
   <Flex as={'form'} flexDirection={'column'} onSubmit={handleSubmit(onSubmit)} bg={'gray.100'} px='3' py='4' boxShadow={'0 0 5px 5px #0000'} width={['300px', '500px']} gap='3'>
    <FormControl isInvalid={!!errors.data?.title}>
    <FormLabel>Titulo</FormLabel>
    <Controller name={'data.title'} control={control} defaultValue={getValues('data.title')}
    rules={{required: "titulo é obrigatório", maxLength: 100}} 
    render={ ({field})=> ( <ChakraInput
        id="data.title"
        size={"md"}
        type="text"
        bg="white"
        placeholder='Titulo do artigo'
        focusBorderColor="primary.normal"
        {...field}
      />)}
    />
    <FormErrorMessage>{errors.data?.href?.message}</FormErrorMessage>
    </FormControl>
    <FormControl isInvalid={!!errors.data?.href}>
    <FormLabel>Url</FormLabel>
    <Controller name={'data.href'} control={control} defaultValue={getValues('data.href')}
    rules={{required: "a url é obrigatório", maxLength: 100}} 
    render={ ({field})=> ( 
      <ChakraInput
        id="data.href"
        size={"md"}
        type="url"
        bg="white"
        placeholder='www.google.com'
        focusBorderColor="primary.normal"
        {...field}
      />)}
    />
    <FormErrorMessage>{errors.data?.href?.message}</FormErrorMessage>
    </FormControl>
    <Box textAlign={'center'}>
    <Button isLoading={buttonLoading} as={"button"} colorScheme={"yellow"} type="submit">
    Salvar
    </Button>
    </Box>
   
   </Flex>
  )
}

export default FormLink