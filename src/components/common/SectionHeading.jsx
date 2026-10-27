import { motion } from 'framer-motion'

export default function SectionHeading({ title, subtitle, id }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className="mb-10 md:mb-14 text-center"
    >
      {id && <span id={id} className="sr-only" />}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-light-secondary dark:text-dark-secondary text-base sm:text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-primary" />
    </motion.div>
  )
}
