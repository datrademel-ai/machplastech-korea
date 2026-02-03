'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const { language } = useLanguage()

  const content = {
    en: {
      hero: {
        title: 'MACHPLASTECH',
        subtitle: 'Precision Manufacturing & Engineering Excellence',
        tagline: 'We Manufacture. We Supply. We Deliver.',
        cta: 'Get Started'
      },
      business: {
        title: 'Our Business',
        machining: {
          title: 'Precision Machining',
          desc: 'CNC & MCT precision manufacturing for semiconductor, automotive, and industrial equipment',
          items: ['OEM/ODM Manufacturing', 'CNC Machining Centers', 'Laser Marking', 'Quality Certification']
        },
        plastics: {
          title: 'Engineering Plastics',
          desc: 'Premium engineering plastic materials from global manufacturers',
          items: ['POM, PA6/PA66, PEEK', 'PPS, PTFE Materials', 'Custom Sourcing', 'Technical Support']
        },
        automation: {
          title: 'Automation Systems',
          desc: 'Complete automation solutions for agriculture and industrial sectors',
          items: ['Agricultural Automation', 'Industrial Systems', 'Production Lines', 'Global Export']
        }
      },
      why: {
        title: 'Why Machplastech',
        quality: {
          title: 'Precision Quality',
          desc: 'Advanced CNC and MCT equipment ensuring highest precision standards'
        },
        network: {
          title: 'Global Network',
          desc: 'Partnerships with leading material manufacturers worldwide'
        },
        delivery: {
          title: 'Fast Delivery',
          desc: 'Efficient production and logistics for timely delivery'
        },
        support: {
          title: 'Full Support',
          desc: 'Technical consultation and after-sales service'
        }
      },
      cta: {
        title: 'Ready to Start Your Project?',
        subtitle: 'Contact us for precision manufacturing and engineering solutions',
        button: 'Contact Us Today'
      }
    },
    ko: {
      hero: {
        title: 'MACHPLASTECH',
        subtitle: '정밀 제조 및 엔지니어링 우수성',
        tagline: '제조합니다. 공급합니다. 납품합니다.',
        cta: '시작하기'
      },
      business: {
        title: '사업 분야',
        machining: {
          title: '정밀 가공',
          desc: '반도체, 자동차, 산업 장비를 위한 CNC 및 MCT 정밀 제조',
          items: ['OEM/ODM 제조', 'CNC 가공 센터', '레이저 마킹', '품질 인증']
        },
        plastics: {
          title: '엔지니어링 플라스틱',
          desc: '글로벌 제조사의 프리미엄 엔지니어링 플라스틱 소재',
          items: ['POM, PA6/PA66, PEEK', 'PPS, PTFE 소재', '맞춤 소싱', '기술 지원']
        },
        automation: {
          title: '자동화 시스템',
          desc: '농업 및 산업 부문을 위한 완전한 자동화 솔루션',
          items: ['농업 자동화', '산업 시스템', '생산 라인', '글로벌 수출']
        }
      },
      why: {
        title: 'Machplastech를 선택하는 이유',
        quality: {
          title: '정밀 품질',
          desc: '최고 정밀도 기준을 보장하는 첨단 CNC 및 MCT 장비'
        },
        network: {
          title: '글로벌 네트워크',
          desc: '전 세계 선도적인 소재 제조업체와의 파트너십'
        },
        delivery: {
          title: '신속한 납품',
          desc: '적시 납품을 위한 효율적인 생산 및 물류'
        },
        support: {
          title: '완벽한 지원',
          desc: '기술 상담 및 사후 서비스'
        }
      },
      cta: {
        title: '프로젝트를 시작할 준비가 되셨나요?',
        subtitle: '정밀 제조 및 엔지니어링 솔루션에 대해 문의하세요',
        button: '지금 문의하기'
      }
    }
  }

  const t = content[language]

  return (
    <>
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 text-white py-24 px-8 text-center">
        <h1 className="text-5xl font-bold mb-4">{t.hero.title}</h1>
        <p className="text-2xl mb-2 font-light">{t.hero.subtitle}</p>
        <p className="text-xl mb-8">{t.hero.tagline}</p>
        <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition">
          {t.hero.cta} →
        </Link>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-900">{t.business.title}</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/machining" className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition group">
            <div className="text-5xl mb-4">⚙️</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900 group-hover:text-blue-700">{t.business.machining.title}</h3>
            <p className="text-gray-700 mb-4">{t.business.machining.desc}</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              {t.business.machining.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </Link>

          <Link href="/plastics" className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition group">
            <div className="text-5xl mb-4">🔬</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900 group-hover:text-blue-700">{t.business.plastics.title}</h3>
            <p className="text-gray-700 mb-4">{t.business.plastics.desc}</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              {t.business.plastics.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </Link>

          <Link href="/automation" className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition group">
            <div className="text-5xl mb-4">🤖</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900 group-hover:text-blue-700">{t.business.automation.title}</h3>
            <p className="text-gray-700 mb-4">{t.business.automation.desc}</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              {t.business.automation.items.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>
          </Link>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">{t.why.title}</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">{t.why.quality.title}</h3>
              <p className="text-gray-600">{t.why.quality.desc}</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">{t.why.network.title}</h3>
              <p className="text-gray-600">{t.why.network.desc}</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">{t.why.delivery.title}</h3>
              <p className="text-gray-600">{t.why.delivery.desc}</p>
            </div>

            <div className="text-center">
              <div className="text-5xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">{t.why.support.title}</h3>
              <p className="text-gray-600">{t.why.support.desc}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-20 px-8">
        <div className="bg-blue-900 rounded-xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-xl mb-8 opacity-90">{t.cta.subtitle}</p>
          <Link href="/contact" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition">
            {t.cta.button}
          </Link>
        </div>
      </section>
    </>
  )
}
