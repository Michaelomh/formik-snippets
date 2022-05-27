import { Box, Flex, GridItem, VStack } from '@chakra-ui/react'
import CodeSection from '@components/codeSection/CodeSection'
import Layout from '@components/Layout'
import PropsSection from '@components/propsSection/PropsSection'
import { Form, Formik } from 'formik'
import { object, string } from 'yup'
import { Select } from './Select'

export default function FormikSelectChakra() {
  return (
    <Layout>
      <Formik
        initialValues={{ color: '' }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
        validationSchema={object({
          color: string().required().oneOf(['red', 'green', 'blue']),
        })}
      >
        {(props) => (
          <>
            <GridItem w="100%" h="100%" pt={8} bg="gray.100" overflow="auto">
              <Flex align="center" justify="center">
                <Box bg="white" p={6} rounded="md">
                  <Form>
                    <VStack spacing={4} align="flex-start">
                      <Select errors={props.errors} touched={props.touched} />
                    </VStack>
                  </Form>
                </Box>
              </Flex>
            </GridItem>
            <PropsSection props={props} />
            <CodeSection />
          </>
        )}
      </Formik>
    </Layout>
  )
}
