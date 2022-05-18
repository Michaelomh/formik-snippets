import {
  Box,
  Button,
  Checkbox,
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
import { Form, Formik } from 'formik'

export default function FormikForm() {
  return (
    <Layout>
      <Formik
        initialValues={{ email: '', password: '', rememberMe: false }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
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
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          variant="filled"
                          onChange={props.handleChange}
                          value={props.values.email}
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                          id="password"
                          name="password"
                          type="password"
                          variant="filled"
                          onChange={props.handleChange}
                          value={props.values.email}
                        />
                      </FormControl>
                      <Checkbox
                        id="rememberMe"
                        name="rememberMe"
                        colorScheme="green"
                        onChange={props.handleChange}
                        value={props.values.email}
                      >
                        Remember me?
                      </Checkbox>
                      <Button type="submit" colorScheme="green" width="full">
                        Login
                      </Button>
                    </VStack>
                  </Form>
                </Box>
              </Flex>
            </GridItem>
            <PropsSection
              props={{
                notes: `<Form> is a small wrapper around an HTML <form> element that automatically hooks into Formik's handleSubmit and handleReset. All other props are passed directly through to the DOM node.`,
              }}
            />
            <CodeSection
              code={` // Formik's <Form> 
 <Form />
 
 // is identical to this...
 <form onReset={formikProps.handleReset} onSubmit={formikProps.handleSubmit} />`}
            />
          </>
        )}
      </Formik>
    </Layout>
  )
}
