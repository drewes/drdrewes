import { Container, Layout } from '@/components/common'

export default function About() {
  return (
    <Layout>
      <Container>
        <div>
          <div className='items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0'>
            <div className='flex flex-col items-center pt-8 space-x-2'>
              <img src='/assets/images/erika.jpg' alt='avatar' className='w-48 h-48 rounded-full' />
              <h3 className='font-display pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight'>
                Dr Erika Drewes
              </h3>
              <div className='text-gray-500 dark:text-gray-400'>Functional & Family Medical Practitioner</div>
              <div className='text-gray-500 dark:text-gray-400'>MBChB, MMedFamMed, Dip. Obs</div>
            </div>
            <div className='pt-8 pb-8 prose dark:prose-dark max-w-none xl:col-span-2'>
              <p>Dr Erika Drewes is a specialist family physician with 20 years of experience in South Africa and the
                United Kingdom.
              </p>
              <p>
                After qualifying as a medical doctor, Erika worked in various private and public hospitals in Gauteng,
                KZN and the UK. During this time she completed a Masters in Family Medicine ( UKZN), Diploma in
                Obstetrics ( Colleges of Medicine) and the Vocational Training Programme of McCord Hospital in Durban.
                She became frustrated with the limitations GP consultations which were often to too short to unpack the
                root cause of the problem as well as the tendency in these contexts to manage symptoms instead of
                treating the cause of a disease. She learnt to be more reflective about her patient relationships and
                she became aware of important Family Medicine principles such as understanding the context of person and
                learning to appreciate the subjective side of medicine. She also understood that a Family Physicians
                first commitment is to a person and not to a body of knowledge, special disease or treatment. She
                started to redefine her practice to be more integrative in an attempt to address conditions more
                holistically.
              </p>
              <p>
                At this time she relocated to Germany and there she was able to explore several complementary
                modalities of medicine. She continued her training by attending various courses and workshops in
                mitochondrial medicine, gut health, connective tissue science and functional medicine. This journey of
                personal development culminated in her joining the Hormonal Health practice in 2019.</p>
              <p>
                Erika’s interests include women’s health and hormonal balance, connective tissue health and
                rehabilitation ( especially cerebral palsy), gut health and chronic inflammation reactivation
                syndrome.
              </p>
              <p>
                She is married to Helmut and they have 2 children.
              </p>
              <p>
                Erika looks forward to meeting you and assist you in your health journey.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}
