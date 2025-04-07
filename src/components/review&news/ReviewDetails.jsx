import {useParams,useNavigate} from 'react-router-dom'
import reviews from '../../reviews&news_data/reviews-data';

const ReviewDetails =()=>{
    // alert("hello")
    const navigate = useNavigate();
    const {rv_id} = useParams();
    // console.log("rv_id=",rv_id);
    // console.log("mainpage trigggered",reviews);

    const reviewDec =reviews.find( rv=>rv.id=== rv_id )
    console.log("reviewdec",reviewDec);
    return(
        <div className=' d-flex flex-column container mt-3 p-2 border rounded border-black gap-2'>
            <div className=' d-flex justify-content-evenly'>
                <div>
                    <img src={reviewDec.image} alt={reviewDec.name} />
                </div>
                <div className=' d-flex flex-column justify-content-center'>
                    <h2>{reviewDec.model} {reviewDec.name} </h2>
                    <h3> {reviewDec.description}</h3>
                </div>
            </div>
            <div>
                <table className='table table-striped'>
                    <thead>
                        <tr className='table-dark'>
                            <th> Description</th>
                            <th>Information</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Seats</th>
                            <td>{reviewDec.seats} </td>
                        </tr>
                        <tr>
                            <th>Engine</th>
                            <td>{reviewDec.engine}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <button className='btn btn-outline-success' onClick={()=>navigate("reviews")}>Back</button>
            </div>
        </div>
    )
}
export default ReviewDetails;