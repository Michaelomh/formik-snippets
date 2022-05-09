import { Flex, Text } from "@chakra-ui/react";

type SidebarHeaderProps = {
  children: React.ReactNode;
  headerTitle: string;
};

/**
 * TODO:
 * set styles
 * add an expand and hide
 * add icons for expand and hide
 */
export default function SidebarHeader({ children, headerTitle }: SidebarHeaderProps) {
  return (
    <Flex flexDir="column" w="100%">
      <Text>{headerTitle}</Text>
      {children}
    </Flex>
  );
}
