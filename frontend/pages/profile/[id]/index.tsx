import React, { useCallback, useEffect, useState } from 'react'
import { NextPage } from "next"
import MainContainer from "../../../components/containers/MainContainer"
import Loading from "../../../components/UI/Loading"
import Card from '../../../components/UI/Card'
import { UserService } from '../../../services/UserService'
import { useRouter } from 'next/router'
import { IUser } from '../../../@types/interfaces'
import { Flex, Heading } from '@chakra-ui/react'
import useAuthContext from '../../../context/AuthContext'



const Index: NextPage = () => {
const route = useRouter()
const id = route.query.id as string
const [data, setData] = useState<{data: IUser}>({} as {data: IUser})
const [isLoading, setIsLoading] = useState<boolean>(true)
const {refreshProfile} = useAuthContext()

 const getlinks = useCallback(() => {
  UserService().getUser(id).then((resp) => {
    setData(resp.data)
    setIsLoading(false)
  }).catch(e => {console.log(e); setIsLoading(false)})
  }, [id])

  useEffect(() => {
    if(id){
      getlinks()
    }

  }, [getlinks, id, refreshProfile])



  return (
    <>
      <MainContainer>
        {isLoading ? (
          <Loading></Loading>
        ) : (
          <Flex flexDirection={"column"} gap="5" alignItems={"center"} w="100%"> { data.data?.link ?  data.data.link.map((item)=> (<Card title={item.title} url={item.href} id={id} idLink={item._id}></Card>) ): <Heading w="100%" textAlign="center">Nenhum Link Cadastrado... </Heading>} </Flex>
   
        )}
      </MainContainer>
    </>
  );
}

export default Index