export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">Machplastech Co., Ltd.</h3>
          <p className="text-gray-300 mb-2">Precision Manufacturing & Engineering Plastics</p>
          <p className="text-gray-400">Yangsan, Gyeongsangnam-do</p>
          <p className="text-gray-400">South Korea</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">Contact</h3>
          <p className="text-gray-300 mb-2">Phone: +82 10 7671-8123</p>
          <p className="text-gray-300 mb-2">Email: admin@machplastech.com</p>
          <p className="text-gray-400 mt-4">Australia: +61 493 468 123</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">Business</h3>
          <p className="text-gray-300">Precision Machining</p>
          <p className="text-gray-300">Engineering Plastics</p>
          <p className="text-gray-300">Automation Systems</p>
          <p className="text-gray-300">Global Export</p>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-gray-700 text-gray-400">
        <p>&copy; 2025 Machplastech Co., Ltd. All rights reserved.</p>
      </div>
    </footer>
  )
}
