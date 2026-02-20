import { Github, Linkedin, Mail, Code } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#05050e]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="gradient-text font-bold text-lg">Venkateshwar Reddygari</span>
            <p className="text-slate-500 text-sm mt-1">Senior Software Engineer · Hyderabad, India</p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-white hover:bg-white/8 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-cyan-400 hover:bg-cyan-400/8 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-slate-500 hover:text-amber-400 hover:bg-amber-400/8 transition-all duration-200"
              aria-label="LeetCode"
            >
              <Code className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg text-slate-500 hover:text-violet-400 hover:bg-violet-400/8 transition-all duration-200"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-slate-600 text-xs">
          © {new Date().getFullYear()} Venkateshwar Reddygari. Crafted with React, TypeScript & Tailwind CSS.
        </div>
      </div>
    </footer>
  )
}
