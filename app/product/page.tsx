import { ExternalLink, Github } from "lucide-react"

const products = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "Một trang web thương mại điện tử hoàn chỉnh được xây dựng bằng Next.js và Tailwind CSS. Bao gồm giỏ hàng, thanh toán và quản lý sản phẩm.",
    github: "https://github.com/kato/ecommerce-website",
    demo: "https://ecommerce-demo.vercel.app",
    tech: ["Next.js", "Tailwind CSS", "TypeScript", "Stripe"],
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Ứng dụng quản lý công việc với giao diện trực quan, hỗ trợ kéo thả và làm việc nhóm. Được phát triển bằng React Native.",
    github: "https://github.com/kato/task-management",
    demo: null,
    tech: ["React Native", "Redux", "Firebase", "Expo"],
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description:
      "Dashboard hiển thị thông tin thời tiết chi tiết với biểu đồ và dự báo 7 ngày. Tích hợp API thời tiết và có thiết kế responsive.",
    github: "https://github.com/kato/weather-dashboard",
    demo: "https://weather-dashboard-demo.vercel.app",
    tech: ["React", "Chart.js", "OpenWeather API", "CSS Modules"],
  },
  {
    id: 4,
    title: "Portfolio Template",
    description:
      "Template portfolio responsive cho developers với nhiều theme và tùy chỉnh. Dễ dàng cài đặt và sử dụng.",
    github: "https://github.com/kato/portfolio-template",
    demo: "https://portfolio-template-demo.vercel.app",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "MDX"],
  },
]

export default function Product() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Products</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{product.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{product.description}</p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex space-x-4">
              <a
                href={product.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <Github className="h-4 w-4" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              {product.demo && (
                <a
                  href={product.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span className="text-sm font-medium">Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
