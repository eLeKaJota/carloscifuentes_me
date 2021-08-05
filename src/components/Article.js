import DescripcionCcifuent from "./DescripcionCcifuent.js"
import img_ccifuent from '../res/img/ccifuent.jpg';

const Article = () => {
	return (
			<div id="article">
				<div className="article-text">
					<DescripcionCcifuent/>
				</div>
				<div className="article-img">
					<img src={img_ccifuent} alt="Carlos Cifuentes"></img>
				</div>
			</div>
	);
}

export default Article;