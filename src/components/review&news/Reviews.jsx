
import reviews from '../../reviews&news_data/reviews-data';
import {useParams,useNavigate} from 'react-router-dom'

const ReviewCards = ({ review }) => {
  // console.log("review:",reviews);
  const {rv_id} = useParams();
  const reviewDec =reviews.find( rv=>rv.id=== rv_id )
  console.log("reviewdec:",reviewDec);
  alert("review card component")
    return (
      <div className="card" style={{ width: '18rem' }}>
        <img
          className="card-img-top"
          src={reviewDec.image}
          alt={reviewDec.name}
          style={{ height: '200px' }}
        />
        <div className="card-body">
          <h5 className="card-title">
            {reviewDec.model} {reviewDec.name}
          </h5>
        </div>
      </div>
    );
  };
  
  export default ReviewCards;