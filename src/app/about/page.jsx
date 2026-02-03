'use client'

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
          company: '㈜맥플라스텍',
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
          <h2 className="text-2xl font-bold mb-6 text-blue-900">{t.values.title}</h2
