import { Link, Router } from 'wouter'
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
  useEffect(()=>{

    setUrl(`/chart?event=${event}&num=${num}&category=${category}`)
  })

  return(
    <>
      <input onChange={()=>setEvent(document.querySelector('#evento').value)} type='text' id='evento' placeholder='evento'/>
      <input onChange={()=>setNum(document.querySelector('#billetes').value)} type='text' id='billetes' placeholder='nº tickets'/>
      <input onChange={()=>setCategory(document.querySelector('#categoria').value)} type='text' id='categoria' placeholder='categoria'/>
      <button onClick={()=>{
        setEvent(document.querySelector('#evento').value)
        setNum(document.querySelector('#billetes').value)
        setCategory(document.querySelector('#categoria').value)
      }}>Continuar</button>
        <Link to={{
          pathname: `/chart}`,
          query:{event: event, num: num, category: category}
        }}>Continuar</Link>
    </>
  )
}

export default BuyTicket