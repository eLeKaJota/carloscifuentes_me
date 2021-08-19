import { SeatsioSeatingChart }  from '@seatsio/seatsio-react'
import { SeatsioChartManager } from '@seatsio/seatsio-react'
import { SeatsioDesigner } from '@seatsio/seatsio-react'
import { useEffect } from 'react'

const Chart = () => {
  let chart = null;

  return(
    <>
      <SeatsioSeatingChart
      workspaceKey="a265da04-cedd-48bd-8fde-0f70ddfa9cc0"
      event="3e13b0f7-79fa-45e9-b083-4e68c79413f4"
      onRenderStarted={createdChart => { chart = createdChart }}
      pricing={[
        {'category': 'principal', 'price': 50},
        {'category': 'trasera', 'price': 40},
        {'category': 'lateral', 'price': 45},
      ]}
      priceFormatter={price => price + '€'}
      numberOfPlacesToSelect={3}
      language={'es'}
      region="eu"/>
      <button onClick={()=>{
        console.log(chart.selectedObjects);
      }}>Enviar</button>
    </>

  )
}

export default Chart;