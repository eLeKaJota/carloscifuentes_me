import img_portfolio from '../res/img/proyectos.png';
import img_centrobst from '../res/img/portfolio/centrobst.jpg';
import img_okepersonal from '../res/img/portfolio/okepersonal.jpg';
import img_ccifuentme from '../res/img/portfolio/ccifuentme.jpg';

const PortfolioProject = ({img, name, desc}) =>{
  return (
    <div id="portfolio">
      <div className="img-portfolio">
        <img src={img} alt={name}/>
      </div>
      <div className="desc-portfolio">
        <h2>{name}</h2>
        <p>
          Url: <a href={desc.url}>{desc.url}</a>
        </p>
        <p>
          Tecnologías: {desc.tech}
        </p>
        <p>
          Descripción: {desc.desc}
        </p>
      </div>
    </div>
  )
}

const centroBst = {
  url: 'https://centrobst.com',
  tech: 'HTML, CSS y Javascript',
  desc: 'Página web del centro deportivo Basque Sport Trainers ubicado en Elgoibar (Guipuzkoa).'
}
const okEPersonal = {
  url: 'https://openklub-entrenamientopersonal.com/',
  tech: 'HTML, CSS y Javascript',
  desc: 'Página informativa de la disciplina de entrenamiento personal para el gimnasio Open Klub situado en Durango (Bizkaia).'
}
const ccifuentMe = {
  url: 'https://carloscifuentes.me/',
  tech: 'HTML, CSS, React.js y Node.js',
  desc: 'Página personal de Carlos Cifuentes en la que te encuentras. En ella se pueden encontrar mis últimos trabajos y proyectos.'
}


const PortfolioDesc = () => {
  return (
    <div>
      <PortfolioProject name="Centro BST" img={img_centrobst} desc={centroBst}/>
      <PortfolioProject name="Open Klub - Entrenamiento personal" img={img_okepersonal} desc={okEPersonal}/>
      <PortfolioProject name="Mi página personal" img={img_ccifuentme} desc={ccifuentMe}/>
      {/*<img src={img_okepersonal} alt='Entrenamiento Personal Open Klub'/>*/}
    </div>
  )
}

const Portfolio = () => {
  return (
    <div id="projects">
      <div className="projects-img">
        <img src={img_portfolio} alt="Carlos Cifuentes"></img>
      </div>
      <div className="projects-text">
        <PortfolioDesc/>
      </div>

    </div>
  );
}

export default Portfolio;