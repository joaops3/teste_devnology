import React, {forwardRef} from 'react'
import { MenuItem as ChakraMenuItem } from "@chakra-ui/react"
import Link, { LinkProps } from "next/link"

interface Props extends LinkProps {
  children: React.ReactNode
  href: string
}

const MenuItem = forwardRef<HTMLAnchorElement, Props>(({ children, href, ...rest }, ref) => {
  return (
    <Link href={href} {...rest} passHref>
      <ChakraMenuItem _hover={{ bg: "green.200" }} >{children}</ChakraMenuItem>
    </Link>
  );
});
MenuItem.displayName = "MenuItem"
export default MenuItem