import { SeatsioSeatingChart }  from '@seatsio/seatsio-react'
import { SeatsioChartManager } from '@seatsio/seatsio-react'
import { SeatsioDesigner } from '@seatsio/seatsio-react'
import {useEffect, useState} from 'react'
import axios from 'axios'
import {Redirect} from "react-router-dom";
import BuyTicket from "./BuyTicket";
import { useLocation } from 'wouter'

const Chart = ({params}) => {
  let chart = null;
  const [resp, setResp] = useState('')
  const [location, setLocation] = useLocation();
  useEffect(()=>{
    console.log(params.event)
    console.log(params.num)
    console.log(params.category)
  })

    if (resp !== '')
        return <BuyTicket/>

  return(
    <>
      <SeatsioSeatingChart
      workspaceKey="a265da04-cedd-48bd-8fde-0f70ddfa9cc0"
      event={params.event}
      onRenderStarted={createdChart => { chart = createdChart }}
      pricing={[
        {'category': 'principal', 'price': 50},
        {'category': 'trasera', 'price': 40},
        {'category': 'lateral', 'price': 45},
      ]}
      priceFormatter={price => price + '€'}
      numberOfPlacesToSelect={parseInt(params.num)}
      availableCategories={[params.category]}
      language={'es'}
      session='start'
      region="eu"/>
      <button onClick={()=>{
        const book= {
          event: params.event,
          seats: chart.selectedObjects,
          hold: JSON.parse(sessionStorage.getItem('seatsio'))
        }
        axios.post('https://thawing-reaches-53136.herokuapp.com/book', book)
          .then((res) => {
              console.log(res.data);
                setLocation("/confirm")
          })

      }}>Enviar</button>
    </>

  )
}

export default Chart;