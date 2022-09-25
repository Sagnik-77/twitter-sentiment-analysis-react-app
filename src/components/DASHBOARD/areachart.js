import React from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart:{
        type:"area"
    },
    title: {
        text: 'COUNTS OF TWEETS BY DATE'
    },
    yAxis:{
        title:{
            text:"values"
        }
    },
    plotOptions: {
        series: {
            pointStart: 8
        },
        area: {
            fillOpacity: 0.5
        }
    },
    series: [
        {
            name:"date",
            data:[1,1,1,3,2,1,1]
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