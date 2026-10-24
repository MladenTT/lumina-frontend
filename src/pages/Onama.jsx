import './Onama.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrumb';

const Onama = () => {
    return (
        <div className='body-container'>
            <Navbar />
            
            <div className='container my-4 pt-4'>
                <Breadcrumb />
                <h2><strong>O nama</strong></h2>
                
                <div className="mt-4 mb-4">
                    <p>
                        Dobrodošli u <strong>Lumina doo</strong> – vaše pouzdano mesto za kvalitetnu kupovinu i pažljivo odabran asortiman proizvoda. Osnovani sa vizijom da kupcima ponudimo spoj vrhunskog kvaliteta, pouzdanosti i pristupačnosti, svakodnevno se trudimo da ispunimo vaša očekivanja i pružimo vam vrhunsko korisničko iskustvo.
                    </p>
                    <p>
                        Naša ponuda obuhvata širok spektar raznovrsnih artikala, pažljivo odabranih kako bi zadovoljili potrebe savremenog kupca. Svaki proizvod u našem katalogu biran je sa posebnim akcentom na trajnost, funkcionalnost i estetiku, bilo da je reč o svakodnevnim potrepštinama ili unikatnim predmetima.
                    </p>
                    <p>
                        Iza nas stoji tim posvećenih profesionalaca koji grade dugoročne odnose sa klijentima zasnovane na poverenju, brzoj isporuci i transparentnoj saradnji. Hvala vam što ste izabrali Lumina doo – radujemo se što ste deo naše priče i tu smo da vam uvek pružimo više od obične kupovine.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Onama;