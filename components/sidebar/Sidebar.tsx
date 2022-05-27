import { Box, Flex, GridItem, Link } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { noFormik, noUseFormik } from './Sidebar.constants'
import { SidebarContext } from './Sidebar.types'
import SidebarContextSwitcher from './SidebarContextSwitcher'
import SidebarHeader from './SidebarHeader'
import SidebarLink from './SidebarLink'
import SidebarSubheader from './SidebarSubHeader'

export default function Sidebar() {
  const router = useRouter()
  let currentContext
  let currentPath
  let disableUseFormikButton = false
  let disableFormikButton = false

  if (router.pathname.split('/').length >= 2) {
    const url = router.pathname.split('/')
    url.shift() // ignore the first element
    currentContext = url.shift()
    currentPath = url.join('/')
  }

  if (!currentContext) {
    currentContext = SidebarContext.useFormik.toString()
  }

  // sometimes certain links only available in one option. we want to disable the other context button
  if (currentPath) {
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
              context={currentContext}
              currentNavigation={currentPath}
            />
            <SidebarLink
              linkTitle="<Form />"
              link="form"
              context={currentContext}
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
            <SidebarSubheader
              currentPath={currentPath}
              subheaderTitle="Input / Text Area"
              subheaderLink="input-textarea"
            >
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
            <SidebarSubheader
              currentPath={currentPath}
              subheaderTitle="Select / Option"
              subheaderLink="select-option"
            >
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

            <SidebarSubheader
              currentPath={currentPath}
              subheaderTitle="Radio / Radio Group"
              subheaderLink="radio"
            >
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
            <SidebarSubheader
              currentPath={currentPath}
              subheaderTitle="Checkbox / Checkbox Group"
              subheaderLink="checkbox"
            >
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
            <SidebarSubheader
              currentPath={currentPath}
              subheaderTitle="Date"
              subheaderLink="date"
            >
              <SidebarLink
                linkTitle="Date"
                context={currentContext}
                currentNavigation={currentPath}
              />
            </SidebarSubheader>
            <SidebarSubheader
              currentPath={currentPath}
              subheaderTitle="Yup + Validation"
              subheaderLink="validation"
            >
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
