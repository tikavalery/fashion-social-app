import React,{useState,useEffect} from 'react'
import M from 'materialize-css'
import { useHistory } from 'react-router-dom'
import "./CreatePost.css";
import createImage from "./assets/drop-img.png"


const CretePost = ()=>{
    const history = useHistory()
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")
    useEffect(()=>{
       if(url){
        fetch("/createpost",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                title,
                body,
                pic:url
            })
        }).then(res=>res.json())
        .then(data=>{
    
           if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
           }
           else{
               M.toast({html:"Created post Successfully",classes:"#43a047 green darken-1"})
               history.push('/')
           }
        }).catch(err=>{
            console.log(err)
        })
    }
    },[url])
  
    const postDetails = () => {
        const data = new FormData()
        console.log(data)
       data.append("file",image)
       data.append("upload_preset","fashion-social")
       data.append("cloud_name","valkelly")
       fetch("https://api.cloudinary.com/v1_1/valkelly/image/upload",{
           method:"post",
           body:data
       })
       .then(res=>res.json())
       .then(data=>{
          setUrl(data.url)
       })
       .catch(err=>{
           console.log(err)
       })

    
   }
 

    return (
        <div>
            <div>
     
	<div>
		<h3 class="text-center pb-4 pt-2 font-weight-bold">Create Post</h3>
		<div class="shadow-only-pc rounded-lg pt-3 pb-5 mb-5 px-sm-5 px-2 main-container">
			<div class="d-sm-flex pb-4">
				<div class="w-half">
					<label class="w-100">
                                   
                                    <input type="file" class="sr-only"  onChange={(e)=>setImage(e.target.files[0])} />
					<div class="drop-box rounded cursor-pointer d-flex justify-content-center py-sm-5 py-2">
						<div>
						<img src={createImage} class="pt-5" alt="" />
						<p class="font-weight-bold text-center mt-4 pb-4">
							Drop your photo/video<br />or <span class="text-success">Browse</span>
						</p>
						</div>
						</div>
					</label>
				</div>
				<div class="w-half pt-5 mt-3">
					<div class="">
						<div class="d-flex">
							<div>
								<img src="https://avatars.githubusercontent.com/u/53111214?v=4" class="profile mr-2" alt="" />
							</div>
                                        <div>
                                            <input 
                                                class="form-control mb-4 w-full"
                                                type="text"
                                                placeholder="Title of post" 
            
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
                    
                                            <textarea class="form-control w-full mb-4"
                                                d="exampleFormControlTextarea1"
                                                placeholder="Body" rows="8"
                                                onChange={(e) => setBody(e.target.value)}
                                                value={body}>
                                            
                                                </textarea>
                                            <button type="submit" class="btn btn-success btn-block mb-3 py-2" onClick={() => postDetails()} >Upload</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </div>



       </div>

       
   )
}


export default CretePost