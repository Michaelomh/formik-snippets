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
import { useFormik } from 'formik'

export default function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })
  return (
    <Layout>
      <GridItem
        display="flex"
        w="100%"
        h="100%"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        p={4}
        bg="gray.100"
      >
        <Flex align="center" justify="center">
          <Box bg="white" p={6} rounded="md">
            <form onSubmit={formik.handleSubmit}>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
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
                    variant="filled"
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
              </VStack>
            </form>
          </Box>
        </Flex>
      </GridItem>
      <PropsSection props={formik} />
      <CodeSection
        code={`<form onSubmit={formik.handleSubmit}>
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
