import Project from "./Project.js";
import img_android from '../res/img/android.png';

const Projects = () => {
	return (
			<div id="projects">
				<div className="projects-text">
					<Project/>
				</div>
				<div className="projects-img">
					<img src={img_android} alt="Carlos Cifuentes"></img>
				</div>
				
			</div>
	);
}

export default Projects;