import React,{useEffect,useState,useContext} from 'react'
import { UserContext } from '../../App'
import "./Profile.css"

const Profile  = ()=>{
    const [mypics,setPics] = useState([])
    const {state,dispatch} = useContext(UserContext)
    const [image,setImage] = useState("")
    useEffect(()=>{
       fetch('/mypost',{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
           console.log(result)
           setPics(result.mypost)
       })
    },[])
    useEffect(()=>{
       if(image){
        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","cnq")
        fetch("https://api.cloudinary.com/v1_1/cnq/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
    
       
           fetch('/updatepic',{
               method:"put",
               headers:{
                   "Content-Type":"application/json",
                   "Authorization":"Bearer "+localStorage.getItem("jwt")
               },
               body:JSON.stringify({
                   pic:data.url
               })
           }).then(res=>res.json())
           .then(result=>{
               console.log(result)
               localStorage.setItem("user",JSON.stringify({...state,pic:result.pic}))
               dispatch({type:"UPDATEPIC",payload:result.pic})
             
           })
       
        })
        .catch(err=>{
            console.log(err)
        })
       }
    },[image])
    const updatePhoto = (file)=>{
        setImage(file)
    }
    return (
       <div>
            <div>

	<div className="main-container pl-2 pl-0-sm pt-sm-5 mt-sm-3">  
		<div className="d-sm-flex pb-4">
            <div className="w-35 d-flex justify-content-sm-center">
                <div>
                <img src="https://avatars.githubusercontent.com/u/53111214?v=4" className="main-profile-img" alt="" />
                </div>
            </div>
            <div className="w-65 pr-2 pr-sm-0">
                <div className="d-flex align-items-center justify-content-sm-start justify-content-between mt-sm-0 mt-4">
                                <h5 className="mb-0 text-secondary font-weight-bold mr-3">{state ? state.name : "loading"}</h5>
                              
                    <button className="edit-btn ml-4 py-2 px-5 d-none d-sm-block">
                    Edit Profile
                    </button>
                    <div className="d-flex align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="d-sm-none d-block settings-icon" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                      </svg>
                    <div className="d-flex align-items-center ml-sm-5 ml-3 cursor-pointer">
                        <img src="./setting.png" className="settings-icon" alt="" />
                    </div>
                    </div>
                            </div>
                            
                  
                <p className="mb-1 text-secondary font-weight-bold pt-sm-4 pt-2 mr-3"> {state?state.email:"loading"}</p>
                <div className="pt-1 mpt-sm-0">
                    <span className="mb-0 text-secondary font-weight-bold mr-3">
                        <span className="text-dark">{mypics.length}</span>
                        Posts
                    </span>
                    <span className="mb-0 text-secondary font-weight-bold mr-3">
                        <span className="text-dark">{state?state.followers.length:"0"}</span>
                        Followers
                    </span>
                    <span className="mb-0 text-secondary font-weight-bold mr-3">
                        <span className="text-dark">{state?state.following.length:"0"}</span>
                        Following
                    </span>
                </div>
                            <p className="text-muted pt-4 pb-2 description">
                                Thank you for visiting my portfolio.If you like my sense of fashion please like and subscribe.
                </p>
            </div>
        </div>
        <div className="border-secondary mx-2 mx-sm-0 mb-4 border-top">
            <div className="d-sm-flex">
                <div className="w-35"></div>
                <div className="w-65 d-flex d-sm-block justify-content-center">
					<div>
                    <div className="border-top border-secondary posts-border-width"></div>
                    <h5 className="text-secondary text-center text-sm-left font-weight-bold pt-3">
                        POSTS
                    </h5>
					</div>
                </div>
                        </div>
                        
            
                        <div className="row pt-3 px-2 px-sm-5">
                        {
                   mypics.map(item=>{
                       return (
                        <div className="col-sm mb-3 mb-sm-0 mr-sm-3 rounded-lg post-item">
                            <img key={item._id} className="item" src={item.photo} alt={item.title}/>     
                        </div>
                        
                       )
                   })
               }
            
            </div>
        </div>
	</div>
            </div>

          
       </div>
       
   )
}


export default Profile