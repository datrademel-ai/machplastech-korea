import Link from 'next/link'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-24 px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">MACHPLASTECH</h1>
        <p className="text-2xl mb-2 font-light">Precision Manufacturing & Engineering Excellence</p>
        <p className="text-xl mb-8">We Manufacture. We Supply. We Deliver.</p>
        <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition">
          Get Started →
        </Link>
      </section>

      {/* Business Divisions */}
      <section className="max-w-7xl mx-auto py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">Our Business</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/machining" className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition group">
            <div className="text-5xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900 group-hover:text-blue-700">Precision Machining</h3>
            <p className="text-gray-700 mb-4">CNC & MCT precision manufacturing for semiconductor, automotive, and industrial equipment</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• OEM/ODM Manufacturing</li>
              <li>• CNC Machining Centers</li>
              <li>• Laser Marking</li>
              <li>• Quality Certification</li>
            </ul>
          </Link>

          <Link href="/plastics" className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition group">
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900 group-hover:text-blue-700">Engineering Plastics</h3>
            <p className="text-gray-700 mb-4">Premium engineering plastic materials from global manufacturers</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• POM, PA6/PA66, PEEK</li>
              <li>• PPS, PTFE Materials</li>
              <li>• Custom Sourcing</li>
              <li>• Technical Support</li>
            </ul>
          </Link>

          <Link href="/automation" className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition group">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900 group-hover:text-blue-700">Automation Systems</h3>
            <p className="text-gray-700 mb-4">Complete automation solutions for agriculture and industrial sectors</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Agricultural Automation</li>
              <li>• Industrial Systems</li>
              <li>• Production Lines</li>
              <li>• Global Export</li>
            </ul>
          </Link>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Why Machplastech</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Precision Quality</h3>
              <p className="text-gray-600">Advanced CNC and MCT equipment ensuring highest precision standards</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Global Network</h3>
              <p className="text-gray-600">Partnerships with leading material manufacturers worldwide</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Fast Delivery</h3>
              <p className="text-gray-600">Efficient production and logistics for timely delivery</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Full Support</h3>
              <p className="text-gray-600">Technical consultation and after-sales service</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto py-20 px-8">
        <div className="bg-blue-900 rounded-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us for precision manufacturing and engineering solutions</p>
          <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}
