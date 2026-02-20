import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Code, MapPin, ArrowUpRight, MessageSquare } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const inView = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' as const },
  }),
}

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: 'cyan',
    description: 'Best way to reach me',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/venkateshwarreddyr',
    href: personalInfo.linkedin,
    color: 'purple',
    description: 'Connect professionally',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/venkateshwarreddyr',
    href: personalInfo.github,
    color: 'cyan',
    description: 'Explore my open source work',
  },
  {
    icon: Code,
    label: 'LeetCode',
    value: 'leetcode.com/venkateshwarreddyr',
    href: personalInfo.leetcode,
    color: 'purple',
    description: '2000+ problems solved',
  },
]

export default function Contact() {
  return (
    <div className="relative z-10 min-h-screen section-padding pt-28">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={inView}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Open to exciting opportunities, collaborations, and interesting conversations about AI, engineering, and technology.
          </p>
        </motion.div>

        {/* Available Badge */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={inView}
          className="flex justify-center mb-10"
        >
          <div className="flex items-center gap-3 px-5 py-3 rounded-xl glass-card">
            <span className="w-3 h-3 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/40 animate-pulse" />
            <span className="text-slate-200 text-sm font-medium">Available for new opportunities</span>
            <span className="text-slate-500 text-sm">·</span>
            <span className="flex items-center gap-1 text-slate-400 text-sm">
              <MapPin className="w-3.5 h-3.5" /> Hyderabad, India (Open to Remote)
            </span>
          </div>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-12">
          {contactLinks.map((link, i) => (
            <motion.a
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              href={link.href}
              target={link.href.startsWith('mailto') ? undefined : '_blank'}
              rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
              className="group glass-card-hover rounded-2xl p-6 flex items-start gap-4"
            >
              <div className={`p-3 rounded-xl shrink-0 transition-all duration-300 ${
                link.color === 'cyan'
                  ? 'bg-cyan-400/10 border border-cyan-400/20 group-hover:bg-cyan-400/15 group-hover:border-cyan-400/30'
                  : 'bg-violet-400/10 border border-violet-400/20 group-hover:bg-violet-400/15 group-hover:border-violet-400/30'
              }`}>
                <link.icon className={`w-5 h-5 ${
                  link.color === 'cyan' ? 'text-cyan-400' : 'text-violet-400'
                }`} />
              </div>
              <div className="flex-grow min-w-0">
                <div className="text-slate-400 text-xs uppercase tracking-wider font-medium mb-0.5">{link.label}</div>
                <div className="text-white font-semibold text-sm truncate mb-1">{link.value}</div>
                <div className="text-slate-500 text-xs">{link.description}</div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-slate-300 shrink-0 mt-1 transition-colors" />
            </motion.a>
          ))}
        </div>

        {/* Message Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={inView}
          className="glass-card rounded-2xl p-8 text-center"
        >
          <MessageSquare className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-3">
            Ready to build something <span className="gradient-text">extraordinary?</span>
          </h3>
          <p className="text-slate-400 mb-6 max-w-lg mx-auto text-sm leading-relaxed">
            Whether you need a senior engineer for a challenging AI project, full-stack application, or cloud architecture — I bring 8+ years of expertise and a passion for elegant, scalable solutions.
          </p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <Mail className="w-5 h-5" />
            Send an Email
          </a>
        </motion.div>

      </div>
    </div>
  )
}
