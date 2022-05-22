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

export default function FormikInputBasics() {
  return (
    <Layout>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
      >
        {(props) => (
          <>
            <GridItem w="100%" h="100%" pt={8} bg="gray.100" overflow="auto">
              <Form>
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
              </Form>
            </GridItem>
            <PropsSection props={props} />
            <CodeSection />
          </>
        )}
      </Formik>
    </Layout>
  )
}
