import { CheckIcon } from '@/components/icons'

const features = [
  {
    name: 'Integrative medicine',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  { name: 'Functional medicine', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  {
    name: 'Chronic illness',
    description: 'You can manage phone, email and chat conversations all from a single mailbox.',
  },
  { name: 'Lyme disease', description: 'You can manage phone, email and chat conversations all from a single mailbox.' },
  { name: 'Chronic Inflammatory Response Syndrome', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Hormone balancing', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'Weight loss', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
  { name: 'IV therapy', description: 'Find what you need with advanced filters, bulk actions, and quick views.' },
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold text-pink-dark uppercase tracking-wide">Optimise your health</h2>
          <p className="font-display mt-2 text-3xl font-extrabold text-gray-900">Targeted interventions that impact your well-being</p>
          <p className="mt-4 text-lg text-gray-500">
            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec.
          </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-4 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-light" aria-hidden="true" />
                  <p className="ml-9 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}