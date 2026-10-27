import { motion } from 'framer-motion'

export default function SkillCard({ name, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="
        px-4 py-2.5 rounded-xl text-sm font-medium
        bg-light-surface dark:bg-dark-surface
        border border-light-border dark:border-dark-border
        text-light-text dark:text-dark-text
        hover:border-primary hover:text-primary hover:bg-primary/5
        transition-all duration-200 cursor-default
      "
    >
      {name}
    </motion.div>
  )
}
