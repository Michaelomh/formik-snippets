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
import SidebarSubheader from './SidebarSubHeader'
import SidebarContextSwitcher from './SidebarContextSwitcher'

export default function Sidebar() {
  const router = useRouter()
  let currentContext = SidebarContext.useFormik.toString()
  let currentPath = ''
  let disableUseFormikButton = false
  let disableFormikButton = false

  if (router.pathname.split('/').length >= 2) {
    currentContext = router.pathname.split('/')[1]
    currentPath = router.pathname.split('/')[2] || ''
  }

  console.log(currentPath)

  // sometimes certain links only available in one option. we want to disable the other context button
  if (currentPath) {
    const noUseFormik = ['form', 'formik']
    const noFormik = []
    disableUseFormikButton = noUseFormik.includes(currentPath)
    disableFormikButton = noFormik.includes(currentPath)
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
            <SidebarLink
              linkTitle="<Formik />"
              link="formik"
              context={SidebarContext.formik}
              currentNavigation={currentPath}
            />
            <SidebarLink
              linkTitle="<Form />"
              link="form"
              context={SidebarContext.formik}
              currentNavigation={currentPath}
            />
            <SidebarLink
              linkTitle="<ErrorMessage />"
              link="errorMessage"
              context={currentContext}
              currentNavigation={currentPath}
            />
            <SidebarLink
              linkTitle="<Field>"
              context={currentContext}
              currentNavigation={currentPath}
            />

            <SidebarSubheader subheaderTitle="Button">
              <SidebarLink
                linkTitle="Basic Example"
                context={currentContext}
                currentNavigation={currentPath}
              />
            </SidebarSubheader>

            <SidebarSubheader subheaderTitle="Input / Text Area">
              <SidebarLink
                linkTitle="Basic Example"
                link="input-textarea/basics"
                context={currentContext}
                currentNavigation={currentPath}
              />
              <SidebarLink
                linkTitle="Chakra UI"
                link="input-textarea/chakra"
                context={currentContext}
                currentNavigation={currentPath}
              />
            </SidebarSubheader>
            <SidebarSubheader subheaderTitle="Select / Option">
              <SidebarLink
                linkTitle="Basic Example"
                link="select-option/basics"
                context={currentContext}
                currentNavigation={currentPath}
              />
              <SidebarLink
                linkTitle="Chakra UI"
                link="select-option/chakra"
                context={currentContext}
                currentNavigation={currentPath}
              />
            </SidebarSubheader>

            <SidebarSubheader subheaderTitle="Radio / Radio Group">
              <SidebarLink
                linkTitle="Basic Example"
                context={currentContext}
                currentNavigation={currentPath}
              />
              <SidebarLink
                linkTitle="Chakra integration"
                context={currentContext}
                currentNavigation={currentPath}
              />
              <SidebarLink
                linkTitle="Disabled"
                context={currentContext}
                currentNavigation={currentPath}
              />
            </SidebarSubheader>
            <SidebarSubheader subheaderTitle="Checkbox / Checkbox Group">
              <SidebarLink
                linkTitle="Basic Example"
                context={currentContext}
                currentNavigation={currentPath}
              />
              <SidebarLink
                linkTitle="Chakra integration"
                context={currentContext}
                currentNavigation={currentPath}
              />
              <SidebarLink
                linkTitle="Disabled"
                context={currentContext}
                currentNavigation={currentPath}
              />
            </SidebarSubheader>
            <SidebarSubheader subheaderTitle="Date">
              <SidebarLink
                linkTitle="Date"
                context={currentContext}
                currentNavigation={currentPath}
              />
            </SidebarSubheader>
            <SidebarSubheader subheaderTitle="Yup + Validation">
              <SidebarLink
                linkTitle="string"
                link="validation/string"
                context={currentContext}
                currentNavigation={currentPath}
              />
              <SidebarLink
                linkTitle="number"
                link="validation/number"
                context={currentContext}
                currentNavigation={currentPath}
              />
              <SidebarLink
                linkTitle="select"
                link="validation/select"
                context={currentContext}
                currentNavigation={currentPath}
              />
              <SidebarLink
                linkTitle="boolean"
                link="validation/boolean"
                context={currentContext}
                currentNavigation={currentPath}
              />

              <SidebarLink
                linkTitle="custom"
                link="validation/custom"
                context={currentContext}
                currentNavigation={currentPath}
              />
            </SidebarSubheader>
          </SidebarHeader>
        </Flex>
      </Box>
      <SidebarContextSwitcher
        context={currentContext}
        path={currentPath}
        disableFormikButton={disableFormikButton}
        disableUseFormikButton={disableUseFormikButton}
      />
    </GridItem>
  )
}
