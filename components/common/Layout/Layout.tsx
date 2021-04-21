import { Alert, Footer, Meta, Navbar } from '@/components/common'
import { HeaderDecoration } from '@/components/ui'

type Props = {
  preview?: boolean
  children: React.ReactNode
  decoration?: boolean
}

const Layout = ({ preview, children, decoration }: Props) => {
  return (
    <>
      <Meta />
      <div className='min-h-screen relative bg-white overflow-hidden'>
        <Alert preview={preview} />
        {decoration && (
          <div className='hidden lg:block lg:absolute lg:inset-0' aria-hidden='true'>
            <HeaderDecoration className='absolute top-0 left-1/2 transform translate-x-64 -translate-y-8' />
          </div>
        )}
        <Navbar />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
