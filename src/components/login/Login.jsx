import { useState } from "react"
import Signin from "./Signin"
import SignUp from "./Signup"

const Login =()=>{
    const [isExistinguser,setIsExistingUser]= useState(true)
    
    return <div>
        {isExistinguser ? <Signin newUser={setIsExistingUser}/>: <SignUp existingUser={setIsExistingUser}/> }
    </div>

}
export default Login;