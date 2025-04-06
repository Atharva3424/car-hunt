import { useState } from "react";

const Signin=({newUser})=>{
    const [loginUser, setLoginUser] = useState({
        username:"",
        password:'',
    });

    const handleSubmit= (e)=>{
        e.preventDefault();
        alert("Form Submitted")
    }
    return(
        <div className=" container popover d-flex flex-column gap-3 rounded mx-auto w-50 m-3 p-3 text-bg-warning">
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input type="text" required className="form-control" placeholder="Enter Your User Name" id="lo" value={loginUser.username} onChange={(e)=>setLoginUser({...loginUser,username:e.target.value})} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="pw" required placeholder="Enter Your Password " max={16} value={loginUser.password} onChange={(e)=>setLoginUser({...loginUser,password:e.target.value})} />
                </div>
                <div className=" d-flex justify-content-center gap-3">
                    <button className="btn btn-info btn-outline-dark" type="submit">Login</button>
                </div>
            </form>
            <div>
                <h6>New user Register Here <button className="btn btn-link btn-outline-light btn-success btn-sm" onClick={()=>newUser(false)}>Register</button></h6>
            </div>
        </div>
    )
}
export default Signin;