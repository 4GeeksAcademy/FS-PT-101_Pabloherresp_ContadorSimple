import React from "react";
import Digit from "./Digit.jsx";

const getDigit = (numero, posicion) => {
	let divResto = 10 ** (posicion + 1)
	let divCociente = 10 ** (posicion)
	return Math.floor((numero % divResto) / divCociente)
}

const Home = (props) => {
	let actual = props.value
	return (
		<div className="containter bg-secondary d-flex justify-content-center p-3">
			<Digit value={<i className="fa-regular fa-clock"></i>}/>
			<Digit value={getDigit(actual,5)}/>
			<Digit value={getDigit(actual,4)}/>
			<Digit value={getDigit(actual,3)}/>
			<Digit value={getDigit(actual,2)}/>
			<Digit value={getDigit(actual,1)}/>
			<Digit value={getDigit(actual,0)}/>
		</div>
	);
};

export default Home;