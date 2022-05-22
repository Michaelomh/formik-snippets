import { Box, Flex, GridItem, Text } from '@chakra-ui/react'

type viewSectionProps = {
  text?: string
}

export default function ViewSection({ text }: viewSectionProps) {
  if (!text) {
    return (
      <GridItem
        display="flex"
        w="100%"
        h="100%"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        p={4}
        textAlign="center"
        bg="gray.100"
        overflow="auto"
      >
        <Text>View your rendered components here. </Text>
        <Text>Select from the sidebar to see formik in action.</Text>
      </GridItem>
    )
  }
  return (
    <GridItem w="100%" h="100%">
      This place contains Props section
    </GridItem>
  )
}
