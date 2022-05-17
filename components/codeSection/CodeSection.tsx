import { Box, Flex, GridItem, Text } from '@chakra-ui/react'

type codeSectionProps = {
  code?: string
}

export default function CodeSection({ code }: codeSectionProps) {
  if (!code) {
    return (
      <GridItem
        w="100%"
        h="100%"
        colSpan={2}
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        p={4}
        textAlign="center"
        bg="green.100"
        display="flex"
      >
        <Text>View your render components here. </Text>
        <Text>Select from the sidebar to see formik in action.</Text>
      </GridItem>
    )
  }

  return (
    <GridItem w="100%" h="100%" colSpan={2} bgColor="blackAlpha.800">
      <Flex flexDir="row" w="100%" h="100%" overflow="auto">
        <Box color="white" bg="blackAlpha.600" p={4} h="fit-content">
          {Array.from(Array(code.match(/\n/g).length + 1), (e, i) => {
            return <Text key={i}>{i + 1}</Text>
          })}
        </Box>
        <Text as="pre" color="white" p={4} h="100%" w="100%">
          {code}
        </Text>
      </Flex>
    </GridItem>
  )
}
