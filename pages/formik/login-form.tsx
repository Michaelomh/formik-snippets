import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  GridItem,
  Input,
  VStack,
} from '@chakra-ui/react'
import CodeSection from '@components/codeSection/CodeSection'
import Layout from '@components/Layout'
import PropsSection from '@components/propsSection/PropsSection'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  email: Yup.string()
    .email('Not a vaild email account')
    .required('Field cannot be empty'),
  password: Yup.string().required('Password cannot be empty'),
})

export default function FormikLoginForm() {
  return (
    <Layout>
      <Formik
        initialValues={{ email: '', password: '', rememberMe: false }}
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
                      <FormControl
                        isInvalid={props.errors.email && props.touched.email}
                      >
                        <FormLabel htmlFor="email">Email Address</FormLabel>
                        <Field
                          as={Input}
                          id="email"
                          name="email"
                          type="email"
                          variant="filled"
                        />
                        <FormErrorMessage>
                          {props.errors.email}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={
                          props.errors.password && props.touched.password
                        }
                      >
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Field
                          as={Input}
                          id="password"
                          name="password"
                          type="password"
                          variant="filled"
                        />
                        <FormErrorMessage>
                          {props.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                      <Field
                        as={Checkbox}
                        id="rememberMe"
                        name="rememberMe"
                        colorScheme="green"
                      >
                        Remember me?
                      </Field>
                      <Button type="submit" colorScheme="green" width="full">
                        Login
                      </Button>
                    </VStack>
                  </Form>
                </Box>
              </Flex>
            </GridItem>
            <PropsSection props={props} />
            <CodeSection
              code={`<Formik
  initialValues={{ email: '', password: '', rememberMe: false }}
  onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
  validationSchema={validationSchema}
>
{(props) => (
  <Form>
    <FormControl isInvalid={props.errors.email && props.touched.email}>
      <FormLabel htmlFor="email">Email Address</FormLabel>
      <Field
        as={Input}
        id="email"
        name="email"
        type="email"
      />
      <FormErrorMessage>
        {props.errors.email}
      </FormErrorMessage>
    </FormControl>
    <FormControl isInvalid={props.errors.password && props.touched.password}>
      <FormLabel htmlFor="password">Password</FormLabel>
      <Field
        as={Input}
        id="password"
        name="password"
        type="password"
      />
      <FormErrorMessage>
        {props.errors.password}
      </FormErrorMessage>
    </FormControl>
    <Field
      as={Checkbox}
      id="rememberMe"
      name="rememberMe"
    >
      Remember me?
    </Field>
    <Button type="submit" colorScheme="green" width="full">
      Login
    </Button>
  </Form>
)}`}
            />
          </>
        )}
      </Formik>
    </Layout>
  )
}
