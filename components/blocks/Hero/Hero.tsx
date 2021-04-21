import { HeaderDecoration } from '@/components/ui'

const Hero = () => {
  return (
    <div className='mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 lg:mt-32 mb-32'>
      <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
        <div className='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
          <h1>
            <span
              className='block text-sm font-semibold uppercase tracking-wide text-blue-dark sm:text-base lg:text-sm xl:text-base'
            >
              Functional Medicine
            </span>
            <span className='mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl'>
              <span className='font-display block text-gray-900'>Your partner for</span>
              <span className='font-display block text-pink-dark'>optimal health</span>
            </span>
          </h1>
          <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
            I have a special interest in women’s health and hormonal balance, connective tissue health and
            rehabilitation (especially cerebral palsy), gut health and chronic inflammation reactivation syndrome.
          </p>
        </div>
        <div
          className='mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
          <div className='relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md'>
            <button
              type='button'
              className='relative block w-full bg-white rounded-lg overflow-hidden focus:outline-none'
            >
              <img
                className='w-full'
                src='/assets/images/erika-against-wall.jpg'
                alt=''
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero