'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Contact() {
  const { language } = useLanguage()
  
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    console.log('Form submitted:', formData)
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', company: '', email: '', phone: '', message: '' })
    }, 1000)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const content = {
    en: {
      title: 'Contact Us',
      subtitle: 'Get in touch for your manufacturing and supply needs',
      form: {
        title: 'Send us a message',
        name: 'Name',
        company: 'Company',
        email: 'Email',
        phone: 'Phone',
        message: 'Message',
        button: 'Send Message',
        sending: 'Sending...',
        success: 'Thank you! We will get back to you soon.'
      },
      info: {
        title: 'Contact Information',
        korea: {
          title: 'Korea Headquarters',
          address: 'Address:',
          location: 'Yangsan, Gyeongsangnam-do\nSouth Korea',
          phone: 'Phone:',
          email: 'Email:',
          hours: 'Business Hours:',
          time: 'Monday - Friday: 9:00 AM - 6:00 PM KST'
        },
        australia: {
          title: 'Australia Branch',
          address: 'Address:',
          location: '419 Malvern Rd\nSouth Yarra VIC 3141\nAustralia',
          phone: 'Phone:',
          email: 'Email:',
          hours: 'Business Hours:',
          time: 'Monday - Friday: 9:00 AM - 5:00 PM AEDT'
        }
      },
      cta: {
        title: 'Prefer to talk?',
        subtitle: 'Call us directly and we will be happy to discuss your needs',
        korea: 'Korea',
        australia: 'Australia'
      }
    },
    ko: {
      title: '문의하기',
      subtitle: '제조 및 공급 관련 문의사항을 보내주세요',
      form: {
        title: '메시지 보내기',
        name: '이름',
        company: '회사명',
        email: '이메일',
        phone: '전화번호',
        message: '문의 내용',
        button: '메시지 보내기',
        sending: '전송 중...',
        success: '감사합니다! 곧 연락드리겠습니다.'
      },
      info: {
        title: '연락처 정보',
        korea: {
          title: '한국 본사',
          address: '주소:',
          location: '경상남도 양산시 상북면 석계산단 2길 113 A\n대한민국',
          phone: '전화:',
          email: '이메일:',
          hours: '업무 시간:',
          time: '월요일 - 금요일: 오전 9시 - 오후 6시 (KST)'
        },
        australia: {
          title: '호주 지사',
          address: '주소:',
          location: '419 Malvern Rd\nSouth Yarra VIC 3141\nAustralia',
          phone: '전화:',
          email: '이메일:',
          hours: '업무 시간:',
          time: '월요일 - 금요일: 오전 9시 - 오후 5시 (AEDT)'
        }
      },
      cta: {
        title: '직접 통화를 원하시나요?',
        subtitle: '전화로 문의하시면 상담해 드리겠습니다',
        korea: '한국',
        australia: '호주'
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
          <h2 className="text-2xl font-bold mb-6 text-blue-900">{t.form.title}</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">{t.form.name} *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">{t.form.company}</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">{t.form.email} *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">{t.form.phone}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">{t.form.message} *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg transition disabled:bg-gray-400"
            >
              {status === 'sending' ? t.form.sending : t.form.button}
            </button>

            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                {t.form.success}
              </div>
            )}
          </form>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-blue-900">{t.info.title}</h2>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-blue-900">🇰🇷 {t.info.korea.title}</h3>
            <p className="text-gray-700 mb-2"><strong>{t.info.korea.address}</strong></p>
            <p className="text-gray-700 mb-4 whitespace-pre-line">{t.info.korea.location}</p>
            
            <p className="text-gray-700 mb-2"><strong>{t.info.korea.phone}</strong></p>
            <p className="text-gray-700 mb-4">+82 10 7671-8123</p>
            
            <p className="text-gray-700 mb-2"><strong>{t.info.korea.email}</strong></p>
            <p className="text-gray-700 mb-4">admin@machplastech.com</p>
            
            <p className="text-gray-700 mb-2"><strong>{t.info.korea.hours}</strong></p>
            <p className="text-gray-700">{t.info.korea.time}</p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-blue-900">🇦🇺 {t.info.australia.title}</h3>
            <p className="text-gray-700 mb-2"><strong>{t.info.australia.address}</strong></p>
            <p className="text-gray-700 mb-4 whitespace-pre-line">{t.info.australia.location}</p>
            
            <p className="text-gray-700 mb-2"><strong>{t.info.australia.phone}</strong></p>
            <p className="text-gray-700 mb-4">+61 493 468 123</p>
            
            <p className="text-gray-700 mb-2"><strong>{t.info.australia.email}</strong></p>
            <p className="text-gray-700 mb-4">admin@machplastech.com.au</p>
            
            <p className="text-gray-700 mb-2"><strong>{t.info.australia.hours}</strong></p>
            <p className="text-gray-700">{t.info.australia.time}</p>
          </div>
        </div>
      </div>

      <div className="bg-blue-900 text-white rounded-xl p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
        <p className="text-xl mb-8">{t.cta.subtitle}</p>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div>
            <p className="text-blue-200 mb-2">{t.cta.korea}</p>
            <a href="tel:+821076718123" className="text-2xl font-bold hover:text-blue-200 transition">+82 10 7671-8123</a>
          </div>
          <div>
            <p className="text-blue-200 mb-2">{t.cta.australia}</p>
            <a href="tel:+61493468123" className="text-2xl font-bold hover:text-blue-200 transition">+61 493 468 123</a>
          </div>
        </div>
      </div>
    </div>
  )
}
