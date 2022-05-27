import { Box, Flex, Text } from '@chakra-ui/react'
import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { useState } from 'react'

type SidebarHeaderProps = {
  children: React.ReactNode
  currentPath?: string
  subheaderTitle: string
  subheaderLink?: string
}

export default function SidebarSubheader({
  children,
  currentPath,
  subheaderLink,
  subheaderTitle,
}: SidebarHeaderProps) {
  const [isExpanded, setExpanded] = useState(
    currentPath.indexOf(subheaderLink) >= 0
  )

  return (
    <Flex
      flexDir="column"
      w="100%"
      onClick={(e) => {
        setExpanded((prevState) => !prevState)
        e.stopPropagation()
      }}
      _hover={{
        cursor: 'pointer',
      }}
    >
      <Text
        fontSize="16px"
        pl={8}
        py={1}
        letterSpacing={1}
        fontWeight="bold"
        whiteSpace="nowrap"
        overflow="hidden"
        textOverflow="ellipsis"
      >
        {isExpanded ? (
          <ChevronDownIcon d="inline" mr={2} />
        ) : (
          <ChevronRightIcon d="inline" mr={2} />
        )}
        {subheaderTitle}
      </Text>
      <Box pl={6}>{isExpanded && children}</Box>
    </Flex>
  )
}
