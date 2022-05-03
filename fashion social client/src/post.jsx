import React from 'react';
import './post.css'

function Post() {
  return (
    <div>
        <div className="border-bottom mb-4">
		<div className="d-flex justify-content-between bg-white py-sm-2 py-1 px-sm-4">
			<div className="logo-contain d-sm-block d-none">
				<img src="./../main-logo-2.png" alt="" />
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
						<img src="./../main-logo-2.png" className="d-sm-none d-block" alt="" />
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
								<img src="./../Vector.png" alt="" />
							</button>
							<button className="mr-0 mr-sm-4 my-1 my-sm-0 navigation-items">
								<img src="./../Vector-1.png" alt="" />
							</button>
							<button className="mr-0 mr-sm-4 my-1 my-sm-0 navigation-items">
								<img src="./../Vector-2.png" alt="" />
							</button>
							<button className="mr-0 mr-sm-4 my-1 my-sm-0 navigation-items">
								<img src="./../Vector-3.png" alt="" />
							</button>
							<button className="mr-0 mr-sm-4 my-1 my-sm-0 navigation-items">
								<img src="./../bi_file-post.png" alt="" />
							</button>
						</ul>
						<form className="form-inlin my-2 ml-3 my-lg-0 d-sm-flex d-none align-items-center">
							<input className="form-control mr-sm-2 search-input" type="search" placeholder="Search"
								aria-label="Search" />
							<img src="./../search.png" className="search-icon" alt="" />
						</form>

					</div>
				</nav>
				<div className="d-sm-flex align-items-center d-none">
					<button className="btn btn-light py-1 px-2 ml-sm-4 ">
						<img src="./../notification.png" alt="" />
					</button>
					<img src="https://avatars.githubusercontent.com/u/53111214?v=4" className=" profile ml-sm-2" alt="" />
					<h5 className=" ml-sm-3 mb-0 text-secondary font-weight-bold">Ibrahim</h5>

				</div>
				<div className="d-flex justify-content-center">
					<div className="d-flex align-items-center">
						<button className="btn btn-light py-1 px-2 mr-3 d-block d-sm-none">
							<img src="./../notification.png" alt="" />
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
				<img src="./../search.png" className="search-icon" alt="" />
			</form>
			<div className="d-flex align-items-center">
				<img src="https://avatars.githubusercontent.com/u/53111214?v=4" className=" profile " alt="" />
				<h5 className=" mx-2 mb-0 text-secondary font-weight-bold">Ibrahim</h5>
			</div>
		</div>
	</div>
	<div className="pt-sm-5 mt-sm-3">
		<div className="shadow-only-pc rounded-lg pt-3 pb-4 mb-5 px-3 post-container">
			<div className="d-flex justify-content-between ml-1">
				<div className="d-flex align-items-center">
					<div>
						<img src="https://avatars.githubusercontent.com/u/53111214?v=4" className="profile ml-2" alt="" />
					</div>
					<h5 className="ml-3 mb-0 text-secondary font-weight-bold pt-1">Ibrahim</h5>
				</div>
				<div className="d-flex align-items-center">
					<p className="mr-3 mb-0">3 minutes ago</p>
					<div>
						<img src="./../dropdown-icon.png" className="cursor-pointer" alt="" />
					</div>
				</div>
			</div>
			<div className="posts rounded-lg d-flex justify-content-center align-items-center mt-4">
				<h3 className="text-center pb-4 pt-2 font-weight-bold">No Posts Yet</h3>
			</div>
			<div className="d-sm-flex mt-sm-5 pt-4 align-items-center justify-content-sm-between">
				<div className="d-flex align-items-sm-center">
					<div>
						<img src="https://avatars.githubusercontent.com/u/53111214?v=4" className="profile mr-2" alt="" />
					</div>
					<input type="name" placeholder="Add comment .." id="loginName" className="form-control mb-0 w-220" />
					<div className="d-none d-sm-flex">
						<div className="d-flex align-items-center">
							<img src="./../comment (1).png" className="ml-4 ml-sm-3 w-20 cursor-pointer" alt="" />
						</div>
						<div className="d-flex align-items-center">
							<img src="./../comment-2.png" className="ml-4 ml-sm-3 w-20 cursor-pointer" alt="" />
						</div>
					</div>
				</div>
				<div className="d-flex justify-content-sm-end pt-3 pt-sm-0">
					<div className="d-sm-none d-flex">
						<div className="d-flex align-items-center">
							<img src="./../comment (1).png" className="w-20 cursor-pointer" alt="" />
						</div>
						<div className="d-flex align-items-center">
							<img src="./../comment-2.png" className="ml-4 ml-sm-3 w-20 cursor-pointer" alt="" />
						</div>
					</div>
					<div className="d-flex align-items-center">
						<img src="./../comment (3).png" className="ml-4 ml-sm-3 w-20 cursor-pointer" alt="" />
					</div>
					<p className="mb-0 ml-2 ml-sm-1">70</p>

					<div className="d-flex align-items-center">
						<img src="./../comment (4).png" className="ml-4 ml-sm-3 w-20 cursor-pointer" alt="" />
					</div>
					<p className="mb-0 ml-2 ml-sm-1">34</p>

					<div className="d-flex align-items-center">
						<img src="./../comment (5).png" className="ml-4 ml-sm-3 w-20 cursor-pointer" alt="" />
					</div>
					<p className="mb-0 ml-2 ml-sm-1">16</p>
				</div>
			</div>
	</div>
</div>
    </div>
  );
}
export default Post;