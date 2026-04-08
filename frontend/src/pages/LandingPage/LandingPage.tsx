import { motion, HTMLMotionProps } from 'framer-motion';
import { Flower2, Leaf, Wind, CheckCircle2, MapPin, Clock, Phone } from 'lucide-react';
import './LandingPage.css';

const fadeInProps: HTMLMotionProps<"div"> = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

export const LandingPage = () => {
  return (
    <div className="landing-page-wrapper">
      {/* Navigation */}
      <nav className="nav-fixed">
        <div className="nav-container">
          <a className="nav-logo" href="#">Serene Haven</a>
          <div className="nav-menu">
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#about">About Us</a>
            <a href="#contact">Contact</a>
          </div>
          <button className="nav-btn">Book Now</button>
        </div>
      </nav>

      <main>
        {/* HERO SECTION - Height Increased to 750px */}
        <section id="home" className="hero-editorial">
          <div className="hero-image-container shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1600&auto=format&fit=crop" 
              className="hero-main-img"
              alt="Luxury Spa Interior"
            />
            <div className="hero-overlay"></div>
            
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="hero-content-box"
            >
              <span className="hero-tag">Bun venit la sanctuarul tău</span>
              <h1 className="hero-title">
                Redescoperă <br/>
                <span className="hero-italic">Echilibrul</span> <br/>
                Tău Interior
              </h1>
              <p className="hero-p">
                Masaje terapeutice premium concepute pentru starea ta de bine. O experiență multisenzorială într-un cadru definit de liniște.
              </p>
              <div className="hero-btns">
                <button className="btn-gold-hero">Explorează Serviciile</button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="services-section">
          <div className="zen-container">
            <div className="section-intro">
              <h2 className="section-title">Arta Rejuvenării</h2>
              <div className="section-divider" />
              <p className="section-desc">Fiecare atingere este o călătorie spre relaxare profundă.</p>
            </div>

            <div className="services-grid-refined">
              {[
                { title: 'Masaj Suedez', icon: <Flower2 size={24}/>, color: 'bg-[#e2e8d8]' },
                { title: 'Deep Tissue', icon: <Leaf size={24}/>, color: 'bg-[#c5b96d]' },
                { title: 'Aromaterapie', icon: <Wind size={24}/>, color: 'bg-[#d8e2d8]' }
              ].map((service, i) => (
                <motion.div 
                  key={i} 
                  {...fadeInProps} 
                  whileHover={{ scale: 1.05, translateY: -10 }}
                  className="service-card-modern"
                >
                  <div className={`icon-bubble ${service.color}`}>
                    {service.icon}
                  </div>
                  <h3>{service.title}</h3>
                  <p>Tehnici rafinate pentru relaxare musculară generală și regenerare spirituală.</p>
                  <button className="btn-tarif-refined">Vezi Tarife</button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="about-section">
          <div className="zen-container about-flex">
            <div className="about-img-wrap">
              <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=1000" alt="About stones" />
            </div>
            <motion.div {...fadeInProps} className="about-text">
              <span className="tag-line">Filozofia Noastră</span>
              <h2>Esență Pură din <br/><i>Sânul Naturii</i></h2>
              <p>Credem în regenerarea adevărată prin ingrediente 100% naturale și terapii personalizate.</p>
              <div className="feature-list">
                {['Uleiuri organice certificate', 'Mediu controlat acustic', 'Terapii personalizate 1:1'].map(f => (
                  <div key={f} className="f-item">
                    <CheckCircle2 size={16} className="text-[#6a5f00]" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="contact-section">
          <div className="zen-container">
            <motion.div {...fadeInProps} className="cta-box-classic shadow-xl">
              <h2 className="section-title">Pregătit pentru relaxare?</h2>
              <p className="cta-subtitle">Programează-ți momentul de răsfăț astăzi.</p>
              
              <div className="contact-info-strip">
                <div className="c-info"><MapPin size={20}/><span>București, Nr. 24</span></div>
                <div className="c-info"><Clock size={20}/><span>Luni-Dum: 10-21</span></div>
                <div className="c-info"><Phone size={20}/><span>+40 722 000 111</span></div>
              </div>
              
              <button className="btn-gold-large">Rezervă o Ședință</button>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="footer-luxe">
        <span className="f-logo">Serene Haven</span>
        <p>© 2026 Crafted for Rejuvenation.</p>
      </footer>
    </div>
  );
};