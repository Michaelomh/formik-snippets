import { Flex } from "@chakra-ui/react";
import CodeSection from "@components/codeSection/CodeSection";
import Head from "@components/Head";
import Layout from "@components/Layout";
import PropsSection from "@components/propsSection/PropsSection";
import ViewSection from "@components/viewSection/ViewSection";
import React from "react";

export default function Home() {
  return (
    <>
      <Head />
      <Layout>
        <Flex flexDir="row" w="100%" h="50%">
          <ViewSection />
          <PropsSection />
        </Flex>
        <CodeSection />
      </Layout>
    </>
  );
}
