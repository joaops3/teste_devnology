import React from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  number: number;
  isCurrent?: boolean;
  onPageChange: (i: number) => void;
}

const PaginationItem: React.FC<Props> = ({ number, isCurrent, onPageChange }) => {
  if (isCurrent) {
    return (
      <>
        <Button
          size="sm"
          fontSize={"xs"}
          w="4"
          colorScheme={"whatsapp"}
          disabled
          _disabled={{ bgColor: "green.500", cursor: "default" }}
        >
          {number}
        </Button>
      </>
    );
  }
  return (
    <>
      <Button
        size="sm"
        fontSize={"xs"}
        w="4"
        bg="gray.500"
        color={"gray.100"}
        _hover={{ bgColor: "gray.700" }}
        onClick={() => onPageChange(number)}
      >
        {number}
      </Button>
    </>
  );
};

export default PaginationItem;
