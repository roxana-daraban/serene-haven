import { type FormEvent, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import './Contact.css'

const easeSoft: [number, number, number, number] = [0.22, 1, 0.36, 1]

const iconWrapClass = 'mt-0.5 shrink-0 text-[#6a5f00] opacity-60'

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      <section className="contact-hero" aria-labelledby="contact-hero-heading">
        <div className="contact-hero-bg" aria-hidden>
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbxer3KqieN25-KL6z5LCqU7lxfG2CcNneEltIL3t8E4p56fcl993LJnhdX9_5mkt0eANasM9RN4uqi_fb7ll6Q8hKb_8jmPkxRlzbyWVWNHCFHQHSnoTc26FERE1FBuATKY9aMVmsryGf6MLZ3i37SzCMVx4fF-PXs_VUR2B1NMIOgW6ofjrYtQqLUOzToRRTu3cLkX0MfGa0cHZJSOUbYxyFCD39M65DkxCOc3we9DSCHUaQvIBZ4KkHjMf9om1c09vIyC_5czs"
            alt=""
            decoding="async"
          />
        </div>
        <div className="contact-hero-gradient" aria-hidden />
        <motion.div
          className="contact-hero-inner"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: easeSoft }}
        >
          <span className="contact-hero-eyebrow">Sanctuarul Tău de Liniște</span>
          <h1 id="contact-hero-heading" className="contact-hero-title">
            Contactează-ne
          </h1>
        </motion.div>
      </section>

      <section className="contact-main py-24 md:py-32 lg:py-40">
        <div className="zen-container">
          <div className="contact-grid">
            <motion.aside
              className="contact-info-stack lg:order-2"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: easeSoft, delay: 0.14 }}
            >
              <div className="contact-info-card">
                <h3>Informații Contact</h3>
                <ul className="contact-info-list">
                  <li>
                    <span className={iconWrapClass}>
                      <Phone className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                    </span>
                    <div>
                      <p className="contact-info-label">Telefon</p>
                      <p className="contact-info-value">
                        <a href="tel:+40722000111" className="text-inherit hover:text-[#6a5f00]">
                          +40 722 000 111
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className={iconWrapClass}>
                      <Mail className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                    </span>
                    <div>
                      <p className="contact-info-label">Email</p>
                      <p className="contact-info-value">
                        <a
                          href="mailto:contact@serenehaven.ro"
                          className="text-inherit hover:text-[#6a5f00]"
                        >
                          contact@serenehaven.ro
                        </a>
                      </p>
                    </div>
                  </li>
                  <li>
                    <span className={iconWrapClass}>
                      <MapPin className="h-5 w-5" strokeWidth={1.6} aria-hidden />
                    </span>
                    <div>
                      <p className="contact-info-label">Adresă</p>
                      <p className="contact-info-value">Strada Liniștii Nr. 24, București</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="contact-info-card contact-info-card--hours">
                <h3>Program</h3>
                <div>
                  <div className="contact-hours-row">
                    <span className="contact-hours-label">Luni – Vineri</span>
                    <span className="contact-hours-value">09:00 – 21:00</span>
                  </div>
                  <hr className="contact-hours-divider" />
                  <div className="contact-hours-row">
                    <span className="contact-hours-label">Sâmbătă</span>
                    <span className="contact-hours-value">10:00 – 18:00</span>
                  </div>
                  <hr className="contact-hours-divider" />
                  <div className="contact-hours-row">
                    <span className="contact-hours-label">Duminică</span>
                    <span className="contact-hours-value">Închis</span>
                  </div>
                </div>
              </div>
            </motion.aside>

            <motion.div
              className="contact-form-panel lg:order-1"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, ease: easeSoft, delay: 0.28 }}
            >
              <h2 className="contact-form-title">Trimite un Mesaj</h2>
              {submitted ? (
                <p className="font-body text-sm leading-relaxed text-[#4b4738]">
                  Mulțumim — mesajul tău a fost înregistrat. Îți răspundem în curând.
                </p>
              ) : (
                <form className="contact-form-fields" onSubmit={handleSubmit} noValidate>
                  <div className="contact-field-row">
                    <div className="contact-field">
                      <label htmlFor="contact-name">Nume Complet</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        className="contact-field-input"
                        placeholder="Ex: Maria Popescu"
                        required
                      />
                    </div>
                    <div className="contact-field">
                      <label htmlFor="contact-email">Email</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="contact-field-input"
                        placeholder="maria@exemplu.ro"
                        required
                      />
                    </div>
                  </div>
                  <div className="contact-field">
                    <label htmlFor="contact-message">Mesajul Tău</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      className="contact-field-textarea"
                      placeholder="Cum te putem ajuta să te relaxezi?"
                      required
                    />
                  </div>
                  <button type="submit" className="contact-submit">
                    Trimite Mesajul
                  </button>
                </form>
              )}
            </motion.div>
          </div>

          <motion.section
            className="contact-map-section"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: easeSoft, delay: 0.1 }}
            aria-labelledby="contact-map-heading"
          >
            <h2 id="contact-map-heading" className="sr-only">
              Locație pe hartă
            </h2>
            <div className="contact-map-frame">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuATpMxAMzd3r68Mbd29DpUfPiUrY0aIhi1v31vFPgMsBUSUfMrCXODFdDz84u6bYcmm3GyMoL1TfmAkDeD1ph_dISgQ_5QrNZz48LZhnyp4tf9GIWvYAHiRKUIoWexrUs8Yu6XlZTu3IzWvcLVQq2XiXMb9WAAS1NwOdAGrjBVqneUB-f6N_amkMibDtP5nUtDUKdQGLziodeGK7jhxLeyCvmKSbmLPAxygY55GQ-yaJFA56VItnLiK74mDjOj5kpYd_lycfxOYw9g"
                alt="Hartă stilizată — zona Serene Haven, București"
                decoding="async"
              />
              <div className="contact-map-tint" aria-hidden />
              <div className="contact-map-pin" aria-hidden>
                <div className="contact-map-ping" />
                <div className="contact-map-pin-inner">
                  <MapPin className="h-5 w-5 text-white" strokeWidth={2} />
                </div>
              </div>
              <div className="contact-map-glass">
                <h4>Găsește-ne ușor</h4>
                <p>
                  Suntem situați într-o zonă liniștită, ferită de zgomotul orașului, pentru a-ți oferi
                  relaxarea supremă.
                </p>
              </div>
            </div>
          </motion.section>
        </div>
      </section>
    </div>
  )
}
