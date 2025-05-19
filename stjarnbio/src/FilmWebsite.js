import React, { useRef, useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const FilmWebsite = () => {
    const filmSectionRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [cookiesAccepted, setCookiesAccepted] = useState(false);

    useEffect(() => {
        // Check if cookies were already accepted
        if (localStorage.getItem('cookiesAccepted')) {
            setCookiesAccepted(true);
        }
    }, []);

    const scrollToFilms = () => {
        filmSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleMenu = () => setMenuOpen(!menuOpen);
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
                <button className="menu-toggle" onClick={toggleMenu}>
                    {menuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
                <nav className={menuOpen ? 'nav-menu open' : 'nav-menu'}>
                    <a href="#" onClick={closeMenu}>HEM</a>
                    <a href="#" onClick={closeMenu}>KONTAKT</a>
                    <a href="#" onClick={closeMenu}>BILJETT</a>
                </nav>
                {menuOpen && <div className="backdrop" onClick={closeMenu}></div>}
            </header>

            {/* Background Section */}
            <section className="background">
                <h1>Upptäck Magin i Filmens Värld</h1>
                <button onClick={scrollToFilms}>Se Aktuella Filmer</button>
            </section>

            {/* Popular Films Section */}
            <section className="popular-films" ref={filmSectionRef}>
                <h2>Populära Filmer</h2>
                <div className="film-cards">
                    {["4-7.webp", "4-7.webp"].map((film, index) => (
                        <div key={index} className="film-card">
                            <img src={`/${film}`} alt={`Film ${index + 1}`} />
                            <div className="content">
                                <h3>De fyra som återstod</h3>
                                <p>“Är du en sann skräckfantast eller blott en harig amatör? Kolla hur många av dessa 50 skräckklassiker som du har missat.”</p>
                                <button>Se Mer</button>
                            </div>
                        </div>
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
                <div className="cookie-popup">
                    <p>Vi använder cookies för att förbättra din upplevelse. <button onClick={acceptCookies}>Acceptera</button></p>
                </div>
            )}
        </div>
    );
};

export default FilmWebsite;