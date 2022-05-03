import React,{useState,useEffect,useContext} from 'react'
import {UserContext} from '../../App'
import { Link } from 'react-router-dom'

import dropdown from "./assets/dropdown-icon.png"
import comment from "./assets/comment (1).png"
import comment2 from "./assets/comment (2).png"
import comment3 from "./assets/comment (3).png"
import comment4 from "./assets/comment (4).png"
import comment5 from "./assets/comment (5).png"
import "./Home.css"
const Home  = ()=>{
    const [data,setData] = useState([])
    const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
       fetch('/allpost',{
           headers:{
               "Authorization":"Bearer "+localStorage.getItem("jwt")
           }
       }).then(res=>res.json())
       .then(result=>{
           console.log(result)
           setData(result.posts)
       })
    },[])

    const likePost = (id)=>{
          fetch('/like',{
              method:"put",
              headers:{
                  "Content-Type":"application/json",
                  "Authorization":"Bearer "+localStorage.getItem("jwt")
              },
              body:JSON.stringify({
                  postId:id
              })
          }).then(res=>res.json())
          .then(result=>{
                 
            const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
          }).catch(err=>{
              console.log(err)
          })
    }
    const unlikePost = (id)=>{
          fetch('/unlike',{
              method:"put",
              headers:{
                  "Content-Type":"application/json",
                  "Authorization":"Bearer "+localStorage.getItem("jwt")
              },
              body:JSON.stringify({
                  postId:id
              })
          }).then(res=>res.json())
          .then(result=>{
           
            const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
            })
            setData(newData)
          }).catch(err=>{
            console.log(err)
        })
    }

    const makeComment = (text,postId)=>{
          fetch('/comment',{
              method:"put",
              headers:{
                  "Content-Type":"application/json",
                  "Authorization":"Bearer "+localStorage.getItem("jwt")
              },
              body:JSON.stringify({
                  postId,
                  text
              })
          }).then(res=>res.json())
          .then(result=>{
              console.log(result)
              const newData = data.map(item=>{
                if(item._id==result._id){
                    return result
                }else{
                    return item
                }
             })
            setData(newData)
          }).catch(err=>{
              console.log(err)
          })
    }

    const deletePost = (postid)=>{
        fetch(`/deletepost/${postid}`,{
            method:"delete",
            headers:{
                Authorization:"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            console.log(result)
            const newData = data.filter(item=>{
                return item._id !== result._id
            })
            setData(newData)
        })
    }
 


   return (
       <div className="home">
           {/* ////////////////////////////////////////////////// */}
           {
               data.map(
                   item => {
                       return (
                        <div className="pt-sm-5 mt-sm-3">
                               <div className="shadow-only-pc rounded-lg pt-3 pb-4 mb-5 px-3 post-container">
                                   

                                   <div className="d-flex justify-content-between ml-1"> 
                                <div className="d-flex align-items-center">
                                    <div>
                                        <img src="https://avatars.githubusercontent.com/u/53111214?v=4" className="profile ml-2" alt="" />
                                           </div>
                                           
                                           <h5 className="ml-3 mb-0 text-secondary font-weight-bold pt-1">
                                               <Link to={item.postedBy._id !== state._id ? "/profile/" + item.postedBy._id : "/profile"}>
                                                   {item.postedBy.name}
                                               </Link>
                                           </h5>
                                       </div>
                                       
                                <div className="d-flex align-items-center">
                                           <p className="mr-3 mb-0">
                                           {item.postedBy._id == state._id 
                                            && <i className="material-icons" style={{
                                              float:"right"
                                            }} 
                                            onClick={()=>deletePost(item._id)}
                                              >delete</i>

                               }
                                           </p>
                                           
                                    <div>
                                        <img src={dropdown} className="cursor-pointer" alt="" />
                                    </div>
                                </div>
                                   </div>
                                   



                                   <h6>{item.title}</h6>
                                   <p>{item.body}</p>
                                   <div >
                                
                                <img className="posts rounded-lg d-flex justify-content-center align-items-center mt-4" src={item.photo}/>
                          
                               
                                   </div>
                                 
                                   {
                                    item.comments.map(record=>{
                                        return(
                                        <h6 key={record._id}><span style={{fontWeight:"500"}}>{record.postedBy.name}</span> {record.text}</h6>
                                        )
                                    })
                                }
                            <div className="d-sm-flex mt-sm-5 pt-4 align-items-center justify-content-sm-between">
                                <div className="d-flex align-items-sm-center">
                                    <div>
                                        <img src="https://avatars.githubusercontent.com/u/53111214?v=4" className="profile mr-2" alt="" />
                                           </div>
                                           
                                           <form onSubmit={(e)=>{
                                    e.preventDefault()
                                    makeComment(e.target[0].value,item._id)
                                }}>
                                  <input type="name" placeholder="Add comment .." id="loginName" className="form-control mb-0 w-220" />  
                                </form>
                                 
                                    <div className="d-none d-sm-flex">
                                        <div className="d-flex align-items-center">
                                            <img src={comment} className="ml-4 ml-sm-3 w-20 cursor-pointer" alt="" />
                                        </div>
                                     /
                                    </div>
                                </div>
                                <div className="d-flex justify-content-sm-end pt-3 pt-sm-0">
                                    <div className="d-sm-none d-flex">
                                        <div className="d-flex align-items-center">
                                            <img src="./../comment (1).png" className="w-20 cursor-pointer" alt="" />
                                        </div>
                                        <div className="d-flex align-items-center">
                                            <img src={comment2} className="ml-4 ml-sm-3 w-20 cursor-pointer" alt="" />
                                        </div>
                                    </div>
                                           <div className="d-flex align-items-center">
                                           {item.likes.includes(state._id)
                                         ? 
                                              <i className="material-icons"
                                        onClick={()=>{unlikePost(item._id)}}
                                               >thumb_down</i>
                                                          : 
                                              <i className="material-icons"
                                             onClick={()=>{likePost(item._id)}}
                                                 >thumb_up</i>
                                                 }
                                        <img src={comment3} className="ml-4 ml-sm-3 w-20 cursor-pointer" alt="" />
                                    </div>
                                    <p className="mb-0 ml-2 ml-sm-1">{item.likes.length}</p>
                
                                    <div className="d-flex align-items-center">
                                        <img src={comment4} className="ml-4 ml-sm-3 w-20 cursor-pointer" alt="" />
                                    </div>
                                    <p className="mb-0 ml-2 ml-sm-1">34</p>
                
                                    <div className="d-flex align-items-center">
                                        <img src={comment5}className="ml-4 ml-sm-3 w-20 cursor-pointer" alt="" />
                                    </div>
                                    <p className="mb-0 ml-2 ml-sm-1">16</p>
                                </div>
                            </div>
                    </div>
                </div>
                       )
                   }
               )
        }
       </div>
   )
}


export default Home