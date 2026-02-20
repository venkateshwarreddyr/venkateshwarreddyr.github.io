import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Large ambient orbs */}
      <motion.div
        className="absolute rounded-full blur-[120px] opacity-20"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, #22d3ee, transparent)',
          top: '-200px',
          left: '-200px',
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full blur-[120px] opacity-15"
        style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, #a78bfa, transparent)',
          bottom: '-150px',
          right: '-150px',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, -60, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute rounded-full blur-[100px] opacity-10"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, #ec4899, transparent)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.12, 0.08],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(34,211,238,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(34,211,238,1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Subtle noise */}
      <div className="noise-overlay" />
    </div>
  )
}
