import { Boxes } from "./ui/background-boxes";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

<Boxes />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4  ">

      

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 relative z-30  w-fit mx-auto px-4 py-2 ">Powered by Kato {"<3"}</p>
      </div>
    </footer>
  )
}
