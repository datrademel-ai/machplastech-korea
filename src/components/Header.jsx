'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Header() {
  const { language, toggleLanguage } = useLanguage()
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const nav = {
    en: {
      home: 'Home',
      about: 'About',
      machining: {
        title: 'Machining',
        items: [
          { name: 'CNC Turning', desc: 'Lathe machining for cylindrical parts' },
          { name: 'CNC Milling', desc: 'Complex surface machining' },
          { name: '5-Axis Machining', desc: '3D complex part processing' },
          { name: 'Grinding', desc: 'Precision surface finishing' },
          { name: 'EDM Processing', desc: 'Wire & Die-sinking EDM' },
          { name: 'Laser Cutting', desc: 'High-precision cutting' }
        ]
      },
      plastics: {
        title: 'Plastics',
        items: [
          { name: 'POM (Polyacetal)', desc: 'High strength, low friction' },
          { name: 'PA6/PA66 (Nylon)', desc: 'Wear resistant, strong' },
          { name: 'PEEK', desc: 'High-temp thermoplastic' },
          { name: 'PPS', desc: 'Chemical resistant' },
          { name: 'PTFE (Teflon)', desc: 'Lowest friction' },
          { name: 'Custom Materials', desc: 'Specialized sourcing' }
        ]
      },
      automation: {
        title: 'Automation',
        items: [
          { name: 'Agricultural Automation', desc: 'Smart farming solutions' },
          { name: 'Industrial Automation', desc: 'Factory automation systems' },
          { name: 'Production Lines', desc: 'Assembly line automation' },
          { name: 'Robotic Systems', desc: 'Industrial robot integration' },
          { name: 'Quality Control', desc: 'Automated inspection' },
          { name: 'System Integration', desc: 'Complete solutions' }
        ]
      },
      export: {
        title: 'Global Export',
        items: [
          { name: 'Raw Material Sourcing', desc: 'Global plastic material procurement' },
          { name: 'Buyer Sourcing', desc: 'International buyer matching' },
          { name: 'Export Agency', desc: 'Export business support' },
          { name: 'International Sales', desc: 'Direct overseas sales' }
        ]
      },
      contact: 'Contact'
    },
    ko: {
      home: '홈',
      about: '회사소개',
      machining: {
        title: '정밀가공',
        items: [
          { name: 'CNC 선반 가공', desc: '원통형 부품 가공' },
          { name: 'CNC 밀링 가공', desc: '복잡한 표면 가공' },
          { name: '5축 가공', desc: '3D 복합 부품 가공' },
          { name: '연삭 가공', desc: '정밀 표면 마무리' },
          { name: '방전 가공', desc: '와이어 & 형조 EDM' },
          { name: '레이저 커팅', desc: '고정밀 절단' }
        ]
      },
      plastics: {
        title: '엔지니어링 플라스틱',
        items: [
          { name: 'POM (폴리아세탈)', desc: '고강도, 저마찰' },
          { name: 'PA6/PA66 (나일론)', desc: '내마모성, 고강도' },
          { name: 'PEEK', desc: '고온용 열가소성' },
          { name: 'PPS', desc: '내화학성' },
          { name: 'PTFE (테프론)', desc: '최저 마찰계수' },
          { name: '맞춤 소재', desc: '특수 소재 소싱' }
        ]
      },
      automation: {
        title: '자동화 시스템',
        items: [
          { name: '농업 자동화', desc: '스마트팜 솔루션' },
          { name: '산업 자동화', desc: '공장 자동화 시스템' },
          { name: '생산 라인', desc: '조립 라인 자동화' },
          { name: '로봇 시스템', desc: '산업용 로봇 통합' },
          { name: '품질 관리', desc: '자동 검사 시스템' },
          { name: '시스템 통합', desc: '토탈 솔루션' }
        ]
      },
      export: {
        title: '글로벌 수출',
        items: [
          { name: '원자재 소싱', desc: '글로벌 플라스틱 원료 조달' },
          { name: '바이어 소싱', desc: '해외 바이어 매칭' },
          { name: '수출 대행', desc: '수출 업무 지원' },
          { name: '해외 판매', desc: '직접 해외 판매' }
        ]
      },
      contact: '문의'
    }
  }

  const t = nav[language]

  const DropdownMenu = ({ items, isOpen }) => {
    if (!isOpen) return null
    
    return (
      <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50">
        {items.map((item, i) => (
          <div 
            key={i} 
            className="px-4 py-3 hover:bg-blue-50 cursor-pointer transition"
          >
            <div className="font-medium text-gray-800">{item.name}</div>
            <div className="text-sm text-gray-500">{item.desc}</div>
          </div>
        ))}
      </div>
    )
  }

  const NavItemWithDropdown = ({ navKey, data }) => {
    const isOpen = activeDropdown === navKey
    
    return (
      <li 
        className="relative"
        onMouseEnter={() => setActiveDropdown(navKey)}
        onMouseLeave={() => setActiveDropdown(null)}
      >
        <Link 
          href={`/${navKey === 'export' ? 'export' : navKey}`}
          className="text-gray-700 hover:text-blue-900 font-medium transition flex items-center gap-1"
        >
          {data.title}
          <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </Link>
        <DropdownMenu items={data.items} isOpen={isOpen} />
      </li>
    )
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
        
        {/* Desktop Navigation */}
        <div className="flex items-center gap-8">
          <ul className="hidden lg:flex gap-8 items-center">
            <li>
              <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium transition">
                {t.home}
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-700 hover:text-blue-900 font-medium transition">
                {t.about}
              </Link>
            </li>
            <NavItemWithDropdown navKey="machining" data={t.machining} />
            <NavItemWithDropdown navKey="plastics" data={t.plastics} />
            <NavItemWithDropdown navKey="automation" data={t.automation} />
            <NavItemWithDropdown navKey="export" data={t.export} />
            <li>
              <Link href="/contact" className="text-gray-700 hover:text-blue-900 font-medium transition">
                {t.contact}
              </Link>
            </li>
          </ul>

          <button 
            onClick={toggleLanguage}
            className="px-4 py-2 text-sm font-semibold text-blue-900 hover:bg-blue-50 rounded-lg transition border border-blue-900"
          >
            {language === 'en' ? 'KOR' : 'ENG'}
          </button>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 py-4 px-8">
          <ul className="space-y-4">
            <li><Link href="/" className="block text-gray-700 font-medium">{t.home}</Link></li>
            <li><Link href="/about" className="block text-gray-700 font-medium">{t.about}</Link></li>
            <li>
              <div className="font-medium text-gray-900 mb-2">{t.machining.title}</div>
              <ul className="pl-4 space-y-2">
                {t.machining.items.map((item, i) => (
                  <li key={i} className="text-gray-600 text-sm">{item.name}</li>
                ))}
              </ul>
            </li>
            <li>
              <div className="font-medium text-gray-900 mb-2">{t.plastics.title}</div>
              <ul className="pl-4 space-y-2">
                {t.plastics.items.map((item, i) => (
                  <li key={i} className="text-gray-600 text-sm">{item.name}</li>
                ))}
              </ul>
            </li>
            <li>
              <div className="font-medium text-gray-900 mb-2">{t.automation.title}</div>
              <ul className="pl-4 space-y-2">
                {t.automation.items.map((item, i) => (
                  <li key={i} className="text-gray-600 text-sm">{item.name}</li>
                ))}
              </ul>
            </li>
            <li>
              <div className="font-medium text-gray-900 mb-2">{t.export.title}</div>
              <ul className="pl-4 space-y-2">
                {t.export.items.map((item, i) => (
                  <li key={i} className="text-gray-600 text-sm">{item.name}</li>
                ))}
              </ul>
            </li>
            <li><Link href="/contact" className="block text-gray-700 font-medium">{t.contact}</Link></li>
          </ul>
        </div>
      )}
    </header>
  )
}
