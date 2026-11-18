import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react'
import Container from '../../../components/common/Container'
import SectionHeading from '../../../components/common/SectionHeading'
import { useTranslation } from '../../../hooks/useTranslation'
import { SECTION_IDS } from '../../../utils/constants'
import profile from '../../../data/profile.json'
import education from '../../../data/education.json'
import collaborationPhoto from '../../../assets/images/ousa1.jpg'
import activityPhoto from '../../../assets/images/ousa3.jpg'
import classmatesPhoto from '../../../assets/images/ousa4.jpg'
import mentorPhoto from '../../../assets/images/ousa5.jpg'
import friendsPhoto from '../../../assets/images/ousa6.jpg'
import communityPhoto from '../../../assets/images/ousa7.jpg'
import certificatePhoto from '../../../assets/images/ousa8.jpg'
import volunteeringPhoto from '../../../assets/images/ousa9.jpg'
import celebrationPhoto from '../../../assets/images/ousa10.jpg'
import universityPhoto from '../../../assets/images/ousa11.jpg'

const photos = [
  { src: collaborationPhoto, label: 'collaborationPhoto' },
  { src: activityPhoto, label: 'activityPhoto' },
  { src: classmatesPhoto, label: 'classmatesPhoto' },
  { src: mentorPhoto, label: 'mentorPhoto' },
  { src: friendsPhoto, label: 'friendsPhoto' },
  { src: communityPhoto, label: 'communityPhoto' },
  { src: certificatePhoto, label: 'certificatePhoto' },
  { src: volunteeringPhoto, label: 'volunteeringPhoto' },
  { src: celebrationPhoto, label: 'celebrationPhoto' },
  { src: universityPhoto, label: 'universityPhoto' },
]

export default function AboutSection() {
  const { t, language } = useTranslation()
  const edu = education.entries[0]
  const galleryRef = useRef(null)
  const directionRef = useRef(1)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const gallery = galleryRef.current
    if (!gallery || isPaused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const intervalId = window.setInterval(() => {
      const bounds = gallery.getBoundingClientRect()
      if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) return
      if (gallery.matches(':hover') || gallery.contains(document.activeElement)) {
        return
      }

      const maxScroll = gallery.scrollWidth - gallery.clientWidth
      if (maxScroll <= 0) return

      if (gallery.scrollLeft >= maxScroll - 2) directionRef.current = -1
      if (gallery.scrollLeft <= 2) directionRef.current = 1

      const firstPhoto = gallery.querySelector('[data-gallery-item]')
      const step = firstPhoto ? firstPhoto.getBoundingClientRect().width + 16 : gallery.clientWidth
      gallery.scrollBy({ left: step * directionRef.current, behavior: 'smooth' })
    }, 3000)

    return () => window.clearInterval(intervalId)
  }, [isPaused])

  const scrollGallery = (direction) => {
    const gallery = galleryRef.current
    if (!gallery) return

    directionRef.current = direction
    gallery.scrollBy({
      left: gallery.clientWidth * direction * 0.8,
      behavior: 'smooth',
    })
  }

  return (
    <section id={SECTION_IDS.ABOUT} className="py-16 md:py-24">
      <Container>
        <SectionHeading title={t('about.title')} subtitle={t('about.subtitle')} />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <p className={`text-light-secondary dark:text-dark-secondary leading-relaxed ${language === 'km' ? 'font-khmer' : ''}`}>
              {profile.about[language] || profile.about.en}
            </p>

            <div>
              <h3 className="font-semibold text-light-text dark:text-dark-text mb-2">
                {t('about.goals')}
              </h3>
              <p className={`text-light-secondary dark:text-dark-secondary text-sm leading-relaxed ${language === 'km' ? 'font-khmer' : ''}`}>
                {profile.careerGoals[language] || profile.careerGoals.en}
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-light-text dark:text-dark-text mb-3">
                {t('about.interests')}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(profile.interests[language] || profile.interests.en).map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs font-medium
                      bg-primary/10 text-primary border border-primary/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-2xl p-6 bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-sm">
              <h3 className="font-semibold text-light-text dark:text-dark-text mb-4">
                {t('about.education')}
              </h3>
              <div className="space-y-1">
                <p className="font-medium text-primary">
                  {edu.institution[language] || edu.institution.en}
                </p>
                <p className="text-sm text-light-text dark:text-dark-text">
                  {edu.degree[language] || edu.degree.en}
                </p>
                <p className="text-sm text-light-secondary dark:text-dark-secondary">
                  {edu.level[language] || edu.level.en} · {edu.period[language] || edu.period.en}
                </p>
                <p className={`text-sm text-light-secondary dark:text-dark-secondary mt-3 leading-relaxed ${language === 'km' ? 'font-khmer' : ''}`}>
                  {edu.description[language] || edu.description.en}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="mb-6 flex items-center justify-between gap-4">
            <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
              {t('about.campusMoments')}
            </h3>
            <div className="flex items-center gap-2">
              <span className="hidden rounded-full border border-light-border px-3 py-1 text-xs font-medium text-light-secondary dark:border-dark-border sm:inline-flex">
                {photos.length} {t('about.photos')}
              </span>
              <button
                type="button"
                onClick={() => setIsPaused((paused) => !paused)}
                className="rounded-full border border-light-border p-2 text-light-secondary transition-colors hover:border-primary/40 hover:text-primary dark:border-dark-border"
                aria-label={t(isPaused ? 'about.playCarousel' : 'about.pauseCarousel')}
              >
                {isPaused ? <Play size={16} /> : <Pause size={16} />}
              </button>
              <button
                type="button"
                onClick={() => scrollGallery(-1)}
                className="rounded-full border border-light-border p-2 text-light-secondary transition-colors hover:border-primary/40 hover:text-primary dark:border-dark-border"
                aria-label={t('about.scrollPhotosLeft')}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => scrollGallery(1)}
                className="rounded-full border border-light-border p-2 text-light-secondary transition-colors hover:border-primary/40 hover:text-primary dark:border-dark-border"
                aria-label={t('about.scrollPhotosRight')}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div
            ref={galleryRef}
            role="region"
            aria-roledescription="carousel"
            aria-label={t('about.campusMoments')}
            tabIndex={0}
            className="scrollbar-hidden flex gap-4 overflow-x-auto scroll-smooth pb-3 focus-visible:rounded-2xl"
          >
            {photos.map((photo, index) => (
              <motion.div
                key={photo.label}
                data-gallery-item
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
                className="h-56 shrink-0 overflow-hidden rounded-2xl border border-light-border bg-light-surface shadow-sm transition-shadow duration-300 hover:shadow-lg dark:border-dark-border dark:bg-dark-surface sm:h-64"
              >
                <img
                  src={photo.src}
                  alt={t(`about.${photo.label}`)}
                  className="h-full w-auto max-w-[85vw] object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
