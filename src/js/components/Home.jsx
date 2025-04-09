import React from "react";
import Digit from "./Digit.jsx";

const Home = (props) => {
	let actual = props.value
	return (
		<div className="containter bg-secondary d-flex justify-content-center p-3">
			<Digit value={<i className="fa-regular fa-clock"></i>}/>
			<Digit value={Math.floor((actual%1000000)/100000)}/>
			<Digit value={Math.floor((actual%100000)/10000)}/>
			<Digit value={Math.floor((actual%10000)/1000)}/>
			<Digit value={Math.floor((actual%1000)/100)}/>
			<Digit value={Math.floor((actual%100)/10)}/>
			<Digit value={actual%10}/>
		</div>
	);
};

export default Home;