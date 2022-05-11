import { Box, Flex, Text } from "@chakra-ui/react";

type viewSectionProps = {
  text?: string;
};

export default function ViewSection({ text }: viewSectionProps) {
  if (!text) {
    return (
      <Flex w="100%" h="100%" flexDir="column" alignItems="center" justifyContent="center" p={4} textAlign="center">
        <Text>View your render components here. </Text>
        <Text>Select from the sidebar to see formik in action.</Text>
      </Flex>
    );
  }
  return (
    <Box w="100%" h="100%">
      This place contains Props section
    </Box>
  );
}
