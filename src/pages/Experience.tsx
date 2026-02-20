import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'
import { experiences } from '../data/portfolio'

const inView = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

export default function Experience() {
  return (
    <div className="relative z-10 min-h-screen section-padding pt-28">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={inView}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            8+ years building enterprise-grade solutions across AI, real estate, healthcare, and SaaS.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-10 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400/80 via-violet-400/50 to-transparent hidden sm:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={slideIn}
                className="relative sm:pl-28"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-8 top-7 hidden sm:flex">
                  <div className={`w-5 h-5 rounded-full border-2 ${
                    exp.color === 'cyan'
                      ? 'border-cyan-400 bg-cyan-400/20 shadow-lg shadow-cyan-400/20'
                      : 'border-violet-400 bg-violet-400/20 shadow-lg shadow-violet-400/20'
                  } flex items-center justify-center`}>
                    <div className={`w-2 h-2 rounded-full ${
                      exp.color === 'cyan' ? 'bg-cyan-400' : 'bg-violet-400'
                    }`} />
                  </div>
                </div>

                {/* Card */}
                <div className="glass-card-hover rounded-2xl p-6 md:p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className={`w-4 h-4 ${
                          exp.color === 'cyan' ? 'text-cyan-400' : 'text-violet-400'
                        }`} />
                        <span className={`text-sm font-semibold uppercase tracking-wider ${
                          exp.color === 'cyan' ? 'text-cyan-400' : 'text-violet-400'
                        }`}>
                          {exp.role}
                        </span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{exp.company}</h3>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-1.5 shrink-0">
                      <div className="flex items-center gap-1.5 text-slate-400 text-sm">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-5">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-slate-300 text-sm leading-relaxed">
                        <ChevronRight className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${
                          exp.color === 'cyan' ? 'text-cyan-400' : 'text-violet-400'
                        }`} />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
