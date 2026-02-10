'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function About() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'About Machplastech',
      subtitle: 'Precision Manufacturing & Engineering Excellence',
      company: {
        title: 'Our Company',
        p1: 'Machplastech Co., Ltd. is a comprehensive manufacturing and trading company specializing in precision machining, engineering plastics distribution, and industrial automation solutions.',
        p2: 'Based in Yangsan, South Korea, we serve diverse industries including semiconductor, automotive, food machinery, and production equipment sectors with our advanced manufacturing capabilities and extensive material sourcing network.',
        p3: 'With our Australian branch in Melbourne, we provide seamless service connecting Korean manufacturing excellence with global markets.'
      },
      values: {
        title: 'Core Values',
        quality: { title: 'Quality First', desc: 'Commitment to highest precision standards in every product and service' },
        customer: { title: 'Customer Focus', desc: 'Understanding client needs and delivering tailored solutions' },
        global: { title: 'Global Vision', desc: 'Expanding our reach while maintaining local expertise' }
      },
      offer: {
        title: 'What We Offer',
        manufacturing: { title: 'Manufacturing', desc: 'State-of-the-art CNC and MCT equipment for precision OEM/ODM production' },
        materials: { title: 'Materials', desc: 'Premium engineering plastics from leading global manufacturers' },
        automation: { title: 'Automation', desc: 'Complete automation solutions for agriculture and industrial sectors' }
      },
      presence: {
        title: 'Global Presence',
        korea: {
          title: 'Korea Headquarters',
          company: 'Machplastech Co., Ltd.',
          location: 'Yangsan, Gyeongsangnam-do',
          phone: '+82 10 7671-8123',
          email: 'admin@machplastech.com',
          desc: 'Manufacturing & Distribution Center'
        },
        australia: {
          title: 'Australia Branch',
          company: 'Machplastech Australia',
          location: '419 Malvern Rd, South Yarra VIC 3141',
          phone: '+61 493 468 123',
          email: 'admin@machplastech.com.au',
          desc: 'Trade & Business Development'
        }
      }
    },
    ko: {
      title: 'Machplastech 소개',
      subtitle: '정밀 제조 및 엔지니어링 우수성',
      company: {
        title: '회사 소개',
        p1: 'Machplastech Co., Ltd.는 정밀 가공, 엔지니어링 플라스틱 유통 및 산업 자동화 솔루션을 전문으로 하는 종합 제조 및 무역 회사입니다.',
        p2: '대한민국 양산에 본사를 두고 있으며, 첨단 제조 역량과 광범위한 소재 소싱 네트워크를 통해 반도체, 자동차, 식품 기계 및 생산 장비 분야 등 다양한 산업에 서비스를 제공하고 있습니다.',
        p3: '멜버른에 있는 호주 지사를 통해 한국의 제조 우수성을 글로벌 시장과 연결하는 원활한 서비스를 제공합니다.'
      },
      values: {
        title: '핵심 가치',
        quality: { title: '품질 우선', desc: '모든 제품과 서비스에서 최고의 정밀도 기준을 유지' },
        customer: { title: '고객 중심', desc: '고객의 요구를 이해하고 맞춤형 솔루션 제공' },
        global: { title: '글로벌 비전', desc: '현지 전문성을 유지하면서 글로벌 확장' }
      },
      offer: {
        title: '제공 서비스',
        manufacturing: { title: '제조', desc: '정밀 OEM/ODM 생산을 위한 최첨단 CNC 및 MCT 장비' },
        materials: { title: '소재', desc: '글로벌 선도 제조업체의 프리미엄 엔지니어링 플라스틱' },
        automation: { title: '자동화', desc: '농업 및 산업 부문을 위한 완전한 자동화 솔루션' }
      },
      presence: {
        title: '글로벌 네트워크',
        korea: {
          title: '한국 본사',
          company: '㈜마하플라스텍',
          location: '경상남도 양산시',
          phone: '+82 10 7671-8123',
          email: 'admin@machplastech.com',
          desc: '제조 및 유통 센터'
        },
        australia: {
          title: '호주 지사',
          company: 'Machplastech Australia',
          location: '419 Malvern Rd, South Yarra VIC 3141',
          phone: '+61 493 468 123',
          email: 'admin@machplastech.com.au',
          desc: '무역 및 사업 개발'
        }
      }
    }
  }

  const t = content[language]

  const offers = [
    {
      title: t.offer.manufacturing.title,
      desc: t.offer.manufacturing.desc,
      image: '/images/about/manufacturing.jpg'
    },
    {
      title: t.offer.materials.title,
      desc: t.offer.materials.desc,
      image: '/images/about/materials.jpg'
    },
    {
      title: t.offer.automation.title,
      desc: t.offer.automation.desc,
      image: '/images/about/automation.jpg'
    }
  ]

  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-900">{t.title}</h1>
      <p className="text-xl text-center text-gray-600 mb-16">{t.subtitle}</p>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl font-bold mb-6 text-blue-900">{t.company.title}</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">{t.company.p1}</p>
          <p className="text-gray-700 mb-4 leading-relaxed">{t.company.p2}</p>
          <p className="text-gray-700 leading-relaxed">{t.company.p3}</p>
        </div>

        <div className="bg-gray-100 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">{t.values.title}</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 text-blue-900">{t.values.quality.title}</h3>
                <p className="text-gray-700 text-sm">{t.values.quality.desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 text-blue-900">{t.values.customer.title}</h3>
                <p className="text-gray-700 text-sm">{t.values.customer.desc}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1 text-blue-900">{t.values.global.title}</h3>
                <p className="text-gray-700 text-sm">{t.values.global.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Offer - with Images */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">{t.offer.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {offers.map((offer, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
              <div className="relative h-48">
                <Image
                  src={offer.image}
                  alt={offer.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">{offer.title}</h3>
                <p className="text-gray-700">{offer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Global Presence */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-xl p-12 text-white">
        <h2 className="text-3xl font-bold text-center mb-8">{t.presence.title}</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white/10 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">🇰🇷</span>
              </div>
              <h3 className="text-2xl font-bold">{t.presence.korea.title}</h3>
            </div>
            <p className="mb-2"><strong>{t.presence.korea.company}</strong></p>
            <p className="mb-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {t.presence.korea.location}
            </p>
            <p className="mb-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t.presence.korea.phone}
            </p>
            <p className="mb-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t.presence.korea.email}
            </p>
            <p className="mt-4 text-blue-200 text-sm">{t.presence.korea.desc}</p>
          </div>

          <div className="bg-white/10 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl">🇦🇺</span>
              </div>
              <h3 className="text-2xl font-bold">{t.presence.australia.title}</h3>
            </div>
            <p className="mb-2"><strong>{t.presence.australia.company}</strong></p>
            <p className="mb-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {t.presence.australia.location}
            </p>
            <p className="mb-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t.presence.australia.phone}
            </p>
            <p className="mb-2 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t.presence.australia.email}
            </p>
            <p className="mt-4 text-blue-200 text-sm">{t.presence.australia.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
