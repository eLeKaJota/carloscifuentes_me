import img_libre from '../res/img/places/libre.png'
import img_ocupado from '../res/img/places/ocupado.png'
import img_nucleo_fam from '../res/img/places/nucleo_fam.png'
import img_no_disp from '../res/img/places/no_disp.png'
import img_seleccionado from '../res/img/places/seleccionado.png'
import {useEffect, useState} from "react";

const Leyenda = ({img, txt}) => {
	return(
		<div id='ley_puesto'>
			<div className='img_puesto'>
				<img src={img}/>
			</div>
			<div className='txt_puesto'>
				<span>{txt}</span>
			</div>
		</div>
	)
}

const Place = (params) => {
	const [sel, setSel] = useState();
	const [id, setId] = useState(params.id);
	const [state, setState] = useState(params.state);

	useEffect(()=>{
		if (state === 0)
			setSel(img_libre)
		else if (state === 1)
			setSel(img_ocupado)
		else if (state === 2)
			setSel(img_nucleo_fam)
		else if (state === 3)
			setSel(img_no_disp)
		else if (state === 4)
			setSel(img_seleccionado)
	})

	return(
		<div id='map_place'>
			<div className='img_puesto butaca'>
				<img src={sel} onClick={()=>{
					if (state === 4)
						setState(0)
					else if (state === 0)
						setState(4);
				}}/>
			</div>
			<div className='id_puesto'>{id}</div>
		</div>
	)
}

const Map = (width, heigh) => {
	const but_a = [
		{
			id: 'a0',
			state: 1
		},
		{
			id: 'a1',
			state: 1
		},
		{
			id: 'a2',
			state: 0
		},
		{
			id: 'a3',
			state: 2
		},
		{
			id: 'a4',
			state: 1
		},
		{
			id: 'a5',
			state: 1
		},
		{
			id: 'a6',
			state: 1
		},
		{
			id: 'a7',
			state: 0
		},
		{
			id: 'a8',
			state: 0
		},
		{
			id: 'a9',
			state: 0
		},
	]

	const but_b = [
		{
			id: 'b0',
			state: 0
		},
		{
			id: 'b1',
			state: 0
		},
		{
			id: 'b2',
			state: 0
		},
		{
			id: 'b3',
			state: 2
		},
		{
			id: 'b4',
			state: 2
		},
		{
			id: 'b5',
			state: 2
		},
		{
			id: 'b6',
			state: 2
		},
		{
			id: 'b7',
			state: 0
		},
		{
			id: 'b8',
			state: 0
		},
		{
			id: 'b9',
			state: 0
		},
	]
	const but_c = [
		{
			id: 'c0',
			state: 0
		},
		{
			id: 'c1',
			state: 0
		},
		{
			id: 'c2',
			state: 0
		},
		{
			id: 'c3',
			state: 2
		},
		{
			id: 'c4',
			state: 1
		},
		{
			id: 'c5',
			state: 1
		},
		{
			id: 'c6',
			state: 2
		},
		{
			id: 'c7',
			state: 0
		},
		{
			id: 'c8',
			state: 0
		},
		{
			id: 'c9',
			state: 1
		},
	]

	const but_d = [
		{
			id: 'd0',
			state: 0
		},
		{
			id: 'd1',
			state: 0
		},
		{
			id: 'd2',
			state: 0
		},
		{
			id: 'd3',
			state: 2
		},
		{
			id: 'd4',
			state: 2
		},
		{
			id: 'd5',
			state: 2
		},
		{
			id: 'd6',
			state: 2
		},
		{
			id: 'd7',
			state: 0
		},
		{
			id: 'd8',
			state: 0
		},
		{
			id: 'd9',
			state: 0
		},
	]

	const but_e = [
		{
			id: 'e0',
			state: 1
		},
		{
			id: 'e1',
			state: 1
		},
		{
			id: 'e2',
			state: 0
		},
		{
			id: 'e3',
			state: 2
		},
		{
			id: 'e4',
			state: 2
		},
		{
			id: 'e5',
			state: 2
		},
		{
			id: 'e6',
			state: 2
		},
		{
			id: 'e7',
			state: 0
		},
		{
			id: 'e8',
			state: 0
		},
		{
			id: 'e9',
			state: 0
		},
	]

	const but_f = [
		{
			id: 'f0',
			state: 0
		},
		{
			id: 'f1',
			state: 0
		},
		{
			id: 'f2',
			state: 0
		},
		{
			id: 'f3',
			state: 2
		},
		{
			id: 'f4',
			state: 2
		},
		{
			id: 'f5',
			state: 2
		},
		{
			id: 'f6',
			state: 2
		},
		{
			id: 'f7',
			state: 0
		},
		{
			id: 'f8',
			state: 0
		},
		{
			id: 'f9',
			state: 0
		},
	]

	return(
		<div id='map_places'>
			<div className='escenario'>
				<p>Escenario</p>
			</div>
			<div className='butacas'>
				<div className='filas_butacas'>
					{but_a.map((v,i) => {
							return <Place id={v.id} state={v.state}/>
					})}
				</div>
				<div className='filas_butacas'>
					{but_b.map((v,i) => {
						return <Place id={v.id} state={v.state}/>
					})}
				</div>
				<div className='filas_butacas'>
					{but_c.map((v,i) => {
						return <Place id={v.id} state={v.state}/>
					})}
				</div>
				<div className='filas_butacas'>
					{but_d.map((v,i) => {
						return <Place id={v.id} state={v.state}/>
					})}
				</div>
				<div className='filas_butacas'>
					{but_e.map((v,i) => {
						return <Place id={v.id} state={v.state}/>
					})}
				</div>
				<div className='filas_butacas'>
					{but_f.map((v,i) => {
						return <Place id={v.id} state={v.state}/>
					})}
				</div>
			</div>
		</div>
	)
}

const Places = () => {

	return (
		<>
			<div>
				<p>Sitios disponibles</p>
				<Map/>
			</div>
			<br/>
			<br/>
			<hr/>
			<div>
				<Leyenda img={img_libre} txt="- Puesto libre"/>
				<Leyenda img={img_seleccionado} txt="- Puesto seleccionado"/>
				<Leyenda img={img_ocupado} txt="- Puesto ocupado"/>
				<Leyenda img={img_nucleo_fam} txt="- Nucleo familiar"/>
				<Leyenda img={img_no_disp} txt="- Puesto no disponible"/>
			</div>
		</>
	)
}
export default Places;