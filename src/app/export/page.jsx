'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Export() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Global Export',
      subtitle: 'Your Gateway to International Trade',
      services: {
        title: 'Our Services',
        sourcing: {
          title: 'Raw Material Sourcing',
          desc: 'Global procurement of engineering plastics and industrial materials',
          items: [
            'Global supplier network across Asia, Europe, Americas',
            'Engineering plastics (PEEK, POM, PA, PTFE, etc.)',
            'Quality inspection and certification support',
            'Competitive pricing through bulk purchasing',
            'Logistics and customs clearance assistance'
          ],
          image: '/images/export/warehouse.jpg'
        },
        buyer: {
          title: 'Buyer Sourcing',
          desc: 'Connect with international buyers for your products',
          items: [
            'International buyer database and matching',
            'Market research and opportunity identification',
            'Trade show representation',
            'Business introduction and negotiation support',
            'Contract and deal closing assistance'
          ],
          image: '/images/export/business_meeting.jpg'
        },
        agency: {
          title: 'Export Agency Services',
          desc: 'Complete export business support from Korea',
          items: [
            'Export documentation and compliance',
            'Customs procedures and clearance',
            'Shipping and logistics coordination',
            'Payment and LC handling',
            'After-sales support coordination'
          ],
          image: '/images/export/container-port.jpg'
        },
        sales: {
          title: 'International Sales',
          desc: 'Direct sales channel to global markets',
          items: [
            'Korean automation equipment export',
            'Engineering plastic products',
            'Precision machined components',
            'Agricultural machinery and equipment',
            'Industrial automation systems'
          ],
          image: '/images/export/cargo_ship.jpg'
        }
      },
      regions: {
        title: 'Target Markets',
        items: [
          { name: 'Australia & Oceania', desc: 'Agricultural automation, industrial equipment' },
          { name: 'Southeast Asia', desc: 'Manufacturing equipment, raw materials' },
          { name: 'North America', desc: 'Precision components, automation systems' },
          { name: 'Europe', desc: 'Engineering plastics, specialty materials' },
          { name: 'Middle East', desc: 'Industrial equipment, construction materials' }
        ]
      },
      why: {
        title: 'Why Partner With Us',
        items: [
          { title: 'Korean Quality', desc: 'Access to premium Korean manufacturing and products' },
          { title: 'Industry Expertise', desc: '20+ years in plastics and precision manufacturing' },
          { title: 'Global Network', desc: 'Established partnerships across continents' },
          { title: 'Full Support', desc: 'End-to-end service from sourcing to delivery' }
        ]
      },
      cta: {
        title: 'Ready to Go Global?',
        subtitle: 'Contact us to discuss your international trade needs',
        button: 'Start Partnership'
      }
    },
    ko: {
      title: '글로벌 수출',
      subtitle: '국제 무역의 파트너',
      services: {
        title: '서비스 안내',
        sourcing: {
          title: '원자재 소싱',
          desc: '엔지니어링 플라스틱 및 산업 원자재 글로벌 조달',
          items: [
            '아시아, 유럽, 미주 글로벌 공급업체 네트워크',
            '엔지니어링 플라스틱 (PEEK, POM, PA, PTFE 등)',
            '품질 검사 및 인증 지원',
            '대량 구매를 통한 경쟁력 있는 가격',
            '물류 및 통관 지원'
          ],
          image: '/images/export/warehouse.jpg'
        },
        buyer: {
          title: '바이어 소싱',
          desc: '귀사 제품을 위한 해외 바이어 연결',
          items: [
            '해외 바이어 데이터베이스 및 매칭',
            '시장 조사 및 기회 발굴',
            '무역 박람회 대리 참가',
            '비즈니스 소개 및 협상 지원',
            '계약 및 딜 클로징 지원'
          ],
          image: '/images/export/business_meeting.jpg'
        },
        agency: {
          title: '수출 대행 서비스',
          desc: '한국발 수출 업무 토탈 지원',
          items: [
            '수출 서류 및 컴플라이언스',
            '통관 절차 및 처리',
            '배송 및 물류 조정',
            '결제 및 LC 처리',
            '애프터 서비스 지원 조정'
          ],
          image: '/images/export/container-port.jpg'
        },
        sales: {
          title: '해외 판매',
          desc: '글로벌 시장으로의 직접 판매 채널',
          items: [
            '한국산 자동화 설비 수출',
            '엔지니어링 플라스틱 제품',
            '정밀 가공 부품',
            '농업 기계 및 장비',
            '산업 자동화 시스템'
          ],
          image: '/images/export/cargo_ship.jpg'
        }
      },
      regions: {
        title: '타겟 시장',
        items: [
          { name: '호주 및 오세아니아', desc: '농업 자동화, 산업 장비' },
          { name: '동남아시아', desc: '제조 장비, 원자재' },
          { name: '북미', desc: '정밀 부품, 자동화 시스템' },
          { name: '유럽', desc: '엔지니어링 플라스틱, 특수 소재' },
          { name: '중동', desc: '산업 장비, 건설 자재' }
        ]
      },
      why: {
        title: '파트너십의 장점',
        items: [
          { title: '한국 품질', desc: '프리미엄 한국 제조 및 제품 접근' },
          { title: '산업 전문성', desc: '플라스틱 및 정밀 제조 20년+ 경험' },
          { title: '글로벌 네트워크', desc: '대륙을 아우르는 파트너십 구축' },
          { title: '완벽 지원', desc: '소싱부터 납품까지 엔드투엔드 서비스' }
        ]
      },
      cta: {
        title: '글로벌 진출을 준비하세요',
        subtitle: '국제 무역 니즈에 대해 상담하세요',
        button: '파트너십 시작'
      }
    }
  }

  const t = content[language]

  const services = [
    { ...t.services.sourcing },
    { ...t.services.buyer },
    { ...t.services.agency },
    { ...t.services.sales }
  ]

  const whyIcons = [
    <svg key="1" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>,
    <svg key="2" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
    <svg key="3" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    <svg key="4" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  ]

  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-900">{t.title}</h1>
      <p className="text-xl text-center text-gray-600 mb-16">{t.subtitle}</p>

      {/* Services Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-blue-900">{t.services.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">{service.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{service.desc}</p>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-gray-700 text-sm">
                      <span className="text-blue-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Target Markets */}
      <div className="bg-gray-50 rounded-xl p-12 mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">{t.regions.title}</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {t.regions.items.map((region, i) => (
            <div key={i} className="bg-white p-6 rounded-lg text-center shadow-sm">
              <h3 className="font-bold text-blue-900 mb-2">{region.name}</h3>
              <p className="text-sm text-gray-600">{region.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why Partner With Us */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">{t.why.title}</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {t.why.items.map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                {whyIcons[i]}
              </div>
              <h3 className="text-lg font-bold mb-3 text-blue-900">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
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
