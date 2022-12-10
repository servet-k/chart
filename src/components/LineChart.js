import {Line} from "react-chartjs-2"
//import  {Chart as ChartJS,defaults}  from "chart.js"
import Chart from 'chart.js/auto';

const LineChart=({infData})=>{
    console.log(infData)
    return (
        <div className="graph">
        <Line  data={infData}
        options={
            {
              plugins:{
                title:{
                  display:true,
                  text:"Aylık TÜFE oranları 2019-2022",
                  font: {size:"20px"}
                },
                legend:{
                  display:true
                }
              }
            }
          }/>
        </div>
    )
}
export default LineChart;