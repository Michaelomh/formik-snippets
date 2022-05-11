import { Box, Flex, Text } from "@chakra-ui/react";

type codeSectionProps = {
  code?: string;
};

export default function CodeSection({ code }: codeSectionProps) {
  if (!code) {
    return (
      <Flex w="100%" h="50%" flexDir="column" alignItems="center" justifyContent="center" p={4} textAlign="center">
        <Text>View your render components here. </Text>
        <Text>Select from the sidebar to see formik in action.</Text>
      </Flex>
    );
  }

  return (
    <Box w="100%" h="50%">
      This place contains Code section
    </Box>
  );
}
