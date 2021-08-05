import img_42urduliz from '../res/img/42urduliz.png';

const EducationDesc = () =>{
	return (
		<div id="education">
			<div>
				<h2>42 Urduliz</h2>
				<p>
					En mi camino por ejercer como desarrollador descubrí en Febrero de 2021 este proyecto que estaba a punto de comenzar en Urduliz, a escasos 15 minutos de mi casa.<br/>
					Trata de un campus de programación gratuíto, sin profesores y abierto 24/7 que importa un método innovador de aprendizaje de otros centros como el original, 42 París o 42 School en Sillicon Valley basado en el "peer-to-peer learning"<br/><br/>
					Para entrar en el campus es necesario hacer una serie de pruebas de acceso, on-line de primeras y una vez superadas, una prueba de 26 días totalmente intensivos de programación.<br/><br/>
					Ahora soy alumno de 42 Urduliz y no podría estar mas contento en cuanto a mi formación se refiere. Día a día se aprende contenido nuevo, no solo de programación sino también a afrontar frustraciones, ejercer un buen trabajo en equipo y adquirir buenas prácticas.
				</p>
				<img className="img-enlace" src={img_42urduliz} alt="42 Urduliz"/>
			</div>
			
		</div>
	)
}

export default EducationDesc;