'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Footer() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Machplastech Co., Ltd.',
      subtitle: 'Precision Manufacturing & Engineering Plastics',
      location: 'Yangsan, Gyeongsangnam-do, South Korea',
      contact: 'Contact',
      phone: 'Phone',
      email: 'Email',
      australia: 'Australia',
      business: 'Business',
      services: {
        machining: 'Precision Machining',
        plastics: 'Engineering Plastics',
        automation: 'Automation Systems',
        export: 'Global Export'
      },
      copyright: '2025 Machplastech Co., Ltd. All rights reserved.'
    },
    ko: {
      title: '㈜ 마하플라스텍',
      subtitle: '정밀 제조 및 엔지니어링 플라스틱',
      location: '경상남도 양산시 상북면 석계산단 2길 113 A, 대한민국',
      contact: '연락처',
      phone: '전화',
      email: '이메일',
      australia: '호주',
      business: '사업 분야',
      services: {
        machining: '정밀 가공',
        plastics: '엔지니어링 플라스틱',
        automation: '자동화 시스템',
        export: '글로벌 수출'
      },
      copyright: '2025 ㈜마플라스텍. All rights reserved.'
    }
  }

  const t = content[language]

  return (
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">{t.title}</h3>
          <p className="text-gray-300 mb-2">{t.subtitle}</p>
          <p className="text-gray-400">{t.location}</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">{t.contact}</h3>
          <p className="text-gray-300 mb-2">{t.phone}: +82 10 7671-8123</p>
          <p className="text-gray-300 mb-2">{t.email}: admin@machplastech.com</p>
          <p className="text-gray-400 mt-4">{t.australia}: +61 493 468 123</p>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4 text-blue-400">{t.business}</h3>
          <p className="text-gray-300">{t.services.machining}</p>
          <p className="text-gray-300">{t.services.plastics}</p>
          <p className="text-gray-300">{t.services.automation}</p>
          <p className="text-gray-300">{t.services.export}</p>
        </div>
      </div>

      <div className="text-center pt-8 border-t border-gray-700 text-gray-400">
        <p>&copy; {t.copyright}</p>
      </div>
    </footer>
  )
}
