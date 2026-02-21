import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, MapPin, Zap, Code, Brain } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

function TypewriterText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = texts[index]
    const speed = isDeleting ? 40 : 80

    const timer = setTimeout(() => {
      if (!isDeleting && displayed.length < current.length) {
        setDisplayed(current.slice(0, displayed.length + 1))
      } else if (isDeleting && displayed.length > 0) {
        setDisplayed(current.slice(0, displayed.length - 1))
      } else if (!isDeleting && displayed.length === current.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayed.length === 0) {
        setIsDeleting(false)
        setIndex((i) => (i + 1) % texts.length)
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [displayed, isDeleting, index, texts])

  return (
    <span className="gradient-text">
      {displayed}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  )
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' as const },
  }),
}

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center hero-bg section-padding pt-24 md:pt-32">

      {/* Profile photo - left side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className="hidden lg:block fixed left-8 xl:left-16 top-1/2 -translate-y-1/2 z-20"
      >
        <div className="relative group">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-violet-500/30 blur-md group-hover:blur-lg transition-all duration-500" />
          <img
            src="/images/self2.jpeg"
            alt={personalInfo.name}
            className="relative w-28 h-28 xl:w-36 xl:h-36 rounded-2xl object-cover border-2 border-white/10 shadow-2xl shadow-cyan-500/10 group-hover:border-cyan-400/30 transition-all duration-500"
          />
        </div>
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">

        {/* Badge */}
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/8 border border-cyan-400/20 text-cyan-400 text-sm font-medium mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Available for opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 text-white leading-tight"
        >
          {personalInfo.name.split(' ').map((word, i) => (
            <span key={i} className={i === 1 ? 'gradient-text' : ''}>
              {word}{i < personalInfo.name.split(' ').length - 1 ? ' ' : ''}
            </span>
          ))}
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 min-h-[3rem]"
        >
          <TypewriterText texts={personalInfo.roles} />
        </motion.div>

        {/* Summary */}
        <motion.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
        >
          {personalInfo.summary}
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <Link
            to="/projects"
            className="group flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold text-base shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            View Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-2 px-7 py-3.5 rounded-xl glass-card text-slate-200 font-semibold text-base hover:bg-white/8 hover:border-cyan-400/30 active:scale-95 transition-all duration-300"
          >
            <Download className="w-4 h-4" />
            Get in Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          custom={5}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex items-center justify-center gap-6 mb-16"
        >
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-white transition-colors text-sm font-medium">
            <Github className="w-5 h-5" /> GitHub
          </a>
          <span className="w-1 h-1 rounded-full bg-slate-700" />
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-cyan-400 transition-colors text-sm font-medium">
            <Linkedin className="w-5 h-5" /> LinkedIn
          </a>
          <span className="w-1 h-1 rounded-full bg-slate-700" />
          <span className="flex items-center gap-1.5 text-slate-500 text-sm">
            <MapPin className="w-4 h-4" /> {personalInfo.location}
          </span>
        </motion.div>

        {/* Stats */}
        <motion.div
          custom={6}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {personalInfo.stats.map((stat, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-5 hover:border-cyan-400/20 hover:bg-cyan-400/3 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-black gradient-text mb-1">{stat.value}</div>
              <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Features row */}
        <motion.div
          custom={7}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="mt-14 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm"
        >
          {[
            { icon: Brain, label: 'AI / ML Expert' },
            { icon: Code, label: 'Full-Stack Engineer' },
            { icon: Zap, label: 'Cloud Architect' },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon className="w-4 h-4 text-cyan-400" />
              {label}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center pt-2">
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
        </div>
      </motion.div>
    </div>
  )
}
