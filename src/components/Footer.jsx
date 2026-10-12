import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer-container">
            <div className="container">
                {/* Korišćenjem row-cols-5 osiguravamo da je svih 5 sekcija uvek u istom redu */}
                <footer className="row row-cols-5 py-5 my-5 border-top">
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
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 fg-2">Dostava</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 fg-2">Nacini placanja</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 fg-2">Garancija</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 fg-2">Zamena/reklamacija</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col mb-4">
                        <h5>Proizvodjaci</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 fg-2">Yankee Candle</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 fg-2">Bolsius</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 fg-2">Chesapeake Bay</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 fg-2">Millefiori</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 fg-2">Wood Wick</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="col mb-4">
                        <h5>Informacije</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 fg-2">Blog</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 fg-2">Cesta pitanja</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 fg-2">Bezbednost</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 fg-2">O nama</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 fg-2">Kontakt</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col mb-4">
                        <h5>Kontakti</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 fg-2">+381(0)123 456</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 fg-2">info@lumina.rs</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 fg-2">Bezbednost</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="#" className="nav-link p-0 fg-2">O nama</a>
                            </li>
                            <li className="nav-item mb-2">
                                <a href="https://maps.app.goo.gl/NP644iQQX4TbSUuR7" className="nav-link p-0 fg-2">Kontakt</a>
                            </li>
                        </ul>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Footer;