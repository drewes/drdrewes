import { Alert, Footer, Meta } from '@/components/common'

type Props = {
  preview?: boolean
  children: React.ReactNode
}

const LandingLayout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className='min-h-screen'>
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default LandingLayout
