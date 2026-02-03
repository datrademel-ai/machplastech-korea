export const metadata = {
  title: 'Engineering Plastics - Machplastech',
  description: 'Premium engineering plastics distribution - POM, PA6, PEEK, PPS, PTFE and more',
}

export default function Plastics() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-900">Engineering Plastics</h1>
      <p className="text-xl text-center text-gray-600 mb-16">Premium Materials from Global Manufacturers</p>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-900">Our Materials</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">POM (Polyacetal)</h3>
            <p className="text-gray-700 mb-4">High strength, low friction, excellent dimensional stability</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Gears & bearings</li>
              <li>• Automotive parts</li>
              <li>• Precision components</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">PA6 / PA66 (Nylon)</h3>
            <p className="text-gray-700 mb-4">Superior mechanical properties, wear resistance, chemical stability</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Industrial components</li>
              <li>• Electrical parts</li>
              <li>• Structural applications</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">PEEK</h3>
            <p className="text-gray-700 mb-4">High-performance thermoplastic, extreme temperature resistance</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Aerospace applications</li>
              <li>• Medical devices</li>
              <li>• High-temp environments</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">PPS</h3>
            <p className="text-gray-700 mb-4">Excellent chemical resistance, high heat deflection temperature</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Chemical processing</li>
              <li>• Electrical connectors</li>
              <li>• Automotive under-hood</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">PTFE (Teflon)</h3>
            <p className="text-gray-700 mb-4">Lowest friction coefficient, excellent chemical inertness</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Seals & gaskets</li>
              <li>• Food processing</li>
              <li>• Chemical equipment</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Custom Materials</h3>
            <p className="text-gray-700 mb-4">Specialized materials sourcing for specific requirements</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>• Global sourcing network</li>
              <li>• Technical consultation</li>
              <li>• Material testing</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-12 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Why Choose Our Materials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">Global Brands</h3>
            <p className="text-gray-700">Partnership with leading manufacturers worldwide</p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">Quality Certified</h3>
            <p className="text-gray-700">All materials come with manufacturer certifications</p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">Technical Support</h3>
            <p className="text-gray-700">Expert guidance for material selection and application</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Industries</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">🔬</div>
            <h3 className="font-bold text-blue-900">Semiconductor</h3>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">🚗</div>
            <h3 className="font-bold text-blue-900">Automotive</h3>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-blue-900">Electronics</h3>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg text-center">
            <div className="text-4xl mb-3">🏥</div>
            <h3 className="font-bold text-blue-900">Medical</h3>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 rounded-xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Need Engineering Plastics?</h2>
        <p className="text-xl mb-8 opacity-90">Contact us for material consultation and quotation</p>
        <a href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition">
          Get Quote
        </a>
      </div>
    </div>
  )
}
