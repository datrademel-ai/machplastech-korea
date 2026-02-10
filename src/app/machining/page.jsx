'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Machining() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: 'Precision Machining',
      subtitle: 'High-Precision Manufacturing with Advanced Technology',
      capabilities: {
        title: 'Our Capabilities',
        cnc: {
          title: 'CNC Machining',
          desc: 'Computer numerical control machining for complex parts',
          items: ['CNC Turning (Lathe)', 'CNC Milling', '5-Axis Machining', 'Multi-Axis Complex Machining'],
          image: '/images/machining/cnc-machine.jpg'
        },
        precision: {
          title: 'Precision Processing',
          desc: 'High-accuracy machining for demanding applications',
          items: ['Surface Grinding', 'Cylindrical Grinding', 'Wire EDM', 'Die-Sinking EDM'],
          image: '/images/machining/grinding.jpg'
        },
        special: {
          title: 'Special Processing',
          desc: 'Specialized machining for unique requirements',
          items: ['Laser Cutting', 'Waterjet Cutting', 'Deep Hole Drilling', 'Thread Processing'],
          image: '/images/machining/laser-cutting.jpg'
        }
      },
      equipment: {
        title: 'Our Equipment',
        items: [
          { name: 'CNC Turning Center', spec: 'Max Ø500 × 1000mm' },
          { name: 'CNC Machining Center', spec: '1000 × 600 × 500mm' },
          { name: '5-Axis Machining Center', spec: 'Complex 3D Machining' },
          { name: 'Wire EDM', spec: '±0.002mm Precision' },
          { name: 'Surface Grinder', spec: 'Ra 0.4 Surface Finish' },
          { name: 'CMM', spec: '3D Coordinate Measurement' }
        ]
      },
      materials: {
        title: 'Machinable Materials',
        items: ['Engineering Plastics', 'Aluminum Alloys', 'Stainless Steel', 'Titanium', 'Copper/Brass', 'Special Alloys']
      },
      tolerance: {
        title: 'Precision Capabilities',
        items: [
          { label: 'Dimensional Tolerance', value: '±0.01mm' },
          { label: 'Surface Roughness', value: 'Ra 0.4~' },
          { label: 'Concentricity', value: '0.005mm' }
        ]
      },
      cta: {
        title: 'Need Precision Machining?',
        subtitle: 'Contact us with your drawings for a detailed quotation',
        button: 'Request Quote'
      }
    },
    ko: {
      title: '정밀 가공',
      subtitle: '첨단 기술로 구현하는 고정밀 제조',
      capabilities: {
        title: '가공 역량',
        cnc: {
          title: 'CNC 가공',
          desc: '복잡한 부품을 위한 컴퓨터 수치 제어 가공',
          items: ['CNC 선반 가공', 'CNC 밀링 가공', '5축 가공', '다축 복합 가공'],
          image: '/images/machining/cnc-machine.jpg'
        },
        precision: {
          title: '정밀 가공',
          desc: '까다로운 응용을 위한 고정밀 가공',
          items: ['평면 연삭', '원통 연삭', '와이어 방전 가공 (Wire EDM)', '형조 방전 가공 (Die-Sinking EDM)'],
          image: '/images/machining/grinding.jpg'
        },
        special: {
          title: '특수 가공',
          desc: '특수 요구사항을 위한 전문 가공',
          items: ['레이저 커팅', '워터젯 커팅', '심공 드릴링', '나사 가공'],
          image: '/images/machining/laser-cutting.jpg'
        }
      },
      equipment: {
        title: '보유 장비',
        items: [
          { name: 'CNC 터닝센터', spec: '최대 Ø500 × 1000mm' },
          { name: 'CNC 머시닝센터', spec: '1000 × 600 × 500mm' },
          { name: '5축 머시닝센터', spec: '복잡한 3D 가공' },
          { name: '와이어 방전기', spec: '±0.002mm 정밀도' },
          { name: '평면 연삭기', spec: 'Ra 0.4 표면조도' },
          { name: '3차원 측정기 (CMM)', spec: '3D 좌표 측정' }
        ]
      },
      materials: {
        title: '가공 가능 소재',
        items: ['엔지니어링 플라스틱', '알루미늄 합금', '스테인리스 스틸', '티타늄', '동/황동', '특수 합금']
      },
      tolerance: {
        title: '정밀도 역량',
        items: [
          { label: '치수 공차', value: '±0.01mm' },
          { label: '표면 조도', value: 'Ra 0.4~' },
          { label: '동심도', value: '0.005mm' }
        ]
      },
      cta: {
        title: '정밀 가공이 필요하신가요?',
        subtitle: '도면과 함께 문의하시면 상세 견적을 제공해 드립니다',
        button: '견적 요청'
      }
    }
  }

  const t = content[language]

  const capabilities = [
    { ...t.capabilities.cnc },
    { ...t.capabilities.precision },
    { ...t.capabilities.special }
  ]

  return (
    <div className="max-w-7xl mx-auto py-20 px-8">
      <h1 className="text-5xl font-bold text-center mb-6 text-blue-900">{t.title}</h1>
      <p className="text-xl text-center text-gray-600 mb-16">{t.subtitle}</p>

      {/* Capabilities Section with Images */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-blue-900">{t.capabilities.title}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition">
              <div className="relative h-48">
                <Image
                  src={cap.image}
                  alt={cap.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">{cap.title}</h3>
                <p className="text-gray-700 mb-4 text-sm">{cap.desc}</p>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {cap.items.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Equipment Section */}
      <div className="bg-gray-50 rounded-xl p-12 mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-900">{t.equipment.title}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {t.equipment.items.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold mb-2 text-blue-900">{item.name}</h3>
              <p className="text-gray-600 text-sm">{item.spec}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Materials & Tolerance */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white border border-gray-200 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">{t.materials.title}</h2>
          <div className="grid grid-cols-2 gap-4">
            {t.materials.items.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6 text-blue-900">{t.tolerance.title}</h2>
          <div className="space-y-4">
            {t.tolerance.items.map((item, i) => (
              <div key={i} className="flex justify-between items-center bg-white p-4 rounded-lg">
                <span className="text-gray-700">{item.label}</span>
                <span className="font-bold text-blue-900">{item.value}</span>
              </div>
            ))}
          </div>
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
