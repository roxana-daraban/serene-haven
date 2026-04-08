import { motion, type HTMLMotionProps } from 'framer-motion'
import { Check, Droplets, Flower2, Hand, Leaf, Wind } from 'lucide-react'
import { Link } from 'react-router-dom'
import './Services.css'

const fadeInProps: HTMLMotionProps<'div'> = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
}

const containerClass = 'max-w-[1200px] mx-auto px-6'

export function ServicesPage() {
  return (
    <div className="services-page bg-[#fafaf5] text-[#1a1c19]">
      <main>
        <section className="services-hero py-32">
          <div className={containerClass}>
            <motion.div {...fadeInProps} className="services-hero-content">
              <span className="services-eyebrow">Experiență Ritualică</span>
              <h1 className="services-hero-title">Ritualuri de Rejuvenare</h1>
              <p className="services-hero-text">
                Descoperă o lume a liniștii unde timpul se oprește. Selecția noastră de terapii
                este concepută pentru a armoniza mintea, corpul și spiritul.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-32" id="services">
          <div className={containerClass}>
            <div className="services-grid">
              <motion.article {...fadeInProps} className="service-card">
                <div className="service-media">
                  <img
                    src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1200&q=85"
                    alt="Masaj Suedez"
                  />
                  <span>60/90 MIN</span>
                </div>
                <div className="service-body">
                  <div className="service-icon">
                    <Flower2 size={18} />
                  </div>
                  <h3>Masaj Suedez</h3>
                  <p>
                    O evadare clasică pentru relaxare profundă, folosind mișcări fluide pentru
                    eliberarea tensiunii musculare.
                  </p>
                  <div className="service-footer">
                    <strong>de la 220 RON</strong>
                    <Link to="/contact" className="service-book-link">
                      Rezervă
                    </Link>
                  </div>
                </div>
              </motion.article>

              <motion.article {...fadeInProps} className="service-card">
                <div className="service-media">
                  <img
                    src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=85"
                    alt="Masaj Deep Tissue"
                  />
                  <span>60/90 MIN</span>
                </div>
                <div className="service-body">
                  <div className="service-icon">
                    <Hand size={18} />
                  </div>
                  <h3>Masaj Deep Tissue</h3>
                  <p>
                    Terapie concentrată pe straturile profunde ale țesutului muscular, potrivită
                    pentru eliberarea nodurilor cronice.
                  </p>
                  <div className="service-footer">
                    <strong>de la 250 RON</strong>
                    <Link to="/contact" className="service-book-link">
                      Rezervă
                    </Link>
                  </div>
                </div>
              </motion.article>

              <motion.article {...fadeInProps} className="service-card">
                <div className="service-media">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCupd_I0ZhHZ81z08p1fKGG7SoFmoiEayJyiyD5C8HOl7c2x1Wdr3DtF_XySXMnWGxZdHlkSIHHyyG7EocaJpE803s5Cdhj7cKAeg098WD__ygdqBvs-Gyt_gI4mSP4_9G9JlJympLHVn--OngUznt51Nnsa73vs3QrYJ3GrLfg5g_hS198K-n8Ig63yHpAJ5NOlJo5ijljkOktERpE1bQjwyPDPQUIeYrH55f9Dq9XIr1J8v78eDmTvM6Wt8Z8Zvg16nmeN_leIQ4"
                    alt="Aromaterapie"
                  />
                  <span>60/90 MIN</span>
                </div>
                <div className="service-body">
                  <div className="service-icon">
                    <Wind size={18} />
                  </div>
                  <h3>Aromaterapie</h3>
                  <p>
                    Călătorie senzorială bazată pe uleiuri esențiale pure, alese pentru a susține
                    starea ta de calm și echilibru.
                  </p>
                  <div className="service-footer">
                    <strong>de la 240 RON</strong>
                    <Link to="/contact" className="service-book-link">
                      Rezervă
                    </Link>
                  </div>
                </div>
              </motion.article>

              <motion.article {...fadeInProps} className="service-card">
                <div className="service-media">
                  <img
                    src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=1200&q=85"
                    alt="Reflexoterapie"
                  />
                  <span>60 MIN</span>
                </div>
                <div className="service-body">
                  <div className="service-icon">
                    <Leaf size={18} />
                  </div>
                  <h3>Reflexoterapie</h3>
                  <p>
                    Metodă ancestrală ce activează punctele reflexe ale tălpilor pentru echilibru
                    funcțional și regenerare profundă.
                  </p>
                  <div className="service-footer">
                    <strong>200 RON</strong>
                    <Link to="/contact" className="service-book-link">
                      Rezervă
                    </Link>
                  </div>
                </div>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="services-experience py-32" id="about">
          <div className={`${containerClass} experience-grid`}>
            <motion.div {...fadeInProps} className="experience-media">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvYplHawWSWUBO98WtXD2n9gAtRE2k4wrqQSUgCQNJ7ig6xEZ5_UzB-bxOyvacyPA0naH30X1XTVyI8xSSXeLNwCLJWWuceOZsMPn9XjoCVo77lb3-KeJH8mi6-OGFSpCQVH34AoAjTPcG4EUyu9IlZBcZawozhqUhxEoJ94fEhTVuR5gY4nNiyA81RAk5hAGxclzrAOPfMQqM8te6HsCo37_DB-RESkD4bbaAt0YADiuxwwaSa0TKvBOP560CT4VN1LE8AShUZcA"
                alt="Ingrediente naturale spa"
              />
            </motion.div>

            <motion.div {...fadeInProps} className="experience-content">
              <span>Filozofia Noastră</span>
              <h2>The Serene Experience</h2>
              <div className="experience-points">
                <div>
                  <Droplets size={18} />
                  <div>
                    <h4>Ingrediente 100% Organice</h4>
                    <p>Uleiuri presate la rece și extracte botanice certificate.</p>
                  </div>
                </div>
                <div>
                  <Flower2 size={18} />
                  <div>
                    <h4>Esențe Personalizate</h4>
                    <p>Arome alese individual pentru starea ta de bine.</p>
                  </div>
                </div>
                <div>
                  <Check size={18} />
                  <div>
                    <h4>Puritate și Calmitate</h4>
                    <p>Ritualuri curate pentru echilibru fizic și mental.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}
