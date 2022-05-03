import React,{useContext,useRef,useEffect,useState} from 'react'
import {Link ,useHistory} from 'react-router-dom'
import {UserContext} from '../App'
import M from 'materialize-css'

import Vector from "./screens/assets/Vector.png"
import Vector1 from "./screens/assets/Vector-1.png"
import Vector2 from "./screens/assets/Vector-2.png"
import Vector3 from "./screens/assets/Vector-3.png"
import logo from "./screens/assets/main-logo-2.png"
import file from "./screens/assets/bi_file-post.png"
import Search from "./screens/assets/search.png"
import notification from "./screens/assets/notification.png"

const NavBar = ()=>{
    const  searchModal = useRef(null)
    const [search,setSearch] = useState('')
    const [userDetails,setUserDetails] = useState([])
     const {state,dispatch} = useContext(UserContext)
     const history = useHistory()
     useEffect(()=>{
         M.Modal.init(searchModal.current)
     },[])
     const renderList = ()=>{
       if(state){
           return [
        
            <div className="navigation-contain d-flex justify-content-between pl-sm-5">
            <div className="navbar navbar-expand-lg navbar-light px-0">
              <div className="d-flex align-items-center">
           
                <img src="./../main-logo-2.png" className="d-sm-none d-block" alt="" />
              </div>
              <div className="d-sm-flex d-none" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
              
                      <button className="mr-0 mr-sm-4 mb-1 mt-2 my-sm-0 navigation-items-active">
                      <Link to={state?"/":"/signin"}><img src={Vector} alt="" /></Link>
                     </button>
                       <Link to="/myfollowingpost">
                       <button className="mr-0 mr-sm-4 my-1 my-sm-0 navigation-items">
                        <img src={Vector1} alt="" />
                       </button>
                        </Link>
                  <button className="mr-0 mr-sm-4 my-1 my-sm-0 navigation-items">
                    <img src={Vector2} alt="" />
                  </button>
                  <button className="mr-0 mr-sm-4 my-1 my-sm-0 navigation-items">
                    <img src={Vector3} alt="" />
                     </button>
                  <Link to="/create"> <button className="mr-0 mr-sm-4 my-1 my-sm-0 navigation-items">
                    <img src={file} alt="" />
                  </button></Link>
                </ul>
                <form className="form-inlin my-2 ml-3 my-lg-0 d-sm-flex d-none align-items-center">
                  <input className="form-control mr-sm-2 search-input" type="search" placeholder="Search"
                    aria-label="Search" />
                  <img src={Search} className="search-icon" alt="" />
                </form>
              </div>
               </div>
               <Link to="/profile">
               <div className="d-sm-flex align-items-center d-none">
              <button className="btn btn-light py-1 px-2 ml-sm-4 ">
                <img src={notification} alt="" />
              </button>
              <img src="https://avatars.githubusercontent.com/u/53111214?v=4" className=" profile ml-sm-2" alt="" />
              <h5 className=" ml-sm-3 mb-0 text-secondary font-weight-bold">Banadzem Valery</h5>
            </div>
                </Link>
            <div className="d-flex justify-content-center">
              <div className="d-flex align-items-center">
                <button className="btn btn-light py-1 px-2 mr-3 d-block d-sm-none">
                  <img src={notification} alt="" />
                </button>
              </div>
              <ul className="nav nav-pills nav-justified d-flex align-items-center mr-sm-0 mr-2" id="ex1"
                role="tablist">
                <li className="" role="presentation">
                  <a className="btn btn-success ml-sm-3 px-4" id="tab-register" data-mdb-toggle="pill"
                    href="#pills-register" role="tab" aria-controls="pills-register"
                    aria-selected="false"    onClick={()=>{
                        localStorage.clear()
                        dispatch({type:"CLEAR"})
                        history.push('/signin')
                     }}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
            
           ]
       }else{
         return [
          <ul className="nav nav-pills nav-justified d-flex align-items-center mr-sm-0 mr-2" id="ex1"
          role="tablist">
          <li className="" role="presentation">
            <a className="btn btn-success ml-sm-3 px-4" id="tab-register" data-mdb-toggle="pill"
              href="#pills-register" role="tab" aria-controls="pills-register"
              aria-selected="false"><Link to="/signin">Signin</Link></a>
             </li>
             <li className="" role="presentation">
            <a className="btn btn-success ml-sm-3 px-4" id="tab-register" data-mdb-toggle="pill"
              href="#pills-register" role="tab" aria-controls="pills-register"
              aria-selected="false"><Link to="/signup">Signup</Link></a>
             </li>
             
        </ul>
         
         ]
       }
     }


     const fetchUsers = (query)=>{
        setSearch(query)
        fetch('/search-users',{
          method:"post",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            query
          })
        }).then(res=>res.json())
        .then(results=>{
          setUserDetails(results.user)
        })
     }
  return (
    <div>
       {/* <nav>
        <div className="nav-wrapper white">
          <Link to={state?"/":"/signin"} className="brand-logo left">Fashion Social</Link>
          <ul id="nav-mobile" className="right">
             {renderList()}
  
          </ul>
        </div>
        <div id="modal1" class="modal" ref={searchModal} style={{color:"black"}}>
          <div className="modal-content">
          <input
            type="text"
            placeholder="search users"
            value={search}
            onChange={(e)=>fetchUsers(e.target.value)}
            />
             <ul className="collection">
               {userDetails.map(item=>{
                 return <Link to={item._id !== state._id ? "/profile/"+item._id:'/profile'} onClick={()=>{
                   M.Modal.getInstance(searchModal.current).close()
                   setSearch('')
                 }}><li className="collection-item">{item.email}</li></Link> 
               })}
               
              </ul>
          </div>
          <div className="modal-footer">
            <button className="modal-close waves-effect waves-green btn-flat" onClick={()=>setSearch('')}>close</button>
          </div>
        </div>
      </nav> */}
      {/* /////////////////////////////////////////////////////////////////////////// */}
      <div className="border-bottom mb-4">
		<div className="d-flex justify-content-between bg-white py-sm-2 py-1 px-sm-4">
          <div className="logo-contain d-sm-block d-none">
          <Link to={state?"/":"/signin"}><img src={logo} alt="" /></Link>
				
			</div>
          {
            renderList()
               }
		</div>
	</div>
    </div>
       
    )
}


export default NavBar