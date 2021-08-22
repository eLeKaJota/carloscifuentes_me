import {Link, Route} from 'wouter'
import { useEffect, useState } from 'react'
import Chart from './Chart'
//
// const sendInfo = () =>{
//   const event = document.querySelector('#evento').value
//   const num = document.querySelector('#billetes').value
//   const category = document.querySelector('#categoria').value
//   return
// }

const Form = ()=>{
  return(
    <>

    </>
  )
}

const BuyTicket = ()=>{

  // const [event, setEvent] = useState('');
  // const [num, setNum] = useState('');
  // const [category, setCategory] = useState('');
  const [map, setMap] = useState('')
  const [url, setUrl] = useState('');
  // useEffect(()=>{
  //
  //   // setUrl(`/chart/${event}/${num}/${category}`)
  // },[])

  // if (url !== '')
  //     return (
  //         <>
  //           <Chart params={{event, num, category}}/>
  //         </>
  //     )

  return(
    <>
        <br/><br/>
      <label for='evento'>Señecciona el evento:</label>
      <select  name="evento" id="evento">
          <option value="3e13b0f7-79fa-45e9-b083-4e68c79413f4">Evento 1</option>
      </select><br/>
      <label htmlFor='entradas'>Señecciona el número de entradas:</label>
      <select name="entradas" id="billetes">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select><br/>
      <label htmlFor='categoria'>Señecciona el tipo de entrada:</label>
      <select name="categoria" id="categoria">
        <option value="principal">Principal - 50€</option>
        <option value="trasera">Trasera - 40€</option>
        <option value="lateral">Lateral - 45€</option>
      </select><br/>
        {/*<input onChange={()=>setEvent(document.querySelector('#evento').value)} type='text' id='evento' placeholder='evento'/>*/}
        {/*<input onChange={()=>setNum(document.querySelector('#billetes').value)} type='text' id='billetes' placeholder='nº tickets'/>*/}
        {/*<input onChange={()=>setCategory(document.querySelector('#categoria').value)} type='text' id='categoria' placeholder='categoria'/>*/}
        <button onClick={()=>{
          const event = document.querySelector('#evento').value
          const num = document.querySelector('#billetes').value
          const category = document.querySelector('#categoria').value
          setMap(<Chart params={{event, num, category}}/>)
          // setUrl('palante')
        }}>Continuar</button>
        {/*<Link to={url}>Continuar</Link>*/}
        <div>
          {map}
        </div>
    </>
  )
}

export default BuyTicket