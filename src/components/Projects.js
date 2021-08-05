import Mendibil from "./Mendibil.js";
import img_android from '../res/img/android.png';

const Projects = () => {
	return (
			<div id="projects">
				<div className="projects-text">
					<Mendibil/>
				</div>
				<div className="projects-img">
					<img src={img_android} alt="Carlos Cifuentes"></img>
				</div>
				
			</div>
	);
}

export default Projects;