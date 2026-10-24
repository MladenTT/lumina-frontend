import './Map.css'

const Map = () => {
    return (
        <div className="card mb-3 shadow-sm h-100">
            {/* Bootstrap klase za responsivnu srazmeru (16:9 odnos) */}
            <div className="ratio ratio-16x9">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26884.813153785944!2d19.814632910599965!3d45.25943025681213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b1013f2cdc15d%3A0x69b33ac7b454cc84!2z0JHQuNCzINCk0LXRiNC9!5e1!3m2!1ssr!2srs!4v1792874496282!5m2!1ssr!2srs" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Lokacija mape"
                ></iframe>
            </div>
            <div className="card-body">
                <h4 className="card-title">Promenada</h4>
                <p className="card-text">Bulevar Oslobodjenja 119, Novi Sad</p>
                <p className="card-text"></p>
            </div>
        </div>
    );
}

export default Map;