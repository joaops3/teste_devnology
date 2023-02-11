import { Flex, useDisclosure, Heading } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import MainContainer from "../../../../components/containers/MainContainer";
import { Gear } from "phosphor-react";
import FormLink from "../../../../components/form/FormLink";
import LinkService from "../../../../services/LinkService";
import Loading from "../../../../components/UI/Loading";
import { ILink } from "../../../../@types/interfaces";
import Card from "../../../../components/UI/Card";
import useProtected from "../../../../services/useProtected";
const Devblog = () => {
  const [data, setData] = useState<ILink[]>([]);
  const [isloading, setIsLoading] = useState<boolean>(true);
  
  const getData = () => {
    LinkService()
      .getDevBlogData()
      .then((resp) => {
        setData(resp.data);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  };
  useProtected()
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      {isloading ? (
        <Loading></Loading>
      ) : (
        <MainContainer>
          <Flex
            direction="column"
            mx="auto"
            alignItems={"center"}
            gap="5"
            mb="5"
          >
            <Heading color={"gray.600"}>Links do site DevBlog</Heading>

            <Flex
              flexDirection={"column"}
              gap="5"
              alignItems={"center"}
              w="100%"
            >
              {data.map((item, index) => {
                return (
                  <Card
                    key={index}
                    id={index.toString()}
                    idLink={index.toString()}
                    title={item.title}
                    url={item.href}
                    type="outside"
                  ></Card>
                );
              })}
            </Flex>
          </Flex>
        </MainContainer>
      )}
    </>
  );
};

export default Devblog;
