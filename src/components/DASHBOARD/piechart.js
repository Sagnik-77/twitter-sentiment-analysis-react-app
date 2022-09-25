import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart:{
        type:"pie"
    },
    title: {
        text: 'SENTIMENT ANALSYS PERCENTAGE WISE'
    },
    series: [
        {
            name:"Total percentage of tweets",
            data:[
                {
                    name: "Neutral",
                    y:60,
                    drilldown:"Neutral",
                },
                {
                    name: "Positive",
                    y:40,
                    drilldown:"Positive",
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