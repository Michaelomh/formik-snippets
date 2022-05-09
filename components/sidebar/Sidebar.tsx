import Image from "next/image";
import { useRouter } from "next/router";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import SidebarHeader from "./SidebarHeader";
import SidebarLink from "./SidebarLink";

export default function Sidebar() {
  const router = useRouter();
  const pathName = router.pathname.split("/")[1];
  console.log(pathName);

  return (
    <Box w="25%" maxWidth={"400px"} minW="300px" h="100%" bg="purple.500" color="white" pos="relative">
      <Box w="100%" h="100px" pos="relative">
        <Image layout="fill" objectFit="cover" alt="Formik + Yup React Snippets Logo" src="/Logo.png" />
      </Box>
      <Flex flexDir={"column"} w="100%">
        <SidebarHeader headerTitle="Formik Example">
          <SidebarLink linkTitle="Login Form" />
          <SidebarLink linkTitle="New Account Form" />
          <SidebarLink linkTitle="Add transaction Form" />
        </SidebarHeader>
        <SidebarHeader headerTitle="Kitchen Sink">
          <SidebarLink linkTitle="<Form>" />
          <SidebarLink linkTitle="<Input>" />
          <SidebarLink linkTitle="<Field>" />
          <SidebarLink linkTitle="Button" />
          <SidebarLink linkTitle="Text Area" />
          <SidebarLink linkTitle="Option" />
          <SidebarLink linkTitle="Radio" />
          <SidebarLink linkTitle="Checkbox" />
          <SidebarLink linkTitle="Date" />
          <SidebarLink linkTitle="Validation" />
        </SidebarHeader>
      </Flex>
      <Box pos="absolute" bottom={0} p={4}>
        <Button disabled={true} colorScheme="purple" borderRadius={0}>
          Formik Context
        </Button>
        <Button disabled={false} colorScheme="green">
          useFormik
        </Button>
      </Box>
    </Box>
  );
}
