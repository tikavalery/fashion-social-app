import React from 'react';
import './profile.css'

function Profile() {
  return (
    <div>
      <div className="border-bottom mb-4">
		<div className="d-flex justify-content-between bg-white py-sm-2 py-1 px-sm-4">
			<div className="logo-contain d-sm-block d-none">
				<img src="./main-logo-2.png" alt="" />
			</div>
			<div className="navigation-contain d-flex justify-content-between pl-sm-5">
				<nav className="navbar navbar-expand-lg navbar-light px-0">
					<div className="d-flex align-items-center">
						<div>
							<button onclick="openTrigger()" className="navbar-toggler py-2 mx-2" type="button" data-toggle="collapse"
								data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
								aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"></span>
							</button>
						</div>
						<img src="./main-logo-2.png" className="d-sm-none d-block" alt="" />
					</div>
					<div className="d-sm-flex d-none" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<div className="m mb-sm-0">
							<button onclick="openTrigger()" className="navbar-toggler py-2 mx-2" type="button" data-toggle="collapse"
								data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
								aria-expanded="false" aria-label="Toggle navigation">
								<svg xmlns="http://www.w3.org/2000/svg" className="x-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
							<button className="mr-0 mr-sm-4 mb-1 mt-2 my-sm-0 navigation-items-active">
								<img src="./Vector.png" alt="" />
							</button>
							<button className="mr-0 mr-sm-4 my-1 my-sm-0 navigation-items">
								<img src="./Vector-1.png" alt="" />
							</button>
							<button className="mr-0 mr-sm-4 my-1 my-sm-0 navigation-items">
								<img src="./Vector-2.png" alt="" />
							</button>
							<button className="mr-0 mr-sm-4 my-1 my-sm-0 navigation-items">
								<img src="./Vector-3.png" alt="" />
							</button>
							<button className="mr-0 mr-sm-4 my-1 my-sm-0 navigation-items">
								<img src="./bi_file-post.png" alt="" />
							</button>
						</ul>
						<form className="form-inlin my-2 ml-3 my-lg-0 d-sm-flex d-none align-items-center">
							<input className="form-control mr-sm-2 search-input" type="search" placeholder="Search"
								aria-label="Search" />
							<img src="./search.png" className="search-icon" alt="" />
						</form>

					</div>
				</nav>
				<div className="d-sm-flex align-items-center d-none">
					<button className="btn btn-light py-1 px-2 ml-sm-4 ">
						<img src="./notification.png" alt="" />
					</button>
					<img src="https://avatars.githubusercontent.com/u/53111214?v=4" className=" profile ml-sm-2" alt="" />
					<h5 className=" ml-sm-3 mb-0 text-secondary font-weight-bold">Ibrahim</h5>

				</div>
				<div className="d-flex justify-content-center">
					<div className="d-flex align-items-center">
						<button className="btn btn-light py-1 px-2 mr-3 d-block d-sm-none">
							<img src="./notification.png" alt="" />
						</button>
					</div>
					<ul className="nav nav-pills nav-justified d-flex align-items-center mr-sm-0 mr-2" id="ex1"
						role="tablist">
						<li className="" role="presentation">
							<a className="btn btn-success ml-sm-3 px-4" id="tab-register" data-mdb-toggle="pill"
								href="#pills-register" role="tab" aria-controls="pills-register"
								aria-selected="false">Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div className="d-flex justify-content-between align-items-center d-sm-none">
			<form className="form-inlin my-2 ml-3 my-lg-0 d-flex align-items-center">
				<input className="form-control mr-sm-2 search-input" type="search" placeholder="Search" aria-label="Search" />
				<img src="./search.png" className="search-icon" alt="" />
			</form>
			<div className="d-flex align-items-center">
				<img src="https://avatars.githubusercontent.com/u/53111214?v=4" className=" profile " alt="" />
				<h5 className=" mx-2 mb-0 text-secondary font-weight-bold">Ibrahim</h5>
			</div>
		</div>
	</div>
	<div className="main-container pl-2 pl-0-sm pt-sm-5 mt-sm-3">  
		<div className="d-sm-flex pb-4">
            <div className="w-35 d-flex justify-content-sm-center">
                <div>
                <img src="https://avatars.githubusercontent.com/u/53111214?v=4" className="main-profile-img" alt="" />
                </div>
            </div>
            <div className="w-65 pr-2 pr-sm-0">
                <div className="d-flex align-items-center justify-content-sm-start justify-content-between mt-sm-0 mt-4">
                    <h5 className="mb-0 text-secondary font-weight-bold mr-3">Ibrahim</h5>
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
                <p className="mb-1 text-secondary font-weight-bold pt-sm-4 pt-2 mr-3">ibrahim@gmail.com</p>
                <div className="pt-1 mpt-sm-0">
                    <span className="mb-0 text-secondary font-weight-bold mr-3">
                        <span className="text-dark">0</span>
                        Posts
                    </span>
                    <span className="mb-0 text-secondary font-weight-bold mr-3">
                        <span className="text-dark">0</span>
                        Followers
                    </span>
                    <span className="mb-0 text-secondary font-weight-bold mr-3">
                        <span className="text-dark">0</span>
                        Following
                    </span>
                </div>
                <p className="text-muted pt-4 pb-2 description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores culpa eum ea cumque voluptate aspernatur optio in placeat quidem</p>
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
                <div className="col-sm mb-3 mb-sm-0 mr-sm-3 rounded-lg post-item"></div>
                <div className="col-sm mb-3 mb-sm-0 mr-sm-3 rounded-lg post-item"></div>
                <div className="col-sm mb-3 mb-sm-0 mr-sm-3 rounded-lg post-item"></div>
                <div className="col-sm mb-3 mb-sm-0 mr-sm-3 rounded-lg post-item"></div>
            </div>
        </div>
	</div>
	</div>

  );
}

export default Profile;