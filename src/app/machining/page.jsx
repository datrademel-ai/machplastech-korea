export const metadata = {
  title: 'Precision Machining - Machplastech',
  description: 'CNC and MCT precision manufacturing services for semiconductor, automotive, and industrial equipment',
}

export default function Machining() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-900">Precision Machining</h1>
      <p className="text-xl text-center text-gray-600 mb-16">CNC & MCT Manufacturing Excellence</p>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-900">Our Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">CNC Machining</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">✓</span>
                <span>3-axis, 4-axis, and 5-axis CNC machining centers</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">✓</span>
                <span>High-precision tolerance: ±0.01mm</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">✓</span>
                <span>Material: Metals, plastics, composites</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">✓</span>
                <span>Prototyping to mass production</span>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Machining Centers (MCT)</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">✓</span>
                <span>Vertical and horizontal machining centers</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">✓</span>
                <span>Complex part manufacturing</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">✓</span>
                <span>24/7 production capability</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-900 mr-2">✓</span>
                <span>Quality inspection systems</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-900">Industries We Serve</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-50 border-l-4 border-blue-900 p-6 rounded">
            <h3 className="text-xl font-bold mb-3 text-blue-900">🔬 Semiconductor</h3>
            <p className="text-gray-700 text-sm">Precision components for semiconductor manufacturing equipment</p>
          </div>

          <div className="bg-gray-50 border-l-4 border-blue-900 p-6 rounded">
            <h3 className="text-xl font-bold mb-3 text-blue-900">🍜 Food Machinery</h3>
            <p className="text-gray-700 text-sm">Hygienic parts for food processing equipment</p>
          </div>

          <div className="bg-gray-50 border-l-4 border-blue-900 p-6 rounded">
            <h3 className="text-xl font-bold mb-3 text-blue-900">🚗 Automotive</h3>
            <p className="text-gray-700 text-sm">High-precision automotive components</p>
          </div>

          <div className="bg-gray-50 border-l-4 border-blue-900 p-6 rounded">
            <h3 className="text-xl font-bold mb-3 text-blue-900">⚙️ Production Equipment</h3>
            <p className="text-gray-700 text-sm">Custom parts for industrial machinery</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-12 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Our Process</h2>
        <div className="grid md:grid-cols-5 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">1</div>
            <h3 className="font-bold mb-2">Consultation</h3>
            <p className="text-sm text-gray-600">Requirements & specifications</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
            <h3 className="font-bold mb-2">Design</h3>
            <p className="text-sm text-gray-600">CAD/CAM programming</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
            <h3 className="font-bold mb-2">Prototype</h3>
            <p className="text-sm text-gray-600">Sample production & testing</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">4</div>
            <h3 className="font-bold mb-2">Production</h3>
            <p className="text-sm text-gray-600">Mass manufacturing</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 bg-blue-900 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">5</div>
            <h3 className="font-bold mb-2">Delivery</h3>
            <p className="text-sm text-gray-600">Quality check & shipment</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 rounded-xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Need Precision Machining?</h2>
        <p className="text-xl mb-8 opacity-90">Contact us for your custom manufacturing needs</p>
        <a href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition">
          Request Quote
        </a>
      </div>
    </div>
  )
}
