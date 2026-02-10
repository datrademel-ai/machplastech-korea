'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Plastics() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Engineering Plastics',
      subtitle: 'Premium Materials from Global Manufacturers',
      materials: {
        title: 'Our Materials'
      },
      why: {
        title: 'Why Choose Our Materials',
        global: { title: 'Global Brands', desc: 'Partnership with leading manufacturers worldwide' },
        certified: { title: 'Quality Certified', desc: 'All materials come with manufacturer certifications' },
        support: { title: 'Technical Support', desc: 'Expert guidance for material selection and application' }
      },
      industries: {
        title: 'Industries',
        items: ['Semiconductor', 'Automotive', 'Electronics', 'Medical']
      },
      cta: {
        title: 'Need Engineering Plastics?',
        subtitle: 'Contact us for material consultation and quotation',
        button: 'Get Quote'
      }
    },
    ko: {
      title: '엔지니어링 플라스틱',
      subtitle: '글로벌 제조사의 프리미엄 소재',
      materials: {
        title: '취급 소재'
      },
      why: {
        title: '선택해야 하는 이유',
        global: { title: '글로벌 브랜드', desc: '전 세계 선도 제조업체와의 파트너십' },
        certified: { title: '품질 인증', desc: '모든 소재는 제조사 인증서 제공' },
        support: { title: '기술 지원', desc: '소재 선택 및 적용을 위한 전문가 지원' }
      },
      industries: {
        title: '적용 산업',
        items: ['반도체', '자동차', '전자', '의료']
      },
      cta: {
        title: '엔지니어링 플라스틱이 필요하신가요?',
        subtitle: '소재 상담 및 견적을 문의하세요',
        button: '견적 받기'
      }
    }
  }

  const t = content[language]

  const materials = [
    {
      title: language === 'en' ? 'POM (Polyacetal)' : 'POM (폴리아세탈)',
      desc: language === 'en' ? 'High strength, low friction, excellent dimensional stability' : '고강도, 저마찰, 우수한 치수 안정성',
      apps: language === 'en' ? ['Gears & bearings', 'Automotive parts', 'Precision components'] : ['기어 및 베어링', '자동차 부품', '정밀 부품'],
      image: '/images/plastics/POM.png'
    },
    {
      title: language === 'en' ? 'PA6 / PA66 (Nylon)' : 'PA6 / PA66 (나일론)',
      desc: language === 'en' ? 'Superior mechanical properties, wear resistance, chemical stability' : '우수한 기계적 특성, 내마모성, 화학적 안정성',
      apps: language === 'en' ? ['Industrial components', 'Electrical parts', 'Structural applications'] : ['산업용 부품', '전기 부품', '구조 응용'],
      image: '/images/plastics/PA6.jpg'
    },
    {
      title: 'ABS',
      desc: language === 'en' ? 'High impact resistance, good machinability, excellent surface finish' : '고충격 저항성, 우수한 가공성, 뛰어난 표면 마감',
      apps: language === 'en' ? ['Consumer electronics', 'Automotive interior', 'Prototype parts'] : ['가전제품', '자동차 내장재', '시제품 부품'],
      image: '/images/plastics/ABS.jpg'
    },
    {
      title: 'MP5000',
      desc: language === 'en' ? 'High-performance engineering plastic, excellent heat resistance' : '고성능 엔지니어링 플라스틱, 우수한 내열성',
      apps: language === 'en' ? ['Semiconductor equipment', 'High-temp applications', 'Precision machinery'] : ['반도체 장비', '고온 응용', '정밀 기계'],
      image: '/images/plastics/MP5000.jpg'
    },
    {
      title: language === 'en' ? 'PTFE (Teflon)' : 'PTFE (테프론)',
      desc: language === 'en' ? 'Lowest friction coefficient, excellent chemical inertness' : '최저 마찰 계수, 우수한 화학적 불활성',
      apps: language === 'en' ? ['Seals & gaskets', 'Food processing', 'Chemical equipment'] : ['씰 및 가스켓', '식품 가공', '화학 장비'],
      image: '/images/plastics/PTFE.png'
    },
    {
      title: language === 'en' ? 'Custom Materials' : '맞춤 소재',
      desc: language === 'en' ? 'Specialized materials sourcing for specific requirements' : '특정 요구사항을 위한 전문 소재 소싱',
      apps: language === 'en' ? ['Global sourcing network', 'Technical consultation', 'Material testing'] : ['글로벌 소싱 네트워크', '기술 상담', '소재 테스트'],
      image: '/images/plastics/custom.webp'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-900">{t.title}</h1>
      <p className="text-xl text-center text-gray-600 mb-16">{t.subtitle}</p>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-900">{t.materials.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={material.image}
                  alt={material.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">{material.title}</h3>
                <p className="text-gray-700 mb-4 text-sm">{material.desc}</p>
                <ul className="space-y-1 text-gray-600 text-sm">
                  {material.apps.map((app, j) => (
                    <li key={j}>• {app}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-12 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">{t.why.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">{t.why.global.title}</h3>
            <p className="text-gray-700">{t.why.global.desc}</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">{t.why.certified.title}</h3>
            <p className="text-gray-700">{t.why.certified.desc}</p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">{t.why.support.title}</h3>
            <p className="text-gray-700">{t.why.support.desc}</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">{t.industries.title}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {t.industries.items.map((industry, i) => {
            const icons = [
              <svg key="semi" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>,
              <svg key="auto" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h8m-8 4h8m-6 4h4M5 3h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z" /></svg>,
              <svg key="elec" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
              <svg key="med" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            ]
            return (
              <div key={i} className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-blue-600 mb-3 flex justify-center">{icons[i]}</div>
                <h3 className="font-bold text-blue-900">{industry}</h3>
              </div>
            )
          })}
        </div>
      </div>

      <div className="bg-blue-900 rounded-xl p-12 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
        <p className="text-xl mb-8 opacity-90">{t.cta.subtitle}</p>
        <a href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition">
          {t.cta.button}
        </a>
      </div>
    </div>
  )
}
