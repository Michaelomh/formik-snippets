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

export default function FormikValidationString() {
  const validationSchema = Yup.object({
    required: Yup.string().required('cannot be empty'),
    minmaxLength: Yup.string().min(3, 'more than 3').max(5, 'less than 5'),
    validEmail: Yup.string().email('not valid email format'),
    validUrl: Yup.string().url('not valid url format'),
    alwaysLower: Yup.string().lowercase(),
    alwaysUpper: Yup.string().uppercase(),
    trimResult: Yup.string().trim(),
  })

  return (
    <Layout>
      <Formik
        initialValues={{
          required: '',
          minmaxLength: '',
          validEmail: '',
          validUrl: '',
          alwaysLower: '',
          alwaysUpper: '',
          trimResult: '',
        }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
        validationSchema={validationSchema}
      >
        {(props) => (
          <>
            <GridItem w="100%" h="100%" pt={8} bg="gray.100" overflow="auto">
              <Flex align="center" justify="center">
                <Box bg="white" p={6} rounded="md">
                  <Form>
                    <VStack spacing={4} align="flex-start">
                      <FormControl>
                        <FormLabel htmlFor="name">Required</FormLabel>
                        <Field
                          id="required"
                          name="required"
                          variant="filled"
                          onChange={props.handleChange}
                          value={props.values.required}
                        />
                        <ErrorMessage name="required" />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="name">
                          Length &gt;3 &amp; &lt;5
                        </FormLabel>
                        <Field
                          id="minmaxLength"
                          name="minmaxLength"
                          variant="filled"
                          onChange={props.handleChange}
                          value={props.values.minmaxLength}
                        />
                        <ErrorMessage name="minmaxLength" />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="name">Validate Email</FormLabel>
                        <Field
                          id="validEmail"
                          name="validEmail"
                          variant="filled"
                          onChange={props.handleChange}
                          value={props.values.validEmail}
                        />
                        <ErrorMessage name="validEmail" />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="name">Validate URL</FormLabel>
                        <Field
                          id="validUrl"
                          name="validUrl"
                          variant="filled"
                          onChange={props.handleChange}
                          value={props.values.validUrl}
                        />
                        <ErrorMessage name="validUrl" />
                      </FormControl>
                      {/* TODO: Figure out if it's possible to make text as lowercase,
                    uppercase or trim. */}
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
