import { useState } from "react";

const SignUp =({existingUser})=>{
    const [registerUser,setRegisterUser]= useState({
        name:'',
        age:"",
        gender:"",
        mobileNo:"",
        birthDate:"",
        emailId:"",
    });
    const handleRegistrationForm =e=>{
        e.preventDefault();
        alert("Registration is completed")
    }
    return(
        <div className=" border border-3 rounded popover m-3 p-3 w-75 text-bg-success mx-auto ">
            <div>
                <h2>Register Here</h2>
            </div>
            <div>
                <form onSubmit={handleRegistrationForm}>
                    <div>
                        <input type="text" placeholder="Enter Your Name" className="form-control" id="n1" required value={registerUser.name} onChange={(e)=>setRegisterUser({...registerUser,name:e.target.value})} />
                    </div>
                    <div>
                        <input type="number" placeholder="Age" className="form-control" id="a1" required value={registerUser.age} onChange={(e)=>setRegisterUser({...registerUser,age:e.target.value})} />
                    </div>
                    {/* <div>
                        <input type="checkbox" className="form-control" id="c1" />
                    </div> */}
                    <div>
                        <input type="tel" required className="form-control" placeholder="Enter Your Number" min={10} max={10} id="t1" value={registerUser.mobileNo} onChange={(e)=>setRegisterUser({...registerUser,mobileNo:e.target.value})} />
                    </div>
                    <div>
                        <input type="date" className="form-control" id="d1" required value={registerUser.birthDate} onChange={(e)=>setRegisterUser({...registerUser,birthDate:e.target.value})} />
                    </div>
                    <div>
                        <input type="email" placeholder="Enter Your Email" className="form-control" id="e1" required value={registerUser.emailId} onChange={(e)=>setRegisterUser({...registerUser,emailId:e.target.value})} />
                    </div>
                    <div className=" d-flex justify-content-center m-2 gap-2">
                        <button className="btn btn-sm btn-light" type="submit">Submit</button>
                    </div>
                </form>
            </div>
            <div>
            <h6>Already a user! Please <button className="btn btn-sm btn-danger" onClick={()=>existingUser(true)}>Sign In</button></h6>
            </div>

        </div>
    )

}
export default SignUp;