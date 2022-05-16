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
      onClick={() => setExpanded((prevState) => !prevState)}
    >
      <Text fontFamily="inter">
        {isExpanded ? (
          <ChevronDownIcon d="inline" mr={4} />
        ) : (
          <ChevronRightIcon d="inline" mr={4} />
        )}
        {headerTitle}
      </Text>
      {isExpanded && children}
    </Flex>
  )
}
