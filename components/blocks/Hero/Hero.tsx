import { HeaderDecoration } from '@/components/ui'

const Hero = () => {
  return (
    <div className='px-4 mx-auto mt-16 mb-32 max-w-7xl sm:mt-24 sm:px-6 lg:mt-32'>
      <div className='lg:grid lg:grid-cols-12 lg:gap-8'>
        <div className='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
          <h1>
            <span
              className='block text-sm font-semibold tracking-wide uppercase text-blue-dark sm:text-base lg:text-sm xl:text-base'
            >
              Functional Medicine
            </span>
            <span className='block mt-1 text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl'>
              <span className='block text-gray-900 font-display'>Your partner for</span>
              <span className='block font-display text-pink-dark'>optimal health</span>
            </span>
          </h1>
          <p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl'>
            Dr Erika is a functional/integrative HPCSA registered Family Physician.
            She uses an evidence-based comprehensive approach to identify the
            root causes that may lead to imbalance. Every patient is unique and
            the approach aims at personalized care that is tailored to the
            individual. She will seek the most gentle approach possible and believes
            in the power of creating realistic hopefulness for each patient
            regardless of their health challenge.
            </p>
        </div>
        <div
          className='relative mt-12 sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
          <div className='relative w-full mx-auto rounded-lg shadow-lg lg:max-w-md'>
            <button
              type='button'
              className='relative block w-full overflow-hidden bg-white rounded-lg focus:outline-none'
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