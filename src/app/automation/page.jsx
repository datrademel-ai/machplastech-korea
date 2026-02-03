export const metadata = {
  title: 'Automation Systems - Machplastech',
  description: 'Complete automation solutions for agriculture and industrial sectors',
}

export default function Automation() {
  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-900">Automation Systems</h1>
      <p className="text-xl text-center text-gray-600 mb-16">Exporting Korean Technology to Global Markets</p>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-900">Our Solutions</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-6xl mb-6">🌾</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Agricultural Automation</h3>
            <p className="text-gray-700 mb-4">Smart farming solutions for modern agriculture</p>
            <ul className="space-y-3 text-gray-600">
              <li>• Automated harvesting systems</li>
              <li>• Smart irrigation control</li>
              <li>• Crop monitoring systems</li>
              <li>• Sorting & packaging automation</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-6xl mb-6">🏭</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Industrial Automation</h3>
            <p className="text-gray-700 mb-4">Complete automation for manufacturing facilities</p>
            <ul className="space-y-3 text-gray-600">
              <li>• Robotic systems</li>
              <li>• Conveyor automation</li>
              <li>• Quality control systems</li>
              <li>• Process automation</li>
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-6xl mb-6">⚙️</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">Production Automation</h3>
            <p className="text-gray-700 mb-4">Streamlined production line solutions</p>
            <ul className="space-y-3 text-gray-600">
              <li>• Assembly line automation</li>
              <li>• Material handling systems</li>
              <li>• Packaging automation</li>
              <li>• Integration services</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-12 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Why Korean Technology</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">Proven Quality</h3>
            <p className="text-gray-600">Reliable systems with proven track records</p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">Innovation</h3>
            <p className="text-gray-600">Cutting-edge technology and continuous improvement</p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">Cost-Effective</h3>
            <p className="text-gray-600">Competitive pricing with high performance</p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">Full Support</h3>
            <p className="text-gray-600">Installation, training, and maintenance services</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">Global Export</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-12">
          <p className="text-lg text-gray-700 text-center mb-8">
            We export Korean automation technology to markets worldwide, with particular focus on Australia, Southeast Asia, and North America.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Australia</h3>
              <p className="text-gray-600">Agricultural & industrial automation</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Southeast Asia</h3>
              <p className="text-gray-600">Manufacturing automation systems</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-blue-900">North America</h3>
              <p className="text-gray-600">Advanced production solutions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 rounded-xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Interested in Automation?</h2>
        <p className="text-xl mb-8 opacity-90">Let's discuss your automation needs and find the perfect solution</p>
        <a href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition">
          Contact Us
        </a>
      </div>
    </div>
  )
}
