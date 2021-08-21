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

  const [event, setEvent] = useState('');
  const [num, setNum] = useState('');
  const [category, setCategory] = useState('');
  const [url, setUrl] = useState('');
  // useEffect(()=>{
  //
  //   // setUrl(`/chart/${event}/${num}/${category}`)
  // })

  if (url !== '')
      return (
          <>
            <Chart params={{event, num, category}}/>
          </>
      )

  return(
    <>
        <br/><br/>
        <input onChange={()=>setEvent(document.querySelector('#evento').value)} type='text' id='evento' placeholder='evento'/>
        <input onChange={()=>setNum(document.querySelector('#billetes').value)} type='text' id='billetes' placeholder='nº tickets'/>
        <input onChange={()=>setCategory(document.querySelector('#categoria').value)} type='text' id='categoria' placeholder='categoria'/>
        <button onClick={()=>{
            setUrl('palante')
        }}>Continuar</button>
        {/*<Link to={url}>Continuar</Link>*/}
    </>
  )
}

export default BuyTicket