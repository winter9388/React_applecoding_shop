/* eslint-disable */
import React, { useState } from "react";
import Data from "./data.js";
import "./App.css";

import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import Detail from "./Detail.js";

function App() {
	let [shoe, setShoe] = useState(Data);

	return (
		<div className="App">
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<Navbar bg="light" expand="lg">
					<Container>
						<Navbar.Brand href="/">ShoeShop</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							<Nav className="me-auto">
								<Nav.Link>
									<Link to="/">Home</Link>
								</Nav.Link>
								<Nav.Link>
									<Link to="/detail">Detail</Link>
								</Nav.Link>
								<NavDropdown title="Dropdown" id="basic-nav-dropdown">
									<NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.2">
										Another action
									</NavDropdown.Item>
									<NavDropdown.Item href="#action/3.3">
										Something
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="#action/3.4">
										Separated link
									</NavDropdown.Item>
								</NavDropdown>
							</Nav>
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</nav>

			<Route exact path="/">
				<div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
					<div class="col-md-6 px-0">
						<h1 class="display-4 fst-italic">20% Season OFF</h1>
						<p class="lead my-3">
							Multiple lines of text that form the lede, informing new readers
							quickly and efficiently about what’s most interesting in this
							post’s contents.
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
			</Route>

			<Route path="/detail/:id">
				<Detail shoes={shoe} />
			</Route>
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
