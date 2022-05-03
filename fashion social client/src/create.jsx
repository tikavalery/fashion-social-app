import React from 'react';
import './create.css'

function Create() {
  return (
    <div>
      <div class="border-bottom mb-4">
		<div class="d-flex justify-content-between bg-white py-sm-2 py-1 px-sm-4">
			<div class="logo-contain d-sm-block d-none">
				<img src="./../main-logo-2.png" alt="" />
			</div>
			<div class="navigation-contain d-flex justify-content-between pl-sm-5">
				<nav class="navbar navbar-expand-lg navbar-light px-0">
					<div class="d-flex align-items-center">
						<div>
							<button onclick="openTrigger()" class="navbar-toggler py-2 mx-2" type="button" data-toggle="collapse"
								data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
								aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
							</button>
						</div>
						<img src="./../main-logo-2.png" class="d-sm-none d-block" alt="" />
					</div>
					<div class="d-sm-flex d-none" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto">
							<div class="m mb-sm-0">
							<button onclick="openTrigger()" class="navbar-toggler py-2 mx-2" type="button" data-toggle="collapse"
								data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
								aria-expanded="false" aria-label="Toggle navigation">
								<svg xmlns="http://www.w3.org/2000/svg" class="x-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
								</svg>
							</button>
						</div>
							<button class="mr-0 mr-sm-4 mb-1 mt-2 my-sm-0 navigation-items-active">
								<img src="./../Vector.png" alt="" />
							</button>
							<button class="mr-0 mr-sm-4 my-1 my-sm-0 navigation-items">
								<img src="./../Vector-1.png" alt="" />
							</button>
							<button class="mr-0 mr-sm-4 my-1 my-sm-0 navigation-items">
								<img src="./../Vector-2.png" alt="" />
							</button>
							<button class="mr-0 mr-sm-4 my-1 my-sm-0 navigation-items">
								<img src="./../Vector-3.png" alt="" />
							</button>
							<button class="mr-0 mr-sm-4 my-1 my-sm-0 navigation-items">
								<img src="./../bi_file-post.png" alt="" />
							</button>
						</ul>
						<form class="form-inlin my-2 ml-3 my-lg-0 d-sm-flex d-none align-items-center">
							<input class="form-control mr-sm-2 search-input" type="search" placeholder="Search"
								aria-label="Search" />
							<img src="./../search.png" class="search-icon" alt="" />
						</form>

					</div>
				</nav>
				<div class="d-sm-flex align-items-center d-none">
					<button class="btn btn-light py-1 px-2 ml-sm-4 ">
						<img src="./../notification.png" alt="" />
					</button>
					<img src="https://avatars.githubusercontent.com/u/53111214?v=4" class=" profile ml-sm-2" alt="" />
					<h5 class=" ml-sm-3 mb-0 text-secondary font-weight-bold">Ibrahim</h5>

				</div>
				<div class="d-flex justify-content-center">
					<div class="d-flex align-items-center">
						<button class="btn btn-light py-1 px-2 mr-3 d-block d-sm-none">
							<img src="./../notification.png" alt="" />
						</button>
					</div>
					<ul class="nav nav-pills nav-justified d-flex align-items-center mr-sm-0 mr-2" id="ex1"
						role="tablist">
						<li class="" role="presentation">
							<a class="btn btn-success ml-sm-3 px-4" id="tab-register" data-mdb-toggle="pill"
								href="#pills-register" role="tab" aria-controls="pills-register"
								aria-selected="false">Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="d-flex justify-content-between align-items-center d-sm-none">
			<form class="form-inlin my-2 ml-3 my-lg-0 d-flex align-items-center">
				<input class="form-control mr-sm-2 search-input" type="search" placeholder="Search" aria-label="Search" />
				<img src="./../search.png" class="search-icon" alt="" />
			</form>
			<div class="d-flex align-items-center">
				<img src="https://avatars.githubusercontent.com/u/53111214?v=4" class=" profile " alt="" />
				<h5 class=" mx-2 mb-0 text-secondary font-weight-bold">Ibrahim</h5>
			</div>
		</div>
	</div>
	<div>
		<h3 class="text-center pb-4 pt-2 font-weight-bold">Create Post</h3>
		<div class="shadow-only-pc rounded-lg pt-3 pb-5 mb-5 px-sm-5 px-2 main-container">
			<div class="d-sm-flex pb-4">
				<div class="w-half">
					<label class="w-100">
						<input type="file" class="sr-only" />
					<div class="drop-box rounded cursor-pointer d-flex justify-content-center py-sm-5 py-2">
						<div>
						<img src="./../drop-img.png" class="pt-5" alt="" />
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
							<input type="name" placeholder="Title of post" id="loginName" class="form-control mb-4 w-full" />
							<textarea class="form-control w-full mb-4" id="exampleFormControlTextarea1" placeholder="Body" rows="8"></textarea>
							<button type="submit" class="btn btn-success btn-block mb-3 py-2">Upload</button>
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
export default Create;