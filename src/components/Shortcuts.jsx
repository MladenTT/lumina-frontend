import './Shortcuts.css';

const Shortcuts = () => {
    return (
        <div className="Shortcuts-container">
            <div className="accordion accordion-flush" id="accordionFlushExample">
                
                {/* Stavka 1 - Naslov */}
                <div className="accordion-item">
                    <h4 className="accordion-header accordion-category-title">
                        Proizvodi
                    </h4>
                </div>

                {/* Stavka 2 - Razdvojeno */}
                <div className="accordion-item">
                    <h2 className="accordion-header custom-split-header">
                        <a href="/tvoja-putanja-2" className="accordion-title-link">
                            Accordion Item #2
                        </a>
                        <button className="accordion-button collapsed custom-collapse-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item’s accordion body.</div>
                    </div>
                </div>

                {/* Stavka 3 - Razdvojeno */}
                <div className="accordion-item">
                    <h2 className="accordion-header custom-split-header">
                        <a href="/tvoja-putanja-3" className="accordion-title-link">
                            Accordion Item #3
                        </a>
                        <button className="accordion-button collapsed custom-collapse-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item’s accordion body.</div>
                    </div>
                </div>

                {/* Stavka 4 - Čist link (sada sa istom klasom da bude potpuno isti) */}
                <div className="accordion-item">
                    <h2 className="accordion-header custom-split-header">
                        <a href="/tvoja-putanja-4" className="accordion-title-link w-100">
                            Accordion Item #4
                        </a>
                    </h2>
                </div>

                {/* Stavka 5 - Čist link */}
                <div className="accordion-item">
                    <h2 className="accordion-header custom-split-header">
                        <a href="/tvoja-putanja-5" className="accordion-title-link w-100">
                            Accordion Item #5
                        </a>
                    </h2>
                </div>

                {/* Stavka 6 - Čist link */}
                <div className="accordion-item">
                    <h2 className="accordion-header custom-split-header">
                        <a href="/tvoja-putanja-6" className="accordion-title-link w-100">
                            Accordion Item #6
                        </a>
                    </h2>
                </div>

                {/* Stavka 7 - Razdvojeno */}
                <div className="accordion-item">
                    <h2 className="accordion-header custom-split-header">
                        <a href="/tvoja-putanja-7" className="accordion-title-link">
                            Accordion Item #7
                        </a>
                        <button className="accordion-button collapsed custom-collapse-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSeven" aria-expanded="false" aria-controls="flush-collapseSeven">
                        </button>
                    </h2>
                    <div id="flush-collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the seventh item’s accordion body.</div>
                    </div>
                </div>

                {/* Stavka 8 - Čist link */}
                <div className="accordion-item">
                    <h2 className="accordion-header custom-split-header">
                        <a href="/tvoja-putanja-8" className="accordion-title-link w-100">
                            Accordion Item #8
                        </a>
                    </h2>
                </div>

                {/* Stavka 9 - Čist link */}
                <div className="accordion-item">
                    <h2 className="accordion-header custom-split-header">
                        <a href="/tvoja-putanja-9" className="accordion-title-link w-100">
                            Accordion Item #9
                        </a>
                    </h2>
                </div>

                {/* Stavka 10 - Čist link */}
                <div className="accordion-item">
                    <h2 className="accordion-header custom-split-header">
                        <a href="/tvoja-putanja-10" className="accordion-title-link w-100">
                            Accordion Item #10
                        </a>
                    </h2>
                </div>

            </div>
        </div>
    );
}

export default Shortcuts;