import React, { useState } from "react";

import MainContainer from "../../../../components/UI/MainContainer";
import dynamic from "next/dynamic";
import { Tr, Th, Td, Flex } from "@chakra-ui/react";
import TableItem from "../../../../components/table/TableItem";
import Pagination from "../../../../components/UI/pagination/Pagination";
const TableStatement = dynamic(() => import("../../../../components/table/Table"), { ssr: false });


const Statement = () => {
   const [currentPage, setCurrentPage] = useState<number>(1);
  return (
    <>
      <MainContainer>
        <Flex w={"100%"} direction={"column"}>
          <TableStatement
            tableCaption="Extrato"
            tableHead={
              <>
                <Th> Nome</Th>
                <Th> Data</Th>
                <Th> Valor</Th>
              </>
            }
          >
            <TableItem active={true} name="nome" date="2000-02-10" value="1000.00"></TableItem>
            <TableItem active={false} name="nome" date="04/02/2022" value="1000.00"></TableItem>
            <TableItem active={true} name="nome" date="04/02/2022" value="1000.00"></TableItem>
          </TableStatement>
          <Flex w="100%" justifyContent={"end"}>
            <Pagination TotalItems={200} currentPage={1} onPageChange={setCurrentPage}></Pagination>
          </Flex>
        </Flex>
      </MainContainer>
    </>
  );
};

export default Statement;
