import React from 'react'
import {NumberInput, NumberInputField, NumberInputProps, InputProps, Input as ChakraInput} from "@chakra-ui/react"
import { onlyNumbers, currencyFormater } from "../../utils/helpers"

interface Props extends InputProps {
  value: string
  setValue: (e: string)=> void
}

const CurrencyInput: React.FC<Props> = ({value, setValue, ...rest}) => {
 
 
 
 const convertToMoney = (val : string) => {
  val = val.replace(/\D/g, "");
  val = val.replace(/(\d)(\d{2})$/, "$1,$2");
  val = val.replace(/(?=(\d{3})+(\D))\B/g, ".")
  setValue(val)
};
  return (
    <ChakraInput value={value} onChange={(e) => {convertToMoney(e.target.value)}} {...rest}>
   
    </ChakraInput>
  );
}

export default CurrencyInput