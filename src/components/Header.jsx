import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logo.png" 
            alt="Machplastech" 
            width={200} 
            height={50}
            className="h-12 w-auto"
            priority
          />
        </Link>
        
        <ul className="hidden md:flex gap-8">
          <li><Link href="/" className="text-gray-700 hover:text-blue-900 font-medium transition">Home</Link></li>
          <li><Link href="/about" className="text-gray-700 hover:text-blue-900 font-medium transition">About</Link></li>
          <li><Link href="/machining" className="text-gray-700 hover:text-blue-900 font-medium transition">Machining</Link></li>
          <li><Link href="/plastics" className="text-gray-700 hover:text-blue-900 font-medium transition">Plastics</Link></li>
          <li><Link href="/automation" className="text-gray-700 hover:text-blue-900 font-medium transition">Automation</Link></li>
          <li><Link href="/contact" className="text-gray-700 hover:text-blue-900 font-medium transition">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
