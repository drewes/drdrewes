import { Layout } from '@/components/common'
import { Disclaimer, Hero, FeatureList, Mission } from '@/components/blocks'

const Index = () => {
  return (
    <Layout decoration>
      <Hero />
      <Mission />
      <FeatureList />
      <Disclaimer />
    </Layout>
  )
}

export default Index
