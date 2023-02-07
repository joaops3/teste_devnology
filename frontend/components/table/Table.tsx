import { Table, Thead, Tbody, Tr, TableCaption, Flex, Box, Skeleton } from "@chakra-ui/react"
import React from 'react'

interface Props {
  tableHead: React.ReactNode
  tableCaption?: string
  children: React.ReactNode
  loading?: boolean
}

const TableStatement: React.FC<Props> = ({tableCaption, tableHead, loading=false, children}) => {
  return (
    <Skeleton w="100%" isLoaded={true}>
      <Table bg="gray.100" boxShadow={"0 0 4px RGBA(0, 0, 0, 0.16)"} borderRadius={"8"}>
        <Thead>
          <TableCaption fontSize={{ base: 20, md: 40 }}>{tableCaption}</TableCaption>
          <Tr borderBottom={"gray.900"}>{tableHead}</Tr>
        </Thead>
        <Tbody>{children}</Tbody>
      </Table>
    </Skeleton>
  );
}

export default TableStatement