import Link from 'next/link'
import { Container } from '@/components/common'
import { XIcon } from '@/components/icons'

type Props = {
  preview?: boolean
}

const Alert = ({ preview }: Props) => {
  return (
      <div className='relative bg-blue-dark z-50'>
        <div className='max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8'>
          <div className='pr-16 sm:text-center sm:px-16'>
            <p className='font-medium text-white'>
              <span className="hidden md:inline">Big news! We've moved offices. Visit us at</span>
              <span className='md:hidden'>Visit us at</span>
              <span className='block sm:ml-2 sm:inline-block'>
                <Link href='/contact'>
              <a className='text-white font-bold underline'>
                {' '}
                Dean Street Arcade, Newlands <span aria-hidden='true'>&rarr;</span>
              </a>
                </Link>
            </span>
            </p>
          </div>
        </div>
      </div>
  )
}

export default Alert
