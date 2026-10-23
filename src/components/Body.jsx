import './Body.css'
import Carousel from './Carousel';
import Shortcuts from './Shortcuts';
import CardList from './CardList';


const Body = () => {
    return (
        <div className="Body-container">
            <div className="Body-left">
                <Shortcuts />
            </div>
            <div className="Body-right">
                <Carousel />
                <CardList />
                <div className="mobile-shortcuts">
                    <Shortcuts />
                </div>
            </div>
           
        </div>
    );
}

export default Body;