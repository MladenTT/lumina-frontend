import './LandingPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Shortcuts from '../components/Shortcuts';
import Breadcrumb from '../components/Breadcrumb'

const LandingPage = () => {
    return (
        <div className="LandingPage-container">
            <Navbar />
            <div className="Body-container">
                <div className="Body-left">
                    <Shortcuts />
                </div>
                <div className="Body-right">

                    <Breadcrumb />

                    <div className="titleLandingPage">
                        <p>White Strawberry Bellini Place Signature mirisna sveća</p>
                    </div>

                    <div className='product-container'>

                        <div className="product-container-left"> {/* DRZI SVE DIVOVE ZA SLIKE*/}
                            <div className="mainImgContainer"> {/* drzi veliku sliku*/}
                                <img src="/images/spotlight/mimoza.webp" alt="" />
                            </div>
                            <div className='smallContainer'> {/* drzi divove za male slike*/}
                                <div className='smallImgContainer'>
                                    <img src="/images/spotlight/mimoza2.webp" alt="" />
                                </div>
                                <div className='smallImgContainer'>
                                    <img src="/images/spotlight/mimoza4.webp" alt="" />
                                </div>
                                <div className='smallImgContainer'>
                                    <img src="/images/spotlight/mimoza3.webp" alt="" />
                                </div>
                            </div>
                        </div>

                        <div className='product-container-right'>
                            <div className='id-container'>
                                <div className='natpis'>Id artikala:</div>
                                <div className='id-vrednost'>15666777</div>
                            </div>
                            <div className='cena-container'>
                                <div className='natpis'>Cena:</div>
                                <div className='cena-vrednost'>3200.00 RSD</div>
                            </div>
                            <div className='kolicina-container'>
                                <div className='natpis'>
                                    Potrebna količina
                                </div>
                                <div className="quantity-group" role="group" aria-label="Količina">
                                    <button type="button" className="btn-qty">-</button>
                                    <input type="number" min="0" defaultValue="1" className="qty-input" />
                                    <button type="button" className="btn-qty">+</button>
                                </div>
                            </div>
                            <div className='dugme-kupovina-container'>
                                <button type="button" class="btn-outline theme-success">
                                    <span className='tekst-dugme'>Dodaj u korpu</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-basket2-fill cart-icon" viewBox="0 0 16 16">
                                        <path d="M5.929 1.757a.5.5 0 1 0-.858-.514L2.217 6H.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h.623l1.844 6.456A.75.75 0 0 0 3.69 15h8.622a.75.75 0 0 0 .722-.544L14.877 8h.623a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1.717L10.93 1.243a.5.5 0 1 0-.858.514L12.617 6H3.383zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"/>
                                    </svg>
                                </button>
                                <button type="button" className="btn-wishlist">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    

                   

                </div>
  
           
             </div>
            <Footer />
        </div>
    )};


    export default LandingPage;