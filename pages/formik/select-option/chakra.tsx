import {
  Box,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  GridItem,
  VStack,
  Select,
} from '@chakra-ui/react'
import CodeSection from '@components/codeSection/CodeSection'
import Layout from '@components/Layout'
import PropsSection from '@components/propsSection/PropsSection'
import { Field, Form, Formik } from 'formik'
import { object, string } from 'yup'

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
                      <FormControl
                        isInvalid={props.errors.color && props.touched.color}
                      >
                        <FormLabel htmlFor="color">Color</FormLabel>
                        <Field name="color" as={Select}>
                          <option value="red">Red</option>
                          <option value="green">Green</option>
                          <option value="blue">Blue</option>
                          <option value="error">ERROR</option>
                        </Field>
                        <FormErrorMessage>Error Message</FormErrorMessage>
                        <FormHelperText>Helper Text</FormHelperText>
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
