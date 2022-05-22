import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Text,
  VStack,
} from '@chakra-ui/react'
import CodeSection from '@components/codeSection/CodeSection'
import Layout from '@components/Layout'
import PropsSection from '@components/propsSection/PropsSection'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

export default function FormikErrorMessage() {
  return (
    <Layout>
      <Formik
        initialValues={{ validateName: '' }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
        validationSchema={Yup.object({
          validateName: Yup.string().min(
            999,
            'message to show when validation fails'
          ),
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
                        <FormLabel htmlFor="validateName">
                          Name - fill this to show {`<ErrorMessage/>`}
                        </FormLabel>
                        <Field
                          id="validateName"
                          name="validateName"
                          variant="filled"
                          onChange={props.handleChange}
                          value={props.values.validateName}
                        />

                        <br />
                        <Text>Error message - Basic Example</Text>
                        <ErrorMessage name="validateName" />
                        <br />
                        <br />
                        <Text>Error message - Render Custom Component</Text>
                        <ErrorMessage
                          name="validateName"
                          render={(msg) => (
                            <Text as="pre">{msg} - render in render props</Text>
                          )}
                        />
                        <br />
                        <Text>
                          Error message - custom ErrorMessage as Custom
                          Component
                        </Text>
                        <ErrorMessage
                          name="validateName"
                          component={CustomErrorMessage}
                        />
                        <br />
                        <Text>
                          Error message - custom ErrorMessage as children
                        </Text>
                        <ErrorMessage name="validateName">
                          {(msg) => {
                            return (
                              <Text as="pre">
                                {msg} - rendered as Child props
                              </Text>
                            )
                          }}
                        </ErrorMessage>
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

const CustomErrorMessage = ({ children }) => {
  return <Text as="pre">{children} - render as component props</Text>
}
