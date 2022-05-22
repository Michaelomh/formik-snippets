import {
  Box,
  Button,
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
import { Field, Form, Formik, useFormik } from 'formik'
import * as Yup from 'yup'

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name needs to be more than 3 characters')
    .required('Name field cannot be empty.'),
  email: Yup.string()
    .email('Not a vaild email account')
    .required('Email field cannot be empty.'),
  age: Yup.number().required('Age field cannot be empty.'),
  password: Yup.string().required('Password field cannot be empty'),
  confirmPassword: Yup.string()
    .required('Confirm password field cannot be empty')
    .oneOf([Yup.ref('password'), null], 'Passwords must match'),
})

export default function FormikNewAccount() {
  return (
    <Layout>
      <Formik
        initialValues={{
          name: '',
          email: '',
          age: '',
          password: '',
          confirmPassword: '',
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
                      <FormControl
                        isInvalid={props.errors.name && props.touched.name}
                      >
                        <FormLabel htmlFor="name">Name</FormLabel>
                        <Field
                          as={Input}
                          id="name"
                          name="name"
                          type="text"
                          variant="filled"
                          onChange={props.handleChange}
                          value={props.values.name}
                        />
                        <FormErrorMessage>{props.errors.name}</FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={props.errors.email && props.touched.email}
                      >
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Field
                          as={Input}
                          id="email"
                          name="email"
                          type="text"
                          variant="filled"
                          onChange={props.handleChange}
                          value={props.values.email}
                        />
                        <FormErrorMessage>
                          {props.errors.email}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={props.errors.age && props.touched.age}
                      >
                        <FormLabel htmlFor="age">Age</FormLabel>
                        <Field
                          as={Input}
                          id="age"
                          name="age"
                          type="number"
                          variant="filled"
                          onChange={props.handleChange}
                          value={props.values.age}
                        />
                        <FormErrorMessage>{props.errors.age}</FormErrorMessage>
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
                          onChange={props.handleChange}
                          value={props.values.password}
                        />

                        <FormErrorMessage>
                          {props.errors.password}
                        </FormErrorMessage>
                      </FormControl>
                      <FormControl
                        isInvalid={
                          props.errors.confirmPassword &&
                          props.touched.confirmPassword
                        }
                      >
                        <FormLabel htmlFor="confirmPassword">
                          Confirm Password
                        </FormLabel>
                        <Field
                          as={Input}
                          id="confirmPassword"
                          name="confirmPassword"
                          type="password"
                          variant="filled"
                          onChange={props.handleChange}
                          value={props.values.confirmPassword}
                        />
                        <FormErrorMessage>
                          {props.errors.confirmPassword}
                        </FormErrorMessage>
                      </FormControl>
                      <Button
                        type="submit"
                        colorScheme="green"
                        width="full"
                        isDisabled={!(props.isValid && props.dirty)}
                      >
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
  initialValues={{
    name: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: '',
  }}
  onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
  validationSchema={validationSchema}
>
{(props) => (
  <Form>
    <VStack spacing={4} align="flex-start">
      <FormControl isInvalid={props.errors.name && props.touched.name}>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Field
          as={Input}
          id="name"
          name="name"
          type="text"
          onChange={props.handleChange}
          value={props.values.name}
        />
        <FormErrorMessage>{props.errors.name}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={props.errors.email && props.touched.email}
      >
        <FormLabel htmlFor="email">Email</FormLabel>
        <Field
          as={Input}
          id="email"
          name="email"
          type="text"
          onChange={props.handleChange}
        />
        <FormErrorMessage>{props.errors.email}</FormErrorMessage>
      </FormControl>
      <FormControl
        isInvalid={props.errors.age && props.touched.age}
      >
        <FormLabel htmlFor="age">Age</FormLabel>
        <Field
          as={Input}
          id="age"
          name="age"
          type="number"
          onChange={props.handleChange}
          value={props.values.age}
        />
        <FormErrorMessage>{props.errors.age}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={props.errors.password && props.touched.password}>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Field
          as={Input}
          id="password"
          name="password"
          type="password"
          onChange={props.handleChange}
          value={props.values.password}
        />
        <FormErrorMessage>{props.errors.password}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={props.errors.confirmPassword && props.touched.confirmPassword}>
        <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
        <Field
          as={Input}
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          onChange={props.handleChange}
          value={props.values.confirmPassword}
        />
        <FormErrorMessage>{props.errors.confirmPassword}</FormErrorMessage>
      </FormControl>
      <Button
        type="submit"
        colorScheme="green"
        width="full"
        isDisabled={!(props.isValid && props.dirty)}
      >Login</Button>    
    </Form>
  )}
</Formik>`}
            />
          </>
        )}
      </Formik>
    </Layout>
  )
}
