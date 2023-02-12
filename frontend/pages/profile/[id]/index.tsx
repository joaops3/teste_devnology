import React, { useCallback, useEffect, useMemo, useState } from "react";
import { NextPage } from "next";
import MainContainer from "../../../components/containers/MainContainer";
import Loading from "../../../components/UI/Loading";
import Card from "../../../components/UI/Card";
import { UserService } from "../../../services/UserService";
import { useRouter } from "next/router";
import { IUser } from "../../../@types/interfaces";
import { Button, Flex, Heading } from "@chakra-ui/react";
import useAuthContext from "../../../context/AuthContext";
import useProtected from "../../../services/useProtected";

const Index: NextPage = () => {
  const route = useRouter();
  const id = route.query.id as string;
  const [data, setData] = useState<{ data: IUser }>({} as { data: IUser });
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { refreshProfile } = useAuthContext();
  const [maxItems, setMaxItems] = useState<number>(4);

  const paginatedData = useMemo(() => {
    if (!data) return;
    return data.data?.link.filter((item, index) => index < maxItems);
  }, [maxItems, data]);

  const getlinks = useCallback(() => {
    UserService()
      .getUser(id)
      .then((resp) => {
        setData(resp.data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setIsLoading(false);
      });
  }, [id]);

  useProtected();

  useEffect(() => {
    if (id) {
      getlinks();
    }
  }, [getlinks, id, refreshProfile]);

  return (
    <>
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <MainContainer>
          <Flex flexDirection={"column"} gap="5" alignItems={"center"} w="100%">
            {" "}
            {paginatedData ? (
              paginatedData.map((item, index) => (
                <Card
                key={index}
                  title={item.title}
                  url={item.href}
                  id={id}
                  idLink={item._id}
                ></Card>
              ))
            ) : (
              <Heading w="100%" textAlign="center">
                Nenhum Link Cadastrado...{" "}
              </Heading>
            )}{" "}
            {data.data?.link.length > maxItems && (
              <Button
                as={"button"}
                type="submit"
                mt="3"
                colorScheme={"yellow"}
                size="md"
                mb="3"
                onClick={() => setMaxItems((prev) => prev + 4)}
              >
                Ver mais
              </Button>
            )}
          </Flex>
        </MainContainer>
      )}
    </>
  );
};

export default Index;
