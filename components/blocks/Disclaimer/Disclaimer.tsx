/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
export default function Example() {
  return (
    <div className="bg-white">
      <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:py-32 lg:px-8 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Disclaimer</h2>
          <p className="max-w-3xl mt-3 text-lg text-gray-500">
            Dr Erika Drewes is not considered a replacement for your primary care
            physician but works in conjuction with your current health care
            team. All patients need to have a primary care physician to
            cover emergencies and routine care and screening.
          </p>
        </div>
      </div>
    </div>
  )
}
