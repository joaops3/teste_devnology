import React from "react";

import { Stack, Button, Box, Text } from "@chakra-ui/react";
import PaginationItem from "./PaginationItem";

interface Props {
  TotalItems: number;
  ItemsPerPage?: number;
  currentPage?: number;
  onPageChange: (i: number) => void;
}

const Pagination: React.FC<Props> = ({ currentPage = 1, onPageChange, TotalItems, ItemsPerPage = 10 }) => {
  const lastPage = Math.floor(TotalItems / ItemsPerPage);

  const siblinsCount = 2;

  const generatePagesArray = (from: number, to: number) => {
    let newArray = [];
    while (from != to) {
      from++;
      newArray.push(from);
    }
    return newArray.filter((page) => page > 0); //show numbers > 0
  };

  const previousPages = currentPage > 0 ? generatePagesArray(currentPage - 1 - siblinsCount, currentPage - 1) : [];

  const nextPages = currentPage > lastPage ? [] : generatePagesArray(currentPage, Math.min(currentPage + siblinsCount, lastPage));

  return (
    <Stack direction={{ base: "column", md: "row" }} mt="8" justify={"end"} align="center" spacing={"8"}>
      {/* <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box> */}
      <Stack direction={"row"} gap="2">
        {currentPage > 1 + siblinsCount && (
          <>
            <PaginationItem number={1} onPageChange={onPageChange}></PaginationItem>
            {currentPage > 2 + siblinsCount && (
              <Text color={"gray.300"} width={"8"} textAlign="center">
                ...
              </Text>
            )}
          </>
        )}

        {previousPages.length > 0 &&
          previousPages.map((page, index) => {
            return <PaginationItem key={index} number={page} onPageChange={onPageChange}></PaginationItem>;
          })}
        <PaginationItem isCurrent={true} number={currentPage} onPageChange={onPageChange}></PaginationItem>
        {nextPages.length > 0 &&
          nextPages.map((page, index) => {
            return <PaginationItem key={index} number={page} onPageChange={onPageChange}></PaginationItem>;
          })}

        {currentPage + siblinsCount < lastPage && (
          <>
            {currentPage + 1 + siblinsCount < lastPage && <Text>...</Text>}
            <PaginationItem number={lastPage} onPageChange={onPageChange}></PaginationItem>
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default Pagination;
