import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer-container">
            <div className="container">
                {/* GORNJI DEO: Za velike ekrane */}
                <footer className="row row-cols-5 py-5 my-5 border-top d-none d-lg-flex">
                    <div className="col mb-4">
                        <a href="/" className="d-flex align-items-center mb-3 theme-inverse text-decoration-none" aria-label="Bootstrap">
                            <svg className="bi me-2" width="40" height="32" aria-hidden="true">
                                <use href="#bootstrap"></use>
                            </svg>
                        </a>
                        <p className="fg-2">© 2026</p>
                    </div>

                    <div className="col mb-4">
                        <h5>Korisni linkovi</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Dostava</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Nacini placanja</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Garancija</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Zamena/reklamacija</a></li>
                        </ul>
                    </div>

                    <div className="col mb-4">
                        <h5>Proizvodjaci</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Yankee Candle</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Bolsius</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Chesapeake Bay</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Millefiori</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Wood Wick</a></li>
                        </ul>
                    </div>
                    
                    <div className="col mb-4">
                        <h5>Informacije</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Blog</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Cesta pitanja</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Bezbednost</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">O nama</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Kontakt</a></li>
                        </ul>
                    </div>

                    <div className="col mb-4">
                        <h5>Kontakti</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">+381(0)123 456</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">info@lumina.rs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Bezbednost</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">O nama</a></li>
                            <li className="nav-item mb-2"><a href="https://maps.app.goo.gl/NP644iQQX4TbSUuR7" className="nav-link p-0 fg-2">Kontakt</a></li>
                        </ul>
                    </div>
                </footer>

                {/* DONJI DEO (Akordion): Za mobilne ekrane sa automatskim poravnanjem */}
                <div className="accordion py-4 d-block d-lg-none">
                    <div className="mb-3 text-center">
                        <p className="fg-2">© 2026 LUMINA</p>
                    </div>

                    <details 
                        className="accordion-item" 
                        name="footerAccordion"
                        onToggle={(e) => {
                            if (e.target.open) {
                                // Čim se otvori, glatko spušta pogled da ceo sadržaj stane u ekran
                                e.target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                            }
                        }}
                    >
                        <summary className="accordion-header">
                            Korisni linkovi
                            <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m2 5 6 6 6-6"/></svg>
                        </summary>
                        <div className="accordion-body">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Dostava</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Nacini placanja</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Garancija</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Zamena/reklamacija</a></li>
                            </ul>
                        </div>
                    </details>

                    <details 
                        className="accordion-item" 
                        name="footerAccordion"
                        onToggle={(e) => {
                            if (e.target.open) {
                                e.target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                            }
                        }}
                    >
                        <summary className="accordion-header">
                            Proizvodjaci
                            <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m2 5 6 6 6-6"/></svg>
                        </summary>
                        <div className="accordion-body">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Yankee Candle</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Bolsius</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Chesapeake Bay</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Millefiori</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Wood Wick</a></li>
                            </ul>
                        </div>
                    </details>

                    <details 
                        className="accordion-item" 
                        name="footerAccordion"
                        onToggle={(e) => {
                            if (e.target.open) {
                                e.target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                            }
                        }}
                    >
                        <summary className="accordion-header">
                            Informacije
                            <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m2 5 6 6 6-6"/></svg>
                        </summary>
                        <div className="accordion-body">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Blog</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Cesta pitanja</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Bezbednost</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">O nama</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Kontakt</a></li>
                            </ul>
                        </div>
                    </details>

                    <details 
                        className="accordion-item" 
                        name="footerAccordion"
                        onToggle={(e) => {
                            if (e.target.open) {
                                e.target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                            }
                        }}
                    >
                        <summary className="accordion-header">
                            Kontakti
                            <svg className="accordion-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m2 5 6 6 6-6"/></svg>
                        </summary>
                        <div className="accordion-body">
                            <ul className="nav flex-column">
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">+381(0)123 456</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">info@lumina.rs</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">Bezbednost</a></li>
                                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 fg-2">O nama</a></li>
                                <li className="nav-item mb-2"><a href="https://maps.app.goo.gl/NP644iQQX4TbSUuR7" className="nav-link p-0 fg-2">Kontakt</a></li>
                            </ul>
                        </div>
                    </details>
                </div>
            </div>
            <div className="payment-methods-img">
                <div>
                    <img src="/images/credit-cards/visa.png" alt="" />
                </div>
                 <div>
                    <img src="/images/credit-cards/mastercard.webp" alt="" />
                </div>
                 <div>
                    <img src="/images/credit-cards/maestro.webp" alt="" />
                </div>
                 <div>
                    <img src="/images/credit-cards/dina.webp" alt="" />
                </div>
                   <div>
                    <img src="/images/credit-cards/amex.webp" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Footer;