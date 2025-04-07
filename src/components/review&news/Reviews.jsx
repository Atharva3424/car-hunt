

const ReviewCards = ({ review }) => {
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img
          className="card-img-top"
          src={review.image}
          alt={review.name}
          style={{ height: '200px' }}
        />
        <div className="card-body">
          <h5 className="card-title">
            {review.model} {review.name}
          </h5>
        </div>
      </div>
    );
  };
  
  export default ReviewCards;