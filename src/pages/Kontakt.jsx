import './Kontakt.css'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Map from '../components/Map'

const Kontakt = () => {
    return (
        <div>
            <Navbar />

            {/* Kontejner sa klasama container i row za Bootstrap grid sistem */}
            <div className="container my-4">
                <div className="row">
                    
                    {/* Leva strana zauzima 4 od 12 kolona na srednjim i velikim ekranima, a na malim ceo red (12) */}
                    <div className="col-md-4 mb-4 mb-md-0">
                        <h2>Kontakt</h2>
                        <p><strong>Naziv firme:</strong> Lumina doo</p>
                        <p><strong>Telefon:</strong> +381(0)22 555-555</p>
                        <p><strong>E-mail:</strong> info@lumina.rs</p>
                        <p><strong>Broj bankovnog racuna:</strong> 222-123456-78</p>
                        <p><strong>PIB:</strong> 123456789</p>
                        <p><strong>Maticni broj:</strong> 012345678</p>
                        <p><strong>Sifra delatnosti:</strong> 3299 - Proizvodnja ostalih predmeta</p>
                    </div>

                    {/* Srednja strana - ravnomerno deli prostor (4 kolone) */}
                    <div className="col-md-4 mb-4 mb-md-0">
                        <Map />
                    </div>

                    {/* Desna strana - ravnomerno deli prostor (4 kolone) */}
                    <div className="col-md-4">
                        <Map />
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Kontakt;