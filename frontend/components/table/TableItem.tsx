import React, {memo} from 'react'
import { Tr, Th, Td } from "@chakra-ui/react";
import { currencyFormater, dateFormater } from "../../utils/helpers";

interface Props {
  name: string
  date: string
  value: string
  active: boolean

}


const TableItem: React.FC<Props> = ({active=false, name, value, date}) => {
  return (
    <>
      <Tr color={`${active ? "green.300" : "red.400"}`}>
        <Td borderColor={"gray.300"}>{name}</Td>
        <Td borderColor={"gray.300"}>{dateFormater.format(new Date(date))}</Td>
        <Td borderColor={"gray.300"}>{currencyFormater.format(Number(value))}</Td>
      </Tr>
    </>
  );
}

export default memo(TableItem, (prevProps, nextProps) => {
  //return prevProps.name === nextProps.name
  return Object.is(prevProps.name, nextProps.name)
})