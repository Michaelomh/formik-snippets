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

export default function FormikValidationNumber() {
  const validationSchema = Yup.object({
    required: Yup.number().required('cannot be empty'),
    mustBePositive: Yup.number()
      .positive('cannot be empty')
      .integer('must be integer'),
    minmaxLength: Yup.number().min(3, 'more than 3').max(5, 'less than 5'),
    numberMoreThan: Yup.number().moreThan(3, 'more than 3'),
    numberLessThan: Yup.number().lessThan(5, 'less than 5'),
  })

  return (
    <Layout>
      <Formik
        initialValues={{
          required: '',
          minmaxLength: '',
          numberMoreThan: '',
          numberLessThan: '',
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
                        <FormLabel htmlFor="name">Require number</FormLabel>
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
                        <FormLabel htmlFor="name">moreThan (3)</FormLabel>
                        <Field
                          id="numberMoreThan"
                          name="numberMoreThan"
                          variant="filled"
                          onChange={props.handleChange}
                          value={props.values.numberMoreThan}
                        />
                        <ErrorMessage name="numberMoreThan" />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="name">lessThan (5)</FormLabel>
                        <Field
                          id="numberLessThan"
                          name="numberLessThan"
                          variant="filled"
                          onChange={props.handleChange}
                          value={props.values.numberLessThan}
                        />
                        <ErrorMessage name="numberLessThan" />
                      </FormControl>
                      {/* TODO: Figure out if it's possible to handle float easily. */}
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
