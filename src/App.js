/* eslint-disable */

import "./App.css";

function App() {
	return (
		<div className="App">
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<div class="container-fluid">
					<a class="navbar-brand" href="#">
						ShoeShop
					</a>
					<button
						class="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNavAltMarkup"
						aria-controls="navbarNavAltMarkup"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
						<div class="navbar-nav">
							<a class="nav-link active" aria-current="page" href="#">
								Home
							</a>
							<a class="nav-link" href="#">
								Features
							</a>
							<a class="nav-link" href="#">
								Pricing
							</a>
							<a class="nav-link disabled">Disabled</a>
						</div>
					</div>
				</div>
			</nav>

			<div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
				<div class="col-md-6 px-0">
					<h1 class="display-4 fst-italic">
						Title of a longer featured blog post
					</h1>
					<p class="lead my-3">
						Multiple lines of text that form the lede, informing new readers
						quickly and efficiently about what’s most interesting in this post’s
						contents.
					</p>
					<p class="lead mb-0">
						<a href="#" class="text-white fw-bold">
							Continue reading...
						</a>
					</p>
				</div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col-md-4">
						<img
							src="https://codingapple1.github.io/shop/shoes1.jpg"
							width="100%"
						></img>
						<h4>상품명</h4>
						<p>상품 설명 & 가격</p>
					</div>
					<div className="col-md-4">
						<img
							src="https://codingapple1.github.io/shop/shoes2.jpg"
							width="100%"
						></img>
						<h4>상품명</h4>
						<p>상품 설명 & 가격</p>
					</div>
					<div className="col-md-4">
						<img
							src="https://codingapple1.github.io/shop/shoes3.jpg"
							width="100%"
						></img>
						<h4>상품명</h4>
						<p>상품 설명 & 가격</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
