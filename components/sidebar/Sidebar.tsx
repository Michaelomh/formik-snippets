import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  GridItem,
  Link,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import SidebarHeader from './SidebarHeader'
import SidebarLink from './SidebarLink'
import { SidebarContext } from './Sidebar.types'

export default function Sidebar() {
  const router = useRouter()
  let currentContext
  let currentPath

  if (router.pathname !== '/') {
    currentContext = router.pathname.split('/')[1]
    currentPath = router.pathname.split('/')[2]
  }

  return (
    <GridItem
      rowSpan={2}
      bg={
        currentContext === SidebarContext.useFormik ? 'purple.500' : 'green.600'
      }
      color="white"
      h="100%"
      position="relative"
    >
      <Link href="/">
        <Box w="100%" h="100px" pos="relative" bgColor="white">
          <Image
            layout="fill"
            objectFit="cover"
            alt="Formik + Yup React Snippets Logo"
            src="/Logo.png"
          />
        </Box>
      </Link>
      <Box
        w="100%"
        minW="300px"
        px={4}
        borderTop="12px solid"
        borderTopColor={
          currentContext === SidebarContext.useFormik
            ? 'purple.700'
            : 'green.800'
        }
      >
        <Flex flexDir={'column'} w="100%">
          <SidebarHeader headerTitle="Formik Example">
            <SidebarLink
              linkTitle="Login Form"
              link="login-form"
              context={currentContext}
              currentNavigation={currentPath}
            />
            <SidebarLink
              linkTitle="New Account Form"
              link="new-account"
              context={currentContext}
              currentNavigation={currentPath}
            />
            <SidebarLink
              linkTitle="Add transaction Form"
              link="transaction-form"
              context={currentContext}
              currentNavigation={currentPath}
            />
          </SidebarHeader>
          <SidebarHeader headerTitle="Kitchen Sink">
            <SidebarLink linkTitle="<Form>" link="form" />
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
      </Box>
      <ButtonGroup
        variant="solid"
        bgColor={
          currentContext === SidebarContext.useFormik
            ? 'purple.700'
            : 'green.800'
        }
        w="100%"
        spacing="6"
        p={'5%'}
        position="absolute"
        bottom={0}
      >
        <Button
          colorScheme="purple"
          w="45%"
          size="sm"
          isActive={currentContext === SidebarContext.useFormik}
          bgColor="purple.800"
          opacity="0.64"
          _hover={{
            opacity: 1,
            bg: 'purple.600',
          }}
          _active={{
            bg: 'purple.400',
            opacity: 1,
          }}
          onClick={() => router.push(`/useFormik/${currentPath}`)}
        >
          useFormik
        </Button>
        <Button
          colorScheme="green"
          w="45%"
          size="sm"
          isActive={currentContext === SidebarContext.formik}
          bgColor="green.800"
          opacity="0.64"
          _hover={{
            opacity: 1,
            bg: 'green.600',
          }}
          _active={{
            bg: 'green.600',
            opacity: 1,
          }}
          onClick={() => router.push(`/formik/${currentPath}`)}
        >
          {`<Formik>`}
        </Button>
      </ButtonGroup>
    </GridItem>
  )
}
