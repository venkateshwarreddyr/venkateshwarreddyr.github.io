import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Mail, Globe, Award, Target } from 'lucide-react'
import { personalInfo, achievements } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

const inView = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function About() {
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
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-400/10 border border-violet-400/20 text-violet-400 text-sm font-medium mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Passionate About <span className="gradient-text">Building the Future</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Engineering scalable solutions at the intersection of AI, cloud, and full-stack development.
          </p>
        </motion.div>

        {/* Photo + Bio + Info row */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">

          {/* Photo */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={0}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/30 to-violet-400/30 blur-xl scale-110" />
              <div className="relative w-full max-w-[260px] mx-auto rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src="/images/self1.png"
                  alt="Venkateshwar Reddygari"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    // fallback to self2 if self1 fails
                    (e.target as HTMLImageElement).src = '/images/self2.png'
                  }}
                />
              </div>
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-lg">Venkateshwar Reddygari</div>
              <div className="gradient-text text-sm font-medium">Senior Software Engineer</div>
              <div className="flex items-center justify-center gap-1.5 mt-2 text-slate-500 text-xs">
                <MapPin className="w-3.5 h-3.5" />
                Hyderabad, India
              </div>
            </div>
          </motion.div>

          {/* Bio Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={1}
            className="glass-card rounded-2xl p-8"
          >
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-cyan-400" />
              Professional Summary
            </h3>
            <p className="text-slate-300 leading-relaxed mb-6">
              Results-driven Senior Software Engineer with <strong className="text-white">8+ years</strong> of experience building scalable web applications and cutting-edge AI-powered solutions.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Expert in full-stack development with React, Node.js, TypeScript, and Python. Specialized in AI/ML integration — having architected RAG systems, multi-agent solutions, and LLM-based platforms using <strong className="text-cyan-400">OpenAI GPT-5.2</strong>, LangChain, LangGraph, and Gemini Live API.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Distinguished algorithmic problem-solver with <strong className="text-amber-400">2000+ LeetCode solutions</strong> and a contest rating exceeding <strong className="text-amber-400">1800</strong>. Proven track record delivering enterprise-grade solutions across real estate, healthcare, e-commerce, and SaaS domains.
            </p>
          </motion.div>

          {/* Info Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={fadeUp}
            custom={2}
            className="glass-card rounded-2xl p-8 flex flex-col gap-5"
          >
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <Globe className="w-5 h-5 text-violet-400" />
              Personal Info
            </h3>

            {[
              { icon: MapPin, label: 'Location', value: 'Hyderabad, Telangana, India', color: 'text-cyan-400' },
              { icon: Mail, label: 'Email', value: personalInfo.email, color: 'text-violet-400' },
              { icon: GraduationCap, label: 'Education', value: 'B.Tech in Computer Science, Vignan University (2014–2018)', color: 'text-cyan-400' },
            ].map(({ icon: Icon, label, value, color }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="mt-0.5 p-2 rounded-lg bg-white/5">
                  <Icon className={`w-4 h-4 ${color}`} />
                </div>
                <div>
                  <div className="text-slate-500 text-xs uppercase tracking-wider font-medium mb-0.5">{label}</div>
                  <div className="text-slate-200 text-sm">{value}</div>
                </div>
              </div>
            ))}

            <div className="mt-2 pt-4 border-t border-white/5">
              <div className="text-slate-500 text-xs uppercase tracking-wider font-medium mb-3">Domain Expertise</div>
              <div className="flex flex-wrap gap-2">
                {['Real Estate Tech', 'Healthcare / Pharma', 'E-commerce', 'Enterprise SaaS'].map((d) => (
                  <span key={d} className="tech-tag">{d}</span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <div className="text-slate-500 text-xs uppercase tracking-wider font-medium mb-3">Languages</div>
              <div className="flex flex-wrap gap-2">
                {['English (Fluent)', 'Hindi (Professional)', 'Telugu (Native)'].map((l) => (
                  <span key={l} className="px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs border border-white/8">{l}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={inView}
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-8">
            <Award className="w-5 h-5 text-amber-400" />
            <h3 className="text-2xl font-bold text-white">Achievements & Recognition</h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {achievements.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={fadeUp}
                className="glass-card-hover rounded-2xl p-6 text-center"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-3xl font-black gradient-text-warm mb-1">{item.value}</div>
                <div className="text-white font-semibold text-sm mb-1">{item.subtitle}</div>
                <div className="text-slate-500 text-xs">{item.detail}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Current Focus */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={inView}
          className="glass-card rounded-2xl p-8 mt-8"
        >
          <h3 className="text-xl font-bold text-white mb-4">Current Focus</h3>
          <div className="flex flex-wrap gap-3">
            {['React.js', 'Rust', 'Go', 'Node.js', 'Python', 'AI/ML Integration', 'Multi-Agent Systems', 'LangGraph', 'OpenAI'].map((tech) => (
              <span key={tech} className="tech-tag">{tech}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  )
}
