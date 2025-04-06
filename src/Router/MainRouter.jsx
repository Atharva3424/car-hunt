import {BrowserRouter,Routes,Route } from "react-router-dom"
import MainNavBar from "./MainNavBar";
import NewCars from "../components/new cars/NewCars";
import Reviews from "../components/review&news/Reviews";
import Home from "../components/Home";
import Login from "../components/login/Login";
import PageNotFound from "../components/PageNotFound";
import ReviewDetails from "../components/review&news/ReviewDetails";


const MainRouter = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainNavBar/>}>
                    <Route path="home" element={<Home/>}/>
                    <Route path="new" element={<NewCars/>}/>
                    <Route path="review" element={<Reviews/>}/>
                    <Route path="detail/:rv_id" element={<ReviewDetails/>}/>
                    {/* </Route> */}
                    <Route path="login" element={<Login/>} />
                    <Route path="*" element={<PageNotFound/>}/>
                </Route>
                
            </Routes>
        </BrowserRouter>
    )

}
export default MainRouter;