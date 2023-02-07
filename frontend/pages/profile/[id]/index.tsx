import React, { useState } from 'react'
import { NextPage } from "next"
import {Flex, SimpleGrid, Box, Text, Heading, Progress, Button, Divider} from "@chakra-ui/react"
import {options} from "../../../utils/chartConfig"
import dynamic from "next/dynamic"
import MainContainer from "../../../components/UI/MainContainer"
import Loading from "../../../components/UI/Loading"


const Chart = dynamic(()=> import("react-apexcharts"), {ssr: false})


const Index: NextPage = () => {
const [chartConfig, setChartConfig] = useState(options)
const [isLoading, setLoading] = useState<boolean>(false)

const series = [{ name: "series1", data: [31, 70, 50, 100, 70, 50, 90] }];
  return (
    <>
      <MainContainer>
        {isLoading ? (
          <Loading></Loading>
        ) : (
          <SimpleGrid flex="1" minChildWidth={320} spacing="2" mx={{ base: "auto", mx: "0" }}>
            <Box bg="gray.100" borderRadius={"8"} px="5" py="5" boxShadow={"0 0 4px RGBA(0, 0, 0, 0.16)"}>
              <Heading as={"h2"}>Fatura Atual</Heading>
              <Flex mt="10" w="100%" justifyContent={"space-between"}>
                <Text fontSize={15}>R$ 500.00</Text>
                <Text fontSize={15}>R$ 1500.00</Text>
              </Flex>
              <Progress value={80} hasStripe colorScheme="whatsapp"></Progress>
              <Flex mt="10" w="100%" justifyContent={"space-between"} alignContent="bottom">
                <Text fontWeight={"600"} fontSize={{ base: 17, md: 25 }} as="span" display={"flex"} alignItems="end">
                  Valor Total: R$1000.00
                </Text>
                <Button display={"inline-block"} colorScheme={"whatsapp"}>
                  Pagar Agora
                </Button>
              </Flex>
            </Box>
            <Box bg="gray.100" borderRadius={"8"} px="5" py="5" boxShadow={"0 0 4px RGBA(0, 0, 0, 0.16)"}>
              <Heading as={"h3"}>Rendimentos mensais</Heading>
              <Chart options={chartConfig} series={series} type="area" height={200}></Chart>
            </Box>
          </SimpleGrid>
        )}
      </MainContainer>
    </>
  );
}

export default Index