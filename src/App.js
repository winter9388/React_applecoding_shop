/* eslint-disable */
import React, { useState } from "react";
import Data from "./data.js";
import "./App.css";

function App() {
	let [shoe, setShoe] = useState(Data);

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
					<h1 class="display-4 fst-italic">20% Season OFF</h1>
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
					{shoe.map(function (i) {
						let url = `https://codingapple1.github.io/shop/shoes${
							i.id + 1
						}.jpg`;

						return (
							<div className="col-md-4">
								<img src={url} width="100%"></img>
								<h4>{shoe[i.id].title}</h4>
								<p>
									{shoe[i.id].content} & {shoe[i.id].price}
								</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

function ShoeCard(props) {
	return (
		<div className="col-md-4">
			<img
				src="https://codingapple1.github.io/shop/shoes1.jpg"
				width="100%"
			></img>
			<h4>{props.shoe[0].title}</h4>
			<p>
				{props.shoe[0].content} & {props.shoe[0].price}
			</p>
		</div>
	);
}

export default App;
