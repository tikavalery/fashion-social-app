import React,{useState,useContext,} from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../../App'
import M from 'materialize-css'
import "./SignIn.css"
import leftImg from "./assets/ink1.png"
import RightImg from "./assets/Ink.png"
const SignIn  = ()=>{
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = (evt) => {
        // evt.preventDefault()
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
           alert("Invalid Emnail or Password")
            return
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               localStorage.setItem("jwt",data.token)
               localStorage.setItem("user",JSON.stringify(data.user))
               dispatch({type:"USER",payload:data.user})
               M.toast({html:"signedin success",classes:"#43a047 green darken-1"})
               history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
       <div>
           <div>
           <div>

		<div className="d-flex justify-content-between">
			<div className="w-33 d-sm-flex align-items-center justify-content-end pr-3">
				<img src={leftImg} alt="" />
			</div>
    <div className="mx-auto login-container shadow-only-pc px-4 pb-5 rounded-lg mb-4">
        <div>
  <div className="tab-content">
    <div className="tab-pane fade show active mt-5 pt-5" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
        <h5 className="font-weight-bold mb-0">Welcome back to Social Fashion</h5>
                                        <p className="second-option">New here?
                                        <Link to="/signup" className="text-success">Create an account</Link>
                                            
                                        </p>
      {/* <form> */}
  
  

				<div className="form-outline mb-3">
        	<label className="mb-1 form-label" for="loginName">Email</label>
                                                <input
                                                    type="email"
                                                    id="loginName"
                                                    className="form-control"
                                                    value={email}
                                                    onChange={(e)=>setEmail(e.target.value)}/>
        </div>
  
        <div className="form-outline mb-4">
					<div className="d-flex justify-content-between">
                                                    <label className="mb-1 form-label" for="loginPassword">Password</label>
                                                    <Link to="/reset" className="text-success">Forgot your password?</Link>
				
					</div>	
                                                <input
                                                    type="password"
                                                    id="loginPassword"
                                                    className="form-control"
                                                    value={password}
                                                    onChange={(e)=>setPasword(e.target.value)}/>
        </div>
  
                                            <button type="submit"
                                                className="btn btn-success btn-block mb-3 py-2"
                                                onClick={() => PostData()}>Sign in</button>
				<div className="text-center pt-1">
					<hr className="bg-dark" />
					<span className="bg-white px-3">or sign in with</span>
				</div>
  
        <button type="button" className="btn btn-light py-2 btn-block border border-success mt-4">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48px" height="48px" className="google-icon"><path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"/><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"/><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"/><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"/></svg>
					<span className="pl-2 text-success font-weight-bold">Google</span>
				</button>
        
      {/* </form> */}
    </div>
  </div>
  </div>    
  </div>   
	<div className="w-33 d-sm-flex align-items-center justify-content-start pl-3">
		<img src={RightImg} alt="" />
	</div>
</div>
    </div>
        </div> 

       </div>
        
     
   )
}


export default SignIn