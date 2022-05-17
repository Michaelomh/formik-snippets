import { Flex, Text } from '@chakra-ui/react'
import { ChevronRightIcon, ChevronDownIcon } from '@chakra-ui/icons'
import { useState } from 'react'

type SidebarHeaderProps = {
  children: React.ReactNode
  headerTitle: string
}

export default function SidebarHeader({
  children,
  headerTitle,
}: SidebarHeaderProps) {
  const [isExpanded, setExpanded] = useState(true)

  return (
    <Flex
      flexDir="column"
      w="100%"
      pt={4}
      onClick={() => setExpanded((prevState) => !prevState)}
      _hover={{
        cursor: 'pointer',
      }}
    >
      <Text
        fontWeight="black"
        textTransform="uppercase"
        letterSpacing={2}
        fontSize="18px"
        py={2}
      >
        {isExpanded ? (
          <ChevronDownIcon d="inline" mr={4} w={6} h={6} />
        ) : (
          <ChevronRightIcon d="inline" mr={4} w={6} h={6} />
        )}
        {headerTitle}
      </Text>
      {isExpanded && children}
    </Flex>
  )
}
