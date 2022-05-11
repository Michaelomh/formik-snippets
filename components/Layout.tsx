import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "./sidebar/Sidebar";

export default function Layout({ children }) {
  return (
    <Flex w="100vw" h="100vh" flexDir="row">
      <Sidebar />
      <Box w="100%">{children}</Box>
    </Flex>
  );
}
