import EducationDesc from "./EducationDesc.js"
import img_projects from '../res/img/portafolio.png';

const Education = () => {
	return (
			<div id="projects">
				<div className="projects-img">
					<img src={img_projects} alt="Carlos Cifuentes"></img>
				</div>
				<div className="projects-text">
					<EducationDesc/>
				</div>
				
			</div>
	);
}

export default Education;