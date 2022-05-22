import { Grid, GridItem } from '@chakra-ui/react'
import Head from './Head'
import Sidebar from './sidebar/Sidebar'

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <Grid
        w="100vw"
        h="100vh"
        templateRows="50% 50%"
        templateColumns="20% 40% 40%"
      >
        <Sidebar />
        {children}
      </Grid>
    </>
  )
}
