import { Box, Button, ButtonGroup, Flex, Text } from '@chakra-ui/react'
import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { useState } from 'react'
import router from 'next/router'
import { SidebarContext } from './Sidebar.types'

type SidebarHeaderProps = {
  context: string
  path: string
  disableUseFormikButton: boolean
  disableFormikButton: boolean
}

export default function SidebarContextSwitcher({
  context,
  path,
  disableFormikButton,
  disableUseFormikButton,
}: SidebarHeaderProps) {
  return (
    <ButtonGroup
      variant="solid"
      bgColor={
        context === SidebarContext.useFormik ? 'purple.700' : 'green.800'
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
        isActive={context === SidebarContext.useFormik}
        isDisabled={disableUseFormikButton}
        bgColor="purple.800"
        opacity={0.64}
        _hover={{
          opacity: 1,
          bg: 'purple.600',
          _disabled: {
            bg: 'purple.800',
            opacity: 0.64,
          },
        }}
        _active={{
          bg: 'purple.400',
          opacity: 1,
        }}
        onClick={() => router.push(`/useFormik/${path}`)}
      >
        useFormik
      </Button>
      <Button
        colorScheme="green"
        w="45%"
        size="sm"
        isActive={context === SidebarContext.formik}
        isDisabled={disableFormikButton}
        bgColor="green.800"
        opacity={0.64}
        _hover={{
          opacity: 1,
          bg: 'green.600',
          _disabled: {
            bg: 'green.800',
            opacity: 0.64,
          },
        }}
        _active={{
          bg: 'green.600',
          opacity: 1,
        }}
        onClick={() => router.push(`/formik/${path}`)}
      >
        {`<Formik />`}
      </Button>
    </ButtonGroup>
  )
}
