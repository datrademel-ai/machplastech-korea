'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Plastics() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Engineering Plastics',
      subtitle: 'Premium Materials from Global Manufacturers',
      materials: {
        title: 'Our Materials',
        pom: {
          title: 'POM (Polyacetal)',
          desc: 'High strength, low friction, excellent dimensional stability',
          apps: ['Gears & bearings', 'Automotive parts', 'Precision components']
        },
        pa: {
          title: 'PA6 / PA66 (Nylon)',
          desc: 'Superior mechanical properties, wear resistance, chemical stability',
          apps: ['Industrial components', 'Electrical parts', 'Structural applications']
        },
        peek: {
          title: 'PEEK',
          desc: 'High-performance thermoplastic, extreme temperature resistance',
          apps: ['Aerospace applications', 'Medical devices', 'High-temp environments']
        },
        pps: {
          title: 'PPS',
          desc: 'Excellent chemical resistance, high heat deflection temperature',
          apps: ['Chemical processing', 'Electrical connectors', 'Automotive under-hood']
        },
        ptfe: {
          title: 'PTFE (Teflon)',
          desc: 'Lowest friction coefficient, excellent chemical inertness',
          apps: ['Seals & gaskets', 'Food processing', 'Chemical equipment']
        },
        custom: {
          title: 'Custom Materials',
          desc: 'Specialized materials sourcing for specific requirements',
          apps: ['Global sourcing network', 'Technical consultation', 'Material testing']
        }
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
        title: '취급 소재',
        pom: {
          title: 'POM (폴리아세탈)',
          desc: '고강도, 저마찰, 우수한 치수 안정성',
          apps: ['기어 및 베어링', '자동차 부품', '정밀 부품']
        },
        pa: {
          title: 'PA6 / PA66 (나일론)',
          desc: '우수한 기계적 특성, 내마모성, 화학적 안정성',
          apps: ['산업용 부품', '전기 부품', '구조 응용']
        },
        peek: {
          title: 'PEEK',
          desc: '고성능 열가소성 플라스틱, 극한 내열성',
          apps: ['항공우주 응용', '의료 기기', '고온 환경']
        },
        pps: {
          title: 'PPS',
          desc: '우수한 내화학성, 높은 열변형 온도',
          apps: ['화학 공정', '전기 커넥터', '자동차 엔진룸']
        },
        ptfe: {
          title: 'PTFE (테프론)',
          desc: '최저 마찰 계수, 우수한 화학적 불활성',
          apps: ['씰 및 가스켓', '식품 가공', '화학 장비']
        },
        custom: {
          title: '맞춤 소재',
          desc: '특정 요구사항을 위한 전문 소재 소싱',
          apps: ['글로벌 소싱 네트워크', '기술 상담', '소재 테스트']
        }
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

  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-900">{t.title}</h1>
      <p className="text-xl text-center text-gray-600 mb-16">{t.subtitle}</p>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-900">{t.materials.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(t.materials).slice(0, 6).map((material, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-900">{material.title}</h3>
              <p className="text-gray-700 mb-4">{material.desc}</p>
              <ul className="space-y-2 text-gray-600 text-sm">
                {material.apps.map((app, j) => (
                  <li key={j}>• {app}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-12 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">{t.why.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🌐</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">{t.why.global.title}</h3>
            <p className="text-gray-700">{t.why.global.desc}</p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">{t.why.certified.title}</h3>
            <p className="text-gray-700">{t.why.certified.desc}</p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">{t.why.support.title}</h3>
            <p className="text-gray-700">{t.why.support.desc}</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">{t.industries.title}</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {t.industries.items.map((industry, i) => {
            const icons = ['🔬', '🚗', '⚡', '🏥']
            return (
              <div key={i} className="bg-blue-50 p-6 rounded-lg text-center">
                <div className="text-4xl mb-3">{icons[i]}</div>
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
