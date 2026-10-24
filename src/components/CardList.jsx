import Card from './Card';


const CardList = () => {
  return (
    <div className="card-list">
        <div className="Body-right-title">
            <h3>Nasa ponuda</h3>
        </div>
        <div className="row row-cols-3 row-cols-lg-4 g-3 p-2">
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
    )};

export default CardList;