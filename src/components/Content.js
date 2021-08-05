import Projects from "./Projects.js"
import Education from "./Education.js"
import Article from "./Article.js"
import { PruebaApi } from "./PruebaApi.js";

const Content = ({params}) =>{
	const{page} = params;

	if (page === 'main'){
		return (
		<div id="content">
			<Article/>
			<Education/>
			<Projects/>
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