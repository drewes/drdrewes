import { Container, Layout } from '@/components/common'
import { Card } from '@/components/ui'

const projects = [
  {
    title: 'My Emma',
    description: `What is you could look up any information in the world? Webpages, images, videos
    and more. Google has many features to help you find exactly what you're looking
    for.`,
    imgSrc: '/images/wheelchair-kids.jpg',
    href: 'https://myemma.org'
  },
  {
    title: 'BDA',
    description: `Imagine being able to travel back in time or to the future. Simple turn the knob
    to the desired date and press "Go". No more worrying about lost keys or
    forgotten handphones with this simple yet affordable solution.`,
    imgSrc: '/images/boy-in-wheelchair.jpg',
    href: 'https://www.facebook.com/BDAtherapyAfrica/'
  }
]

export default function Projects() {
  return (
    <Layout>
      <Container>
        <div className='divide-y divide-gray-200 dark:divide-gray-700'>
          <div className='pt-6 pb-8 space-y-2 md:space-y-5'>
            <h1
              className='font-display text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14'>
              Projects
            </h1>
            <p className='text-lg leading-7 text-gray-500 dark:text-gray-400'>
              I'm involved in various projects that provide an important platform for my medical work
            </p>
          </div>
          <div className='container py-12'>
            <div className='flex flex-wrap -m-4'>
              {projects.map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  description={d.description}
                  imgSrc={d.imgSrc}
                  href={d.href}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
