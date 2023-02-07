import React from 'react'
import InputMask from "react-input-mask";
import {
  Input as ChakraInput,
  InputGroup,
  InputLeftElement,
  InputProps
} from "@chakra-ui/react";
import { IdentificationCard, At, DeviceMobile } from "phosphor-react";

interface Props extends InputProps {
  selected: "EMAIL" | "CPF" | "MOBILE";
  value: string
  setValue: (val: any) => void
}

const SelectedInput: React.FC<Props> = ({selected, value, setValue}) => {
 switch (selected) {
      case "MOBILE":
        return (
          <InputGroup mt="8" maxW={768}>
            <InputLeftElement pointerEvents="none">
              <DeviceMobile size={30} />{" "}
            </InputLeftElement>
            <ChakraInput as={InputMask}   focusBorderColor="green.500" mask={`(99) 99999-9999`} value={value} onChange={(e) => setValue(e.target.value)} maskChar={null} type="tel" placeholder="Phone number" />
          </InputGroup>
        );
      case "EMAIL":
        return (
          <InputGroup mt="8" maxW={768}>
            <InputLeftElement pointerEvents="none">
              <At size={30} />
            </InputLeftElement>
            <ChakraInput type="email"   focusBorderColor="green.500"placeholder="EMAIL" value={value} onChange={(e) => setValue(e.target.value)} />
          </InputGroup>
        );
      case "CPF":
        return (
          <InputGroup mt="8" maxW={768}>
            <InputLeftElement pointerEvents="none">
              <IdentificationCard size={30} />
            </InputLeftElement>
            <ChakraInput
              type="text"
              as={InputMask}
              mask={`999.999.999-99`}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              maskChar={null}
              placeholder="CPF"  
              focusBorderColor="green.500"
            />
          </InputGroup>
        );
      }
}

export default SelectedInput