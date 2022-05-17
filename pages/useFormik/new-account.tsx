import {
  Box,
  Button,
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
import { useFormik } from 'formik'

export default function NewAccount() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      age: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <Layout>
      <GridItem w="100%" h="100%" pt={8} bg="gray.100" overflow="auto">
        <Flex align="center" justify="center">
          <Box bg="white" p={6} rounded="md">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="age">Age</FormLabel>
                  <Input
                    id="age"
                    name="age"
                    type="number"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.age}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="confirmPassword">
                    Confirm Password
                  </FormLabel>
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    variant="filled"
                    onChange={formik.handleChange}
                    value={formik.values.confirmPassword}
                  />
                </FormControl>
                <Button type="submit" colorScheme="purple" width="full">
                  Login
                </Button>
              </VStack>
            </form>
          </Box>
        </Flex>
      </GridItem>
      <PropsSection props={formik} />
      <CodeSection
        code={`const formik = useFormik({
  initialValues: {
    firstName: '',
    lastName: '',
    age: '',
    password: '',
    confirmPassword: '',
  },
  onSubmit: (values) => {
    alert(JSON.stringify(values, null, 2))
},

....

<form onSubmit={formik.handleSubmit}>
  <FormControl>
    <FormLabel htmlFor="email">Email Address</FormLabel>
    <Input
      id="email"
      name="email"
      type="email"
      onChange={formik.handleChange}
      value={formik.values.email}
    />
  </FormControl>
  <FormControl>
    <FormLabel htmlFor="password">Password</FormLabel>
    <Input
      id="password"
      name="password"
      type="password"
      onChange={formik.handleChange}
      value={formik.values.password}
    />
  </FormControl>
  <Checkbox
    id="rememberMe"
    name="rememberMe"
    onChange={formik.handleChange}
    isChecked={formik.values.rememberMe}
    colorScheme="purple"
  >
    Remember me?
  </Checkbox>
  <Button type="submit" colorScheme="purple" width="full">
    Login
  </Button>
</form>`}
      />
    </Layout>
  )
}
