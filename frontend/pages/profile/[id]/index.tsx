import React, { useState } from 'react'
import { NextPage } from "next"
import {Flex, SimpleGrid, Box, Text, Heading, Progress, Button, Divider} from "@chakra-ui/react"
import dynamic from "next/dynamic"
import MainContainer from "../../../components/containers/MainContainer"
import Loading from "../../../components/UI/Loading"





const Index: NextPage = () => {

const [isLoading, setLoading] = useState<boolean>(false)




  return (
    <>
      <MainContainer>
        {isLoading ? (
          <Loading></Loading>
        ) : (
         <div>Ola</div>
        )}
      </MainContainer>
    </>
  );
}

export default Index