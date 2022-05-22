import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Input,
  VStack,
} from '@chakra-ui/react'
import CodeSection from '@components/codeSection/CodeSection'
import Layout from '@components/Layout'
import PropsSection from '@components/propsSection/PropsSection'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { object, string } from 'yup'

export default function FormikInputChakra() {
  return (
    <Layout>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
        validationSchema={object({
          email: string().email('Email is invalid.'),
        })}
      >
        {(props) => (
          <>
            <GridItem w="100%" h="100%" pt={8} bg="gray.100" overflow="auto">
              <Flex align="center" justify="center">
                <Box bg="white" p={6} rounded="md">
                  <Form>
                    <VStack spacing={4} align="flex-start">
                      <FormControl>
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <Field
                          as={Input}
                          id="email"
                          name="email"
                          type="email"
                          variant="filled"
                          onChange={props.handleChange}
                          value={props.values.email}
                        />
                        <ErrorMessage name="email" />
                      </FormControl>
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
