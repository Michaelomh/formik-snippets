import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  Input,
} from '@chakra-ui/react'
import Layout from '@components/Layout'
import { useFormik } from 'formik'

export default function Home() {
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
      <GridItem colSpan={2} rowSpan={2} h="100%" w="100%">
        <Flex alignItems="center" justifyContent="center" h="100%" w="100%">
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
          </form>
        </Flex>
      </GridItem>
    </Layout>
  )
}
