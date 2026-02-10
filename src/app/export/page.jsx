'use client'

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
          icon: '📦',
          items: [
            'Global supplier network across Asia, Europe, Americas',
            'Engineering plastics (PEEK, POM, PA, PTFE, etc.)',
            'Quality inspection and certification support',
            'Competitive pricing through bulk purchasing',
            'Logistics and customs clearance assistance'
          ]
        },
        buyer: {
          title: 'Buyer Sourcing',
          desc: 'Connect with international buyers for your products',
          icon: '🤝',
          items: [
            'International buyer database and matching',
            'Market research and opportunity identification',
            'Trade show representation',
            'Business introduction and negotiation support',
            'Contract and deal closing assistance'
          ]
        },
        agency: {
          title: 'Export Agency Services',
          desc: 'Complete export business support from Korea',
          icon: '📋',
          items: [
            'Export documentation and compliance',
            'Customs procedures and clearance',
            'Shipping and logistics coordination',
            'Payment and LC handling',
            'After-sales support coordination'
          ]
        },
        sales: {
          title: 'International Sales',
          desc: 'Direct sales channel to global markets',
          icon: '🌍',
          items: [
            'Korean automation equipment export',
            'Engineering plastic products',
            'Precision machined components',
            'Agricultural machinery and equipment',
            'Industrial automation systems'
          ]
        }
      },
      regions: {
        title: 'Target Markets',
        items: [
          { name: 'Australia & Oceania', desc: 'Agricultural automation, industrial equipment', flag: '🇦🇺' },
          { name: 'Southeast Asia', desc: 'Manufacturing equipment, raw materials', flag: '🌏' },
          { name: 'North America', desc: 'Precision components, automation systems', flag: '🇺🇸' },
          { name: 'Europe', desc: 'Engineering plastics, specialty materials', flag: '🇪🇺' },
          { name: 'Middle East', desc: 'Industrial equipment, construction materials', flag: '🇸🇦' }
        ]
      },
      why: {
        title: 'Why Partner With Us',
        items: [
          { title: 'Korean Quality', desc: 'Access to premium Korean manufacturing and products', icon: '🏆' },
          { title: 'Industry Expertise', desc: '20+ years in plastics and precision manufacturing', icon: '💼' },
          { title: 'Global Network', desc: 'Established partnerships across continents', icon: '🌐' },
          { title: 'Full Support', desc: 'End-to-end service from sourcing to delivery', icon: '✅' }
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
          icon: '📦',
          items: [
            '아시아, 유럽, 미주 글로벌 공급업체 네트워크',
            '엔지니어링 플라스틱 (PEEK, POM, PA, PTFE 등)',
            '품질 검사 및 인증 지원',
            '대량 구매를 통한 경쟁력 있는 가격',
            '물류 및 통관 지원'
          ]
        },
        buyer: {
          title: '바이어 소싱',
          desc: '귀사 제품을 위한 해외 바이어 연결',
          icon: '🤝',
          items: [
            '해외 바이어 데이터베이스 및 매칭',
            '시장 조사 및 기회 발굴',
            '무역 박람회 대리 참가',
            '비즈니스 소개 및 협상 지원',
            '계약 및 딜 클로징 지원'
          ]
        },
        agency: {
          title: '수출 대행 서비스',
          desc: '한국발 수출 업무 토탈 지원',
          icon: '📋',
          items: [
            '수출 서류 및 컴플라이언스',
            '통관 절차 및 처리',
            '배송 및 물류 조정',
            '결제 및 LC 처리',
            '애프터 서비스 지원 조정'
          ]
        },
        sales: {
          title: '해외 판매',
          desc: '글로벌 시장으로의 직접 판매 채널',
          icon: '🌍',
          items: [
            '한국산 자동화 설비 수출',
            '엔지니어링 플라스틱 제품',
            '정밀 가공 부품',
            '농업 기계 및 장비',
            '산업 자동화 시스템'
          ]
        }
      },
      regions: {
        title: '타겟 시장',
        items: [
          { name: '호주 및 오세아니아', desc: '농업 자동화, 산업 장비', flag: '🇦🇺' },
          { name: '동남아시아', desc: '제조 장비, 원자재', flag: '🌏' },
          { name: '북미', desc: '정밀 부품, 자동화 시스템', flag: '🇺🇸' },
          { name: '유럽', desc: '엔지니어링 플라스틱, 특수 소재', flag: '🇪🇺' },
          { name: '중동', desc: '산업 장비, 건설 자재', flag: '🇸🇦' }
        ]
      },
      why: {
        title: '파트너십의 장점',
        items: [
          { title: '한국 품질', desc: '프리미엄 한국 제조 및 제품 접근', icon: '🏆' },
          { title: '산업 전문성', desc: '플라스틱 및 정밀 제조 20년+ 경험', icon: '💼' },
          { title: '글로벌 네트워크', desc: '대륙을 아우르는 파트너십 구축', icon: '🌐' },
          { title: '완벽 지원', desc: '소싱부터 납품까지 엔드투엔드 서비스', icon: '✅' }
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

  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-900">{t.title}</h1>
      <p className="text-xl text-center text-gray-600 mb-16">{t.subtitle}</p>

      {/* Services Section */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-10 text-blue-900">{t.services.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Raw Material Sourcing */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
            <div className="text-5xl mb-4">{t.services.sourcing.icon}</div>
            <h3 className="text-2xl font-bold mb-3 text-blue-900">{t.services.sourcing.title}</h3>
            <p className="text-gray-600 mb-4">{t.services.sourcing.desc}</p>
            <ul className="space-y-2">
              {t.services.sourcing.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Buyer Sourcing */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
            <div className="text-5xl mb-4">{t.services.buyer.icon}</div>
            <h3 className="text-2xl font-bold mb-3 text-blue-900">{t.services.buyer.title}</h3>
            <p className="text-gray-600 mb-4">{t.services.buyer.desc}</p>
            <ul className="space-y-2">
              {t.services.buyer.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Export Agency */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
            <div className="text-5xl mb-4">{t.services.agency.icon}</div>
            <h3 className="text-2xl font-bold mb-3 text-blue-900">{t.services.agency.title}</h3>
            <p className="text-gray-600 mb-4">{t.services.agency.desc}</p>
            <ul className="space-y-2">
              {t.services.agency.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* International Sales */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition">
            <div className="text-5xl mb-4">{t.services.sales.icon}</div>
            <h3 className="text-2xl font-bold mb-3 text-blue-900">{t.services.sales.title}</h3>
            <p className="text-gray-600 mb-4">{t.services.sales.desc}</p>
            <ul className="space-y-2">
              {t.services.sales.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-700">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Target Markets */}
      <div className="bg-gray-50 rounded-xl p-12 mb-16">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">{t.regions.title}</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {t.regions.items.map((region, i) => (
            <div key={i} className="bg-white p-6 rounded-lg text-center shadow-sm">
              <div className="text-4xl mb-3">{region.flag}</div>
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
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
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
