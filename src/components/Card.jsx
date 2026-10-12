import './Card.css';

const Card = () => {
    return (
        <div className="card-container">
            <div className="card-img-wrapper">
                <img src="/images/model/model1.jpg"  alt="..."></img>
            </div>
            <div className="card-body">
                <h6 className="card-title">Card title</h6>
                <p className="card-text">Short card description</p>
                <button type="button" className="btn btn1">Dodaj u korpu</button>
            </div>
        </div>
    );
}

export default Card;