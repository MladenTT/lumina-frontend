import './Body.css'
import Carousel from './Carousel';
import Shortcuts from './Shortcuts';
import Card from './Card';

const Body = () => {
    return (
        <div className="Body-container">
            <div className="Body-left">
                <Shortcuts />
            </div>
            <div className="Body-right">
                 <Carousel />
                 <div className="Body-right-title">
                    <h3>Nasa ponuda</h3>
                </div>
                <div className="row row-cols-3 row-cols-lg-4 g-2">
                    <div className="col">
                        <Card />
                    </div>
                    <div className="col">
                        <Card />
                    </div>
                    <div className="col">
                        <Card />
                    </div>
                    <div className="col">
                        <Card />
                    </div>
                    <div className="col">
                        <Card />
                    </div>
                    <div className="col">
                        <Card />
                    </div>
                    <div className="col">
                        <Card />
                    </div>
                    <div className="col">
                        <Card />
                    </div>
                    <div className="col">
                        <Card />
                    </div>
                    <div className="col">
                        <Card />
                    </div>
                    <div className="col">
                        <Card />
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default Body;