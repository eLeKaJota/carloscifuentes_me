import Projects from "./Projects.js"
import { PruebaApi } from "./PruebaApi.js";
import Home from './Home'
import Portfolio from './Portfolio'
import Callback from './Callback'
import Places from "./Places";
import Chart from './Chart'
import BuyTicket from './BuyTicket'

const Content = ({params}) =>{
	const{page} = params;

	if (page === 'main'){
		return (
		<div id="content">
			<Home/>
		</div>
		);
	}else if (page === 'proyectos'){
		return (
		<div id="content">
			<Projects/>
		</div>
		);
	}else if (page === 'prueba-api'){
		return (
		<div id="content">
			<PruebaApi/>
		</div>
		);
	}else if (page === 'portafolio'){
		return (
			<div id="content">
				<Portfolio/>
			</div>
		);
	}else if (page === 'callback' || page === 'request-42'){
		return (
			<div id="content">
				<Callback/>
			</div>
		);
	}
	else if (page === 'places'){
		return (
			<div id="content">
				<Places/>
			</div>
		);
	}
	else if (page === 'chart'){
		return (
			<div id="content">
				<Chart/>
			</div>
		);
	}
	else if (page === 'buy-ticket'){
		return (
			<div id="content">
				<BuyTicket/>
			</div>
		);
	}
	else{
		return (
			<div>
				No existe la página '{page}'.
			</div>
		);
	};
	
};

export default Content;