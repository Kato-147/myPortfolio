import { Facebook, Github, Code, Palette, Smartphone } from "lucide-react"

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/Kato.1407", color: "text-blue-600 dark:text-blue-400" },
  { name: "GitHub", icon: Github, href: "https://github.com/Kato-147", color: "text-gray-800 dark:text-gray-200" },
]

export default function Sidebar() {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 lg:bg-white lg:dark:bg-gray-900 lg:border-r lg:border-gray-200 lg:dark:border-gray-700 lg:h-full p-6 lg:p-8">
      <div className="text-center lg:text-left">

{/* avatar */}
        <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto lg:mx-0 mb-4 flex items-center justify-center">
          <span className="text-white text-4xl font-bold">K</span>
        </div>


        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Nguyễn Viết Toản</h1>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
          Xin chào! <br/> Tôi là một developer đam mê công nghệ, chuyên về phát triển web và mobile. Tôi luôn tìm kiếm những
          thách thức mới và cơ hội để học hỏi, phát triển kỹ năng.
        </p>

         {/* Social Media */}
         <section>
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 mt-5">Social Media</h2>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${social.color}`}
              >
                <social.icon className="h-5 w-5" />
                <span className="font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
