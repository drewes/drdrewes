import { CheckIcon } from '@/components/icons'

const features = [
  {
    name: 'Functional & integrative medicine',
    description: 'Our functional approach corrects imbalances in the body. We use the best of main stream and complimentary medicine.'
  },
  {
    name: 'Hormone balancing',
    description: 'We assess the whole hormonal system to see how these imbalances impact the symptoms you experience. '
  },
  {
    name: 'Lyme disease & chronic infections',
    description: 'We offer cutting edge tests through international accredited laboratories to help confirm the diagnosis.'
  },
  {
    name: 'CIRS & mold illness',
    description: 'Patients with CIRS often present with multiple problems. It is critical to identify the cause of the toxicity and remove it.'
  },
  {
    name: 'IV therapy',
    description: 'We offer a range of tailored intravenous treatments.'
  },
  {
    name: 'Heavy metal toxicity',
    description: 'We are able to do heavy metal testing to rule out heavy metal intoxication.'
  }
]

export default function Example() {
  return (
    <div className="bg-white">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:py-24 lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <div>
          <h2 className="text-base font-semibold tracking-wide uppercase text-pink-dark">Optimise your health</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 font-display">Targeted interventions that impact your well-being</p>
          <p className="mt-4 text-lg text-gray-500">
            We strive to create an environment of acceptance,
            hope and healing. We believe optimal health is achieved through
            helping restore the functional pathways of the body and through
            preventing disease by correcting deficiencies at the earliest
            opportunity. We believe optimal health is possible for every
            atient regardless of their medical condition.
            </p>
        </div>
        <div className="mt-12 lg:mt-0 lg:col-span-2">
          <dl className="space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col sm:gap-x-6 sm:gap-y-10 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute w-6 h-6 text-green-light" aria-hidden="true" />
                  <p className="text-lg font-medium leading-6 text-gray-900 ml-9">{feature.name}</p>
                </dt>
                <dd className="mt-2 text-base text-gray-500 ml-9">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}