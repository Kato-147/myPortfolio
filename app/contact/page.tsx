"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    alert("Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Contact</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Thông tin liên hệ</h2>

          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-600 dark:text-gray-300">kato@example.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-600 dark:text-gray-300">+84 123 456 789</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              <span className="text-gray-600 dark:text-gray-300">Hồ Chí Minh, Việt Nam</span>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Gửi tin nhắn cho tôi</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Tôi luôn sẵn sàng lắng nghe những ý tưởng mới và cơ hội hợp tác. Hãy liên hệ với tôi nếu bạn có bất kỳ câu
              hỏi nào hoặc muốn thảo luận về dự án.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Tên của bạn
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                placeholder="Nhập tên của bạn"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent"
                placeholder="Nhập email của bạn"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Nội dung
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent resize-none"
                placeholder="Nhập nội dung tin nhắn..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Gửi tin nhắn</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
