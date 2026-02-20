import { motion } from 'framer-motion'
import { Github, ExternalLink, Package } from 'lucide-react'
import { projects } from '../data/portfolio'

const inView = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
  }),
}

function linkIcon(label: string) {
  if (label === 'GitHub') return <Github className="w-3.5 h-3.5" />
  if (label.startsWith('npm')) return <Package className="w-3.5 h-3.5" />
  return <ExternalLink className="w-3.5 h-3.5" />
}

export default function Projects() {
  return (
    <div className="relative z-10 min-h-screen section-padding pt-28">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={inView}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Cutting-edge AI-powered systems, enterprise platforms, and open-source tools — built across real estate, healthcare, and SaaS domains.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              className="group glass-card-hover rounded-2xl p-6 flex flex-col"
            >
              {/* Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                  project.color === 'cyan'
                    ? 'bg-cyan-400/10 border border-cyan-400/20'
                    : 'bg-violet-400/10 border border-violet-400/20'
                }`}>
                  {project.icon}
                </div>
                {/* Primary link (first link = main CTA) */}
                <a
                  href={project.links[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-slate-600 group-hover:text-slate-300 hover:bg-white/8 transition-all mt-0.5"
                  title={project.links[0].label}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-5">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium font-mono ${
                      project.color === 'cyan'
                        ? 'bg-cyan-400/8 border border-cyan-400/15 text-cyan-400'
                        : 'bg-violet-400/8 border border-violet-400/15 text-violet-400'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links row */}
              <div className="flex flex-wrap gap-2">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 ${
                      project.color === 'cyan'
                        ? 'bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 hover:bg-cyan-400/20'
                        : 'bg-violet-400/10 border border-violet-400/20 text-violet-400 hover:bg-violet-400/20'
                    }`}
                  >
                    {linkIcon(link.label)}
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={inView}
          className="mt-16"
        >
          <div
            className="rounded-2xl p-8 text-center relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(34,211,238,0.08) 0%, rgba(167,139,250,0.08) 100%)',
              border: '1px solid rgba(34,211,238,0.15)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/5 to-violet-400/5" />
            <div className="relative z-10">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold text-white mb-3">
                Building the next generation of <span className="gradient-text">AI-powered software</span>
              </h3>
              <p className="text-slate-400 max-w-xl mx-auto mb-6">
                Specialized in agentic systems, real-time AI orchestration, and enterprise automation. Let's build something extraordinary together.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="mailto:venkateshwarreddyr@outlook.com"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold hover:opacity-90 active:scale-95 transition-all shadow-lg shadow-cyan-500/20"
                >
                  Let's Collaborate
                </a>
                <a
                  href="https://github.com/venkateshwarreddyr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass-card text-slate-200 font-semibold hover:bg-white/8 active:scale-95 transition-all"
                >
                  <Github className="w-5 h-5" />
                  View GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
