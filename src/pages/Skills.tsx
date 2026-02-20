import { motion } from 'framer-motion'
import { skillCategories } from '../data/portfolio'

const inView = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' as const },
  }),
}

export default function Skills() {
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
            Technical Arsenal
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A comprehensive set of technologies spanning AI/ML, full-stack development, cloud platforms, and high-performance algorithms.
          </p>
        </motion.div>

        {/* Skill Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              className="glass-card-hover rounded-2xl p-6"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl ${
                  cat.color === 'cyan'
                    ? 'bg-cyan-400/10 border border-cyan-400/20'
                    : 'bg-violet-400/10 border border-violet-400/20'
                }`}>
                  {cat.icon}
                </div>
                <h3 className={`text-lg font-bold ${
                  cat.color === 'cyan' ? 'text-cyan-400' : 'text-violet-400'
                }`}>
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 cursor-default ${
                      cat.color === 'cyan'
                        ? 'bg-cyan-400/6 border border-cyan-400/15 text-cyan-300 hover:bg-cyan-400/12 hover:border-cyan-400/30'
                        : 'bg-violet-400/6 border border-violet-400/15 text-violet-300 hover:bg-violet-400/12 hover:border-violet-400/30'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Notable Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={inView}
          className="mt-12"
        >
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Algorithmic Mastery</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Total Problems', value: '2000+', bar: 100, color: 'cyan' },
                { label: 'Dynamic Programming', value: '480+', bar: 85, color: 'purple' },
                { label: 'Graphs & Trees', value: '100%', bar: 100, color: 'cyan' },
                { label: 'Contest Rating', value: '1800+', bar: 90, color: 'purple' },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-2xl font-black gradient-text mb-1">{item.value}</div>
                  <div className="text-slate-400 text-xs mb-3">{item.label}</div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <motion.div
                      className="skill-bar h-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.bar}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut' as const, delay: 0.3 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  )
}
