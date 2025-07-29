import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"
import { Facebook, Github, Code, Palette, Smartphone } from "lucide-react"

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#", color: "text-blue-600 dark:text-blue-400" },
  { name: "GitHub", icon: Github, href: "#", color: "text-gray-800 dark:text-gray-200" },
]

const skills = [
  { name: "JavaScript", icon: Code, color: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200" },
  { name: "CSS", icon: Palette, color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
  { name: "Tailwind", icon: Palette, color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200" },
  { name: "React", icon: Code, color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200" },
  {
    name: "React Native",
    icon: Smartphone,
    color: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  },
]

export default function AboutMe() {
  return (
    <BackgroundBeamsWithCollision className="h-screen w-full">
    <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">About Me</h1>

        <div className="space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Giới thiệu</h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            huhu
            </p>
          </section>

        

          {/* Skills */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Kỹ năng</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className={`flex flex-col items-center p-4 rounded-lg ${skill.color}`}>
                  <skill.icon className="h-8 w-8 mb-2" />
                  <span className="text-sm font-medium text-center">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Kinh nghiệm</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 dark:border-blue-400 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Frontend Developer</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">2022 - Hiện tại</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Phát triển các ứng dụng web sử dụng React, Next.js và Tailwind CSS. Tối ưu hóa hiệu suất và trải nghiệm
                  người dùng.
                </p>
              </div>
              <div className="border-l-4 border-green-500 dark:border-green-400 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-white">Mobile Developer</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">2021 - 2022</p>
                <p className="text-gray-600 dark:text-gray-300 mt-2">
                  Phát triển ứng dụng mobile đa nền tảng sử dụng React Native. Tích hợp API và tối ưu hóa hiệu suất ứng
                  dụng.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
      
  )
}
