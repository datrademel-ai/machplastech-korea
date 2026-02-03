'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function Automation() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Automation Systems',
      subtitle: 'Exporting Korean Technology to Global Markets',
      solutions: {
        title: 'Our Solutions',
        agricultural: {
          title: 'Agricultural Automation',
          desc: 'Smart farming solutions for modern agriculture',
          items: ['Automated harvesting systems', 'Smart irrigation control', 'Crop monitoring systems', 'Sorting & packaging automation']
        },
        industrial: {
          title: 'Industrial Automation',
          desc: 'Complete automation for manufacturing facilities',
          items: ['Robotic systems', 'Conveyor automation', 'Quality control systems', 'Process automation']
        },
        production: {
          title: 'Production Automation',
          desc: 'Streamlined production line solutions',
          items: ['Assembly line automation', 'Material handling systems', 'Packaging automation', 'Integration services']
        }
      },
      why: {
        title: 'Why Korean Technology',
        quality: { title: 'Proven Quality', desc: 'Reliable systems with proven track records' },
        innovation: { title: 'Innovation', desc: 'Cutting-edge technology and continuous improvement' },
        cost: { title: 'Cost-Effective', desc: 'Competitive pricing with high performance' },
        support: { title: 'Full Support', desc: 'Installation, training, and maintenance services' }
      },
      export: {
        title: 'Global Export',
        desc: 'We export Korean automation technology to markets worldwide, with particular focus on Australia, Southeast Asia, and North America.',
        regions: [
          { name: 'Australia', desc: 'Agricultural & industrial automation' },
          { name: 'Southeast Asia', desc: 'Manufacturing automation systems' },
          { name: 'North America', desc: 'Advanced production solutions' }
        ]
      },
      cta: {
        title: 'Interested in Automation?',
        subtitle: "Let's discuss your automation needs and find the perfect solution",
        button: 'Contact Us'
      }
    },
    ko: {
      title: '자동화 시스템',
      subtitle: '한국 기술을 글로벌 시장으로',
      solutions: {
        title: '솔루션',
        agricultural: {
          title: '농업 자동화',
          desc: '현대 농업을 위한 스마트 팜 솔루션',
          items: ['자동 수확 시스템', '스마트 관개 제어', '작물 모니터링 시스템', '선별 및 포장 자동화']
        },
        industrial: {
          title: '산업 자동화',
          desc: '제조 시설을 위한 완전한 자동화',
          items: ['로봇 시스템', '컨베이어 자동화', '품질 관리 시스템', '공정 자동화']
        },
        production: {
          title: '생산 자동화',
          desc: '효율적인 생산 라인 솔루션',
          items: ['조립 라인 자동화', '자재 취급 시스템', '포장 자동화', '통합 서비스']
        }
      },
      why: {
        title: '한국 기술을 선택하는 이유',
        quality: { title: '검증된 품질', desc: '검증된 실적을 가진 신뢰할 수 있는 시스템' },
        innovation: { title: '혁신', desc: '최첨단 기술과 지속적인 개선' },
        cost: { title: '비용 효율적', desc: '높은 성능과 경쟁력 있는 가격' },
        support: { title: '완벽한 지원', desc: '설치, 교육 및 유지보수 서비스' }
      },
      export: {
        title: '글로벌 수출',
        desc: '호주, 동남아시아, 북미를 중심으로 전 세계 시장에 한국 자동화 기술을 수출합니다.',
        regions: [
          { name: '호주', desc: '농업 및 산업 자동화' },
          { name: '동남아시아', desc: '제조 자동화 시스템' },
          { name: '북미', desc: '첨단 생산 솔루션' }
        ]
      },
      cta: {
        title: '자동화에 관심이 있으신가요?',
        subtitle: '자동화 요구사항을 논의하고 완벽한 솔루션을 찾아보세요',
        button: '문의하기'
      }
    }
  }

  const t = content[language]

  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-900">{t.title}</h1>
      <p className="text-xl text-center text-gray-600 mb-16">{t.subtitle}</p>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-900">{t.solutions.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-6xl mb-6">🌾</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">{t.solutions.agricultural.title}</h3>
            <p className="text-gray-700 mb-4">{t.solutions.agricultural.desc}</p>
            <ul className="space-y-3 text-gray-600">
              {t.solutions.agricultural.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-6xl mb-6">🏭</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">{t.solutions.industrial.title}</h3>
            <p className="text-gray-700 mb-4">{t.solutions.industrial.desc}</p>
            <ul className="space-y-3 text-gray-600">
              {t.solutions.industrial.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <div className="text-6xl mb-6">⚙️</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">{t.solutions.production.title}</h3>
            <p className="text-gray-700 mb-4">{t.solutions.production.desc}</p>
            <ul className="space-y-3 text-gray-600">
              {t.solutions.production.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-12 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">{t.why.title}</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl mb-4">🎯</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">{t.why.quality.title}</h3>
            <p className="text-gray-600">{t.why.quality.desc}</p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">💡</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">{t.why.innovation.title}</h3>
            <p className="text-gray-600">{t.why.innovation.desc}</p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">{t.why.cost.title}</h3>
            <p className="text-gray-600">{t.why.cost.desc}</p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">🛠️</div>
            <h3 className="text-xl font-bold mb-3 text-blue-900">{t.why.support.title}</h3>
            <p className="text-gray-600">{t.why.support.desc}</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">{t.export.title}</h2>
        <div className="bg-white border border-gray-200 rounded-xl p-12">
          <p className="text-lg text-gray-700 text-center mb-8">{t.export.desc}</p>
          <div className="grid md:grid-cols-3 gap-8">
            {t.export.regions.map((region, i) => (
              <div key={i} className="text-center p-6 bg-blue-50 rounded-lg">
                <h3 className="text-xl font-bold mb-2 text-blue-900">{region.name}</h3>
                <p className="text-gray-600">{region.desc}</p>
              </div>
            ))}
          </div>
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
