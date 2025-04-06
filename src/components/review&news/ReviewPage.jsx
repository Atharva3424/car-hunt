import reviews from "../../reviews&news_data/reviews-data";
import ReviewCards from "./Reviews";
import { Link } from "react-router-dom";

const ReviewPage=()=>{
  console.log("hello",reviews);
    const ReviewCardList= reviews.map(rv=>
        <div className="col" key={rv.id}>
          <Link to={"detail/"+rv.id} style={{textDecoration:'none'}}> 
            <ReviewCards review={rv}/>
          </Link>
        </div>  )


    return(
    <div className="row p-3 gap-3">
        {ReviewCardList}
    </div>
    )
}
export default ReviewPage;