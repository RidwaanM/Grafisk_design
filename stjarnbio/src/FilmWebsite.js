import React, { useRef, useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const films = [
  {
    id: 1,
    image: '4-7.webp',
    title: 'De fyra som återstod',
    description:
      'Är du en sann skräckfantast eller blott en harig amatör? Kolla hur många av dessa 50 skräckklassiker som du har missat.',
  },
  {
    id: 2,
    image: '4-7.webp',
    title: 'De fyra som återstod',
    description:
      'Är du en sann skräckfantast eller blott en harig amatör? Kolla hur många av dessa 50 skräckklassiker som du har missat.',
  },

];

const FilmWebsite = () => {
  const filmSectionRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cookiesAccepted, setCookiesAccepted] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('cookiesAccepted')) {
      setCookiesAccepted(true);
    }
  }, []);

  const scrollToFilms = () => {
    filmSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const toggleMenu = () => setMenuOpen((open) => !open);
  const closeMenu = () => setMenuOpen(false);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setCookiesAccepted(true);
  };

  return (
    <div>
      {/* Navbar */}
      <header className="navbar">
        <img src="/logo.svg" alt="Stjärn Bio" className="logo" />
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Stäng meny' : 'Öppna meny'}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
        <nav
          id="primary-navigation"
          className={menuOpen ? 'nav-menu open' : 'nav-menu'}
          aria-label="Huvudmeny"
        >
          <a href="#" onClick={closeMenu}>
            HEM
          </a>
          <a href="#" onClick={closeMenu}>
            KONTAKT
          </a>
          <a href="#" onClick={closeMenu}>
            BILJETT
          </a>
        
        </nav>
        {menuOpen && <div className="backdrop" onClick={closeMenu} aria-hidden="true"></div>}
      </header>

      {/* Background Section */}
      <section className="background" role="banner">
        <h1>Upptäck Magin i Filmens Värld</h1>
        <button onClick={scrollToFilms} className="main-cta">
          Se Aktuella Filmer
        </button>
      </section>

      {/* Popular Films Section */}
      <section className="popular-films" ref={filmSectionRef} aria-labelledby="popular-films-title">
        <h2 id="popular-films-title">Populära Filmer</h2>
        <div className="film-cards">
          {films.map(({ id, image, title, description }) => (
            <article key={id} className="film-card" tabIndex="0">
              <img src={`/${image}`} alt={`Filmaffisch för ${title}`} />
              <div className="content">
                <h3>{title}</h3>
                <p>{description}</p>
                <button aria-label={`Se mer information om filmen ${title}`}>Se Mer</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer>
        <img src="/logo.svg" alt="Stjärn Bio" className="footer-logo" />
        <p>Kontakt: kontakt@stjarnbio.se | Telefon: 08-123 456 78</p>
        <p>Öppet Vardagar: 09:00 - 17:00</p>
        <p>© 2025 Stjärn Bio | Integritetspolicy | Cookie-inställningar</p>
      </footer>

      {/* Cookie Popup */}
      {!cookiesAccepted && (
        <div className="cookie-popup" role="alert" aria-live="assertive">
          <p>
            Vi använder cookies för att förbättra din upplevelse.
            <button className="accept-button" onClick={acceptCookies}>
              Acceptera
            </button>
          </p>
        </div>
      )}
    </div>
  );
};

export default FilmWebsite;
