import { Flex, Text } from "@chakra-ui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";

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
  const [isExpanded, setExpanded] = useState(true);

  return (
    <Flex flexDir="column" w="100%" onClick={() => setExpanded((prevState) => !prevState)}>
      <Text fontFamily="inter">
        {isExpanded ? <ChevronDownIcon d="inline" mr={4} /> : <ChevronRightIcon d="inline" mr={4} />}
        {headerTitle} - {isExpanded.toString()}
      </Text>
      {isExpanded && children}
    </Flex>
  );
}
