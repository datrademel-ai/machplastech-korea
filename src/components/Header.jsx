'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const { language, toggleLanguage } = useLanguage()

  const nav = {
    en: {
      home: 'Home',
      about: 'About',
      machining: 'Machining',
      plastics: 'Plastics',
      automation: 'Automation',
      contact: 'Contact'
    },
    ko: {
      home: '홈',
      about: '회사소개',
      machining: '정밀가공',
      plastics: '엔지니어링 플라스틱',
      automation: '자동화 시스템',
      contact: '문의'
    }
  }

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
        
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex gap-8">
            <li><Link href="/" className="text-gray-700 hover:text-blue-900 font-medium transition">{nav[language].home}</Link></li>
            <li><Link href="/about" className="text-gray-700 hover:text-blue-900 font-medium transition">{nav[language].about}</Link></li>
            <li><Link href="/machining" className="text-gray-700 hover:text-blue-900 font-medium transition">{nav[language].machining}</Link></li>
            <li><Link href="/plastics" className="text-gray-700 hover:text-blue-900 font-medium transition">{nav[language].plastics}</Link></li>
            <li><Link href="/automation" className="text-gray-700 hover:text-blue-900 font-medium transition">{nav[language].automation}</Link></li>
            <li><Link href="/contact" className="text-gray-700 hover:text-blue-900 font-medium transition">{nav[language].contact}</Link></li>
          </ul>

          <button 
            onClick={toggleLanguage}
            className="px-4 py-2 text-sm font-semibold text-blue-900 hover:bg-blue-50 rounded-lg transition border border-blue-900"
          >
            {language === 'en' ? 'KOR' : 'ENG'}
          </button>
        </div>
      </nav>
    </header>
  )
}
