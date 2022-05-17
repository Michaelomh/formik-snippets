import CodeSection from '@components/codeSection/CodeSection'
import Layout from '@components/Layout'
import PropsSection from '@components/propsSection/PropsSection'
import ViewSection from '@components/viewSection/ViewSection'

export default function Home() {
  return (
    <Layout>
      <ViewSection />
      <PropsSection />
      <CodeSection />
    </Layout>
  )
}
