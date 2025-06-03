import React from 'react';
//import { BarChart } from 'react-chartjs';
import { Line } from "react-chartjs-2"


/*const annualInflationData = {
  labels: ['2020', '2021', '2022', '2023', '2024'],
  datasets: [
    {
      label: 'Annual Inflation',
      data: [
        calculateAnnualInflation(data[2020]),
        calculateAnnualInflation(data[2021]),
        calculateAnnualInflation(data[2022]),
        calculateAnnualInflation(data[2023]),
        calculateAnnualInflation(data[2024])
      ],
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)'
    }
  ]
};

function calculateAnnualInflation(data) {
  const sum = data.reduce((acc, current) => acc + current, 0);
  return (sum / data.length).toFixed(2);
}
*/
function AnnualInflationChart(year) {
  return (
    <div style={{ width: '800px', height: '400px' }}>
      <Line data={year} />
    </div>
  );
}

export default AnnualInflationChart;