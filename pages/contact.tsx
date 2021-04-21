import { Container, Layout } from '@/components/common'
import { MailIcon, MenuIcon, PhoneIcon, XIcon } from '@/components/icons'

const offices = [
  {
    id: 1,
    title: 'Optimal Health',
    address: ['2nd Floor', 'Dean Street Arcade', 'Cnr Dean and Main Street', 'Newlands 7700'],
    phone: '+27 (0) 21 201 7036',
    email: 'reception@drdrewes.com'
  }
]

export default function Example() {
  return (
    <Layout>
      <div className='min-h-screen bg-white'>

        <main className='overflow-hidden'>
          {/* HeaderDecoration */}
          <Container>
            <div className='bg-warm-gray-50'>
              <div className='py-24 lg:py-32'>
                <div className='relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8'>
                  <h1
                    className='font-display text-4xl font-extrabold tracking-tight text-warm-gray-900 sm:text-5xl lg:text-6xl'>
                    Get in touch
                  </h1>
                  <p className='mt-6 text-xl text-warm-gray-500 max-w-3xl'>
                    Our offices are securely located in the Dean Street Arcade in Newlands with plenty parking
                    downstairs.
                  </p>
                </div>
              </div>
            </div>
          </Container>

          <section className='text-gray-600 body-font relative'>
            <div className='absolute inset-0 bg-gray-300'>
              <iframe width='100%' height='100%' frameBorder='0' marginHeight={0} marginWidth={0} title='map'
                      scrolling='no'
                      src='https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=2FH7%2B9H+(Optimal%20Health)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed'
                      style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }} />
            </div>
            <div className='container px-5 py-24 mx-auto flex'>
              <div
                className='lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md'>
                <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>Address</h2>
                <div className='mt-10'>
                  {offices.map((office) => (
                    <div key={office.id}>
                      <h3 className='text-lg font-medium text-warm-gray-900'>{office.title}</h3>
                      <p className='mt-2 text-base text-warm-gray-500'>
                        {office.address.map((line) => (
                          <span key={line} className='block'>
                          {line}
                        </span>
                        ))}
                      </p>
                      <dl className='mt-8 space-y-6'>
                        <dt>
                          <span className='sr-only'>Phone number</span>
                        </dt>
                        <dd className='flex text-base text-teal-50'>
                          <PhoneIcon className='flex-shrink-0 w-6 h-6 text-blue-200' strokeColor='text-blue-500'
                                 aria-hidden='true' />
                          <span className='ml-3'>{office.phone}</span>
                        </dd>
                        <dt>
                          <span className='sr-only'>Email</span>
                        </dt>
                        <dd className='flex text-base text-teal-50'>
                          <MailIcon className='flex-shrink-0 w-6 h-6 text-blue-200' strokeColor='text-blue-500'
                                aria-hidden='true' />
                          <span className='ml-3'>{office.email}</span>
                        </dd>
                      </dl>
                    </div>
                  ))}
                </div>
                <p className='text-xs text-gray-500 mt-3'>
                  Underground parking is available that can accessed fom the Main Street entrance.
                </p>
              </div>
            </div>
          </section>

        </main>

      </div>
    </Layout>
  )
}
