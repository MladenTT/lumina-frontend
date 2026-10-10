import './Body.css'
import Carousel from './Carousel';
import Shortcuts from './Shortcuts';

const Body = () => {
    return (
        <div className="Body-container">
            <div className="Body-left">
                <Shortcuts />
            </div>
            <div className="Body-right">
                 <Carousel />
            </div>
           
        </div>
    );
}

export default Body;