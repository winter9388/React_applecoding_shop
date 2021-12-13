import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";

let 박스 = styled.div`
	padding: 20px;
`;
let 제목 = styled.h4`
	font-size: 25px;
	color: red;
`;

function Detail(props) {
	let history = useHistory();
	let { id } = useParams();
	let product = props.shoes.find(function (prdc) {
		return prdc.id == id;
	});
	return (
		<div className="container">
			<박스>
				<제목 색깔="red">Detail</제목>
			</박스>
			<div className="row">
				<div className="col-md-6">
					<img
						src="https://codingapple1.github.io/shop/shoes1.jpg"
						width="100%"
					/>
				</div>
				<div className="col-md-6 mt-4">
					<h4 className="pt-5">{product.title}</h4>
					<p>{product.content}</p>
					<p>{product.price}원</p>
					<button className="btn btn-danger">주문하기</button>
					<button
						className="btn btn-danger"
						onClick={() => {
							history.goBack();
						}}
					>
						뒤로가기
					</button>
				</div>
			</div>
		</div>
	);
}

export default Detail;
