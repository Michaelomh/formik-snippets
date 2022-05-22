import { Box, Flex, GridItem, Text } from '@chakra-ui/react'

type propsSectionProps = {
  props?: object | string
}

export default function PropsSection({ props }: propsSectionProps) {
  if (!props) {
    return (
      <GridItem w="100%" h="100%" p={4} textAlign="center" bg="gray.100">
        <Flex
          w="100%"
          h="100%"
          bgColor="gray.300"
          borderRadius={5}
          border="2px solid black"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          p={4}
        >
          <Text as="pre">View your notes here. </Text>
          <Text as="pre">Select from the sidebar to see formik in action.</Text>
        </Flex>
      </GridItem>
    )
  }

  return (
    <GridItem w="100%" h="100%" p={4} bgColor="gray.100">
      <Box
        w="100%"
        h="100%"
        bgColor="gray.300"
        borderRadius={5}
        border="2px solid black"
        p={4}
      >
        <Text as="pre" fontSize="18px" h="100%" overflow="auto">
          {typeof props === 'object' ? JSON.stringify(props, null, 4) : props}
        </Text>
      </Box>
    </GridItem>
  )
}
