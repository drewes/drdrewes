const navigation = {
  main: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ],
}

const Footer = () => {
  return (
    <footer className='bg-white mt-24 sm:mt-12'>
      <div className={'mx-auto max-w-md py-12 px-4 overflow-hidden sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8'}>
        <nav className='-mx-5 -my-2 flex flex-wrap justify-center' aria-label='Footer'>
          {navigation.main.map((item) => (
            <div key={item.name} className='px-5 py-2'>
              <a href={item.href} className='text-base text-gray-500 hover:text-gray-900'>
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className='mt-8 text-center text-base text-gray-400'>
          &copy; 2021 Dr Erika Drewes. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
