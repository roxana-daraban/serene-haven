import { motion, type Variants } from 'framer-motion'
import { Check, Clock, Flower2, Leaf, MapPin, Phone, Wind } from 'lucide-react'
import { Link } from 'react-router-dom'
import './LandingPage.css'

const easeSoft = [0.22, 1, 0.36, 1] as const
const iconSubtle = 'opacity-60 text-[#6a5f00]'
const bodyMuted = 'font-body text-[15px] leading-relaxed text-[#4b4738]/85'

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easeSoft },
  },
}

// Folosim un link alternativ foarte stabil pentru testare
const HERO_IMG_SRC = 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2000&auto=format&fit=crop'

export const LandingPage = () => {
  return (
    <div className="landing-page-wrapper">
      <section id="home" className="landing-hero-overlay">
        <div className="hero-bg-wrapper" aria-hidden>
          <img
            src={HERO_IMG_SRC}
            alt="Interior Spa Lux"
            className="hero-bg-img"
            decoding="async"
            fetchPriority="high"
          />
        </div>
        <div className="hero-bg-overlay" aria-hidden />

        <div className="zen-container landing-hero-inner">
          <motion.div
            className="landing-hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <span className="landing-eyebrow">Bun venit la Sanctuarul tău</span>
            <h1 className="landing-hero-title">
              Redescoperă <span className="italic font-normal text-[#6a5f00]">Echilibrul</span>
              <br />
              Tău Interior
            </h1>
            <p className="landing-hero-text">
              Masaje terapeutice și de relaxare premium, concepute pentru starea ta de bine. O
              experiență multisenzorială într-un cadru definit de liniște.
            </p>
            <div className="landing-hero-cta-wrap">
              <Link to="/services" className="landing-cta-main">
                Explorează Serviciile
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="services" className="bg-[#f4f4ef]/40 py-40">
        <div className="zen-container">
          <div className="mb-24 text-center">
            <h2 className="font-headline text-3xl font-light text-[#1a1c19] md:text-4xl uppercase tracking-widest">
              Arta Rejuvenării
            </h2>
          </div>

          <div className="landing-grid-3">
            {[
              {
                title: 'Masaj Suedez',
                icon: <Flower2 size={24} />,
                text: 'Tehnică clasică pentru relaxare musculară, circulație și calm absolut.',
              },
              {
                title: 'Deep Tissue',
                icon: <Leaf size={24} />,
                text: 'Lucru profund pe fascia și tensiunea cronică, cu presiune controlată.',
              },
              {
                title: 'Aromaterapie',
                icon: <Wind size={24} />,
                text: 'Ritual senzorial cu esențe pure, alese pentru starea ta din prezent.',
              },
            ].map((s) => (
              <motion.article
                key={s.title}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}
                variants={fadeIn}
                whileHover={{ scale: 1.02, translateY: -8 }}
                className="landing-service-card"
              >
                <div className="landing-service-icon">{s.icon}</div>
                <h3 className="font-headline text-2xl font-light mb-4">{s.title}</h3>
                <p className={`${bodyMuted} mb-8`}>{s.text}</p>
                <Link to="/services" className="btn-tarif-refined">
                  Vezi Tarife
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-40 bg-white">
        <div className="zen-container landing-about-flex">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easeSoft }}
            className="about-image-wrap"
          >
            <img
              src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1200&auto=format&fit=crop"
              alt="Detaliu spa"
              width={800}
              height={1000}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: easeSoft }}
            className="space-y-8"
          >
            <span className="text-[#526442] font-bold text-[11px] uppercase tracking-[0.3em]">
              Filozofia Noastră
            </span>
            <h2 className="font-headline text-4xl md:text-5xl leading-tight text-[#1a1c19]">
              Esență Pură din <br />
              <span className="italic font-normal text-[#6a5f00]">Sânul Naturii</span>
            </h2>
            <div className="space-y-4 pt-6">
              {['Uleiuri organice certificate', 'Mediu controlat acustic', 'Terapii personalizate 1:1'].map(
                (text) => (
                  <div key={text} className="flex items-center gap-4">
                    <Check className={`h-4 w-4 shrink-0 ${iconSubtle}`} />
                    <span className="text-sm tracking-wide text-[#4b4738]">{text}</span>
                  </div>
                ),
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-40 bg-[#f4f4ef]">
        <div className="zen-container text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-headline text-4xl mb-6 text-[#1a1c19]">Pregătit pentru relaxare?</h2>
            <p className="text-[#4b4738]/70 mb-4">Programează-ți momentul de răsfăț astăzi.</p>

            <div className="landing-contact-strip">
              <div className="c-info">
                <MapPin className={iconSubtle} size={20} />
                <p>Adresă</p>
                <span>București, Nr. 24</span>
              </div>
              <div className="c-info">
                <Clock className={iconSubtle} size={20} />
                <p>Program</p>
                <span>10:00 - 21:00</span>
              </div>
              <div className="c-info">
                <Phone className={iconSubtle} size={20} />
                <p>Telefon</p>
                <span>+40 722 000 111</span>
              </div>
            </div>

            <Link to="/contact" className="landing-cta-gold">
              Rezervă o Ședință
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}