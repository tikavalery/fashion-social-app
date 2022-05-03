import React,{useState,useEffect} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'
import "./Signup.css";
import leftImage from "./assets/main-logo-2.png"
// import RightImage from "./assets/"
const SignIn  = ()=>{
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState(undefined)
    useEffect(()=>{
        if(url){
            uploadFields()
        }
    },[url])

    const uploadFields = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
           alert("invalid email or password")
            return
        }
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password,
                email,
                pic:url
            })
        }).then(res=>res.json())
        .then(data=>{
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:data.message,classes:"#43a047 green darken-1"})
               history.push('/signin')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    const PostData = ()=>{
   
            uploadFields()
       
       
    }

    return (
       <div>
            
            <div>
            <div>
    <div className="mx-auto login-container shadow-only-pc px-4 pb-4 rounded-lg mb-4 pt-5 pt-sm-0">
        <div>
  
  <div className="tab-content">
    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
        <img className="d-none pt-4 pb-2 d-sm-block" src={leftImage} alt="" />
                                    <h3 className="font-weight-bold mb-0">Sign up</h3>
                            <p className="second-option">          <Link className="text-success" to="/signin">Already have an account ?</Link></p>
     
      {/* <form> */}
  

        <div className="form-outline mb-3">
        	<label className="mb-1 form-label" for="loginName">Name</label>
                                            <input type="name"
                                                id="loginName"
                                                className="form-control"
                                                value={name}
                                                onChange={(e)=>setName(e.target.value)}/>
        </div>

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
					<a href="#" className="text-success">Forgot your password?</a>
					</div>	
                                            <input type="password"
                                                id="loginPassword"
                                                className="form-control"
                                                value={password}
                                                onChange={(e) => setPasword(e.target.value)}/>
        </div>
  
        <button type="submit" className="btn btn-success btn-block mb-3 py-2" onClick={()=>PostData()}>Sign up</button>
				<div className="text-center pt-1">
					<hr className="bg-dark" />
					<span className="bg-white px-3">or sign up with</span>
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
    </div>
            </div>

       </div>
     
   )
}


export default SignIn