import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart:{
        type:"column"
    },
    title: {
        text: 'SENTIMENT COUNT'
    },
    xAxis:{
        categories:[
            'Positive',
            'Neutral'
        ],
        crosshair: true
    },
    series: [
        {
            name:"Total percentage of tweets",
            data:[
                {
                    name: "Neutral",
                    y:6,
                    drilldown:"Neutral"
                },
                {
                    name: "Positive",
                    y:4,
                    drilldown:"Positive"
                }
            ]
        }
    ],
}
function piechart() {
  return (
    <div className="piechart">
        <HighchartsReact highcharts={Highcharts} options={options}/>
    </div>
  )
}

export default piechart