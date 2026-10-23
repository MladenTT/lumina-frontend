import './Review.css';

const Review = () => {
    return (
        <div className="review-container">
            <div className="review-left">
                <div>
                    <p>Prosecna ocena</p>
                </div>
                <div><h4>0.00</h4></div>
            </div>
            <div className="review-right">
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{ width: '0%', backgroundColor: '#ffc107' }}></div>
                </div>
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{ width: '25%', backgroundColor: '#ffc107' }}></div>
                </div>
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{ width: '50%', backgroundColor: '#ffc107' }}></div>
                </div>
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{ width: '75%', backgroundColor: '#ffc107' }}></div>
                </div>
                <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar" style={{ width: '100%', backgroundColor: '#ffc107' }}></div>
                </div>
            </div>
        </div>
    );
};

export default Review;