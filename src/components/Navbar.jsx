import './Navbar.css'
import TopBar from './TopBar.jsx'
import logo from '../assets/logo2.png'
import { useNavigate, useLocation } from 'react-router-dom'; // 1. Uvezen useLocation

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 2. Uzimamo trenutnu lokaciju (URL)

  return (
    <div>
        <TopBar />
        <div className="Navbar">
            <nav className="navbar navbar-expand-lg">
            <div className="container-fluid position-relative align-items-start">
                
                {/* Leva strana: Hamburger dugme */}
                <div className="d-flex align-items-center" style={{ minWidth: '40px', marginTop: '12px' }}>
                    <button 
                        className="navbar-toggler me-2" 
                        type="button" 
                        data-bs-toggle="collapse" 
                        data-bs-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>

                {/* Sredina: Logo koji vodi na početnu */}
                <a 
                    className="navbar-brand position-absolute start-50 translate-middle-x m-0 top-0" 
                    href="#" 
                    onClick={(e) => { e.preventDefault(); navigate('/'); }}
                    style={{ cursor: 'pointer' }}
                >
                    <img src={logo} alt="Logo" style={{ height: '60px' }} />
                </a>
                
                {/* Desna strana: Korpa */}
                <div className="cart-SVG ms-auto order-lg-last">
                    <button type="button" className="btn position-relative">
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-cart2" viewBox="0 0 16 16">
                            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l1.25 5h8.22l1.25-5zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
                        </svg>
                        <span className="position-absolute top-25 start-75 translate-middle badge rounded-pill bg-danger">
                            3
                            <span className="visually-hidden">unread messages</span>
                        </span>
                    </button> 
                </div>

                {/* Meni i pretraga */}
                <div className="collapse navbar-collapse w-100 mt-2" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            {/* Dinamički dodeljujemo 'active' ako je putanja tačno '/' */}
                            <a 
                                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
                                aria-current={location.pathname === '/' ? 'page' : undefined}
                                href="#" 
                                onClick={(e) => { e.preventDefault(); navigate('/'); }}
                            >
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            {/* Dinamički dodeljujemo 'active' ako je putanja '/kontakt' */}
                            <a 
                                className={`nav-link ${location.pathname === '/kontakt' ? 'active' : ''}`} 
                                aria-current={location.pathname === '/kontakt' ? 'page' : undefined}
                                href="#" 
                                onClick={(e) => { e.preventDefault(); navigate('/kontakt'); }}
                            >
                                Kontakt
                            </a>
                        </li>
                        <li className="nav-item">
                            {/* Dinamički dodeljujemo 'active' ako je putanja '/kontakt' */}
                            <a 
                                className={`nav-link ${location.pathname === '/o-nama' ? 'active' : ''}`} 
                                aria-current={location.pathname === '/0-nama' ? 'page' : undefined}
                                href="#" 
                                onClick={(e) => { e.preventDefault(); navigate('/o-nama'); }}
                            >
                                O nama
                            </a>
                        </li>
                        <li className="nav-item">
                            {/* Dinamički dodeljujemo 'active' ako je putanja '/kontakt' */}
                            <a 
                                className={`nav-link ${location.pathname === '/kontakt' ? 'active' : ''}`} 
                                aria-current={location.pathname === '/kontakt' ? 'page' : undefined}
                                href="#" 
                                onClick={(e) => { e.preventDefault(); navigate('/kontakt'); }}
                            >
                                Kontakt
                            </a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-secondary" type="submit">Search</button>
                    </form>
                </div>

            </div>
            </nav>
        </div>    
    </div>    
  );
}

export default Navbar;