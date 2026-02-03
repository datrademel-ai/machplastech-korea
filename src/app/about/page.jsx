export const metadata = {
  title: 'About Us - Machplastech',
  description: 'Learn about Machplastech, a leading precision manufacturing and engineering plastics company in Korea',
}

export default function About() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-900">About Machplastech</h1>
      <p className="text-xl text-center text-gray-600 mb-16">Precision Manufacturing & Engineering Excellence</p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-900">Our Company</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Machplastech Co., Ltd. is a comprehensive manufacturing and trading company specializing in precision machining, engineering plastics distribution, and industrial automation solutions.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Based in Yangsan, South Korea, we serve diverse industries including semiconductor, automotive, food machinery, and production equipment sectors with our advanced manufacturing capabilities and extensive material sourcing network.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With our Australian branch in Melbourne, we provide seamless service connecting Korean manufacturing excellence with global markets.
          </p>
        </div>

        <div className="bg-gray-100 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">Core Values</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">🎯 Quality First</h3>
              <p className="text-gray-700">Commitment to highest precision standards in every product and service</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">🤝 Customer Focus</h3>
              <p className="text-gray-700">Understanding client needs and delivering tailored solutions</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">🌐 Global Vision</h3>
              <p className="text-gray-700">Expanding our reach while maintaining local expertise</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-5xl mb-4">⚙️</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">Manufacturing</h3>
            <p className="text-gray-700">State-of-the-art CNC and MCT equipment for precision OEM/ODM production</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">Materials</h3>
            <p className="text-gray-700">Premium engineering plastics from leading global manufacturers</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">Automation</h3>
            <p className="text-gray-700">Complete automation solutions for agriculture and industrial sectors</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-12 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Global Presence</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">🇰🇷 Korea Headquarters</h3>
            <p className="mb-2"><strong>Machplastech Co., Ltd.</strong></p>
            <p className="mb-2">Yangsan, Gyeongsangnam-do</p>
            <p className="mb-2">Phone: +82 10 7671-8123</p>
            <p className="mb-2">Email: admin@machplastech.com</p>
            <p className="mt-4 text-blue-200">Manufacturing & Distribution Center</p>
          </div>

          <div className="bg-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4">🇦🇺 Australia Branch</h3>
            <p className="mb-2"><strong>Machplastech Australia</strong></p>
            <p className="mb-2">419 Malvern Rd, South Yarra VIC 3141</p>
            <p className="mb-2">Phone: +61 493 468 123</p>
            <p className="mb-2">Email: admin@machplastech.com.au</p>
            <p className="mt-4 text-blue-200">Trade & Business Development</p>
          </div>
        </div>
      </div>
    </div>
  )
}
