import React from 'react'
import { Line } from "react-chartjs-2"
import { data } from "../data"


function AnnualChart() {



  const inflation = (arr) => {
    let sum = 1;
    for (const val of arr) {
      sum *= 1 + val / 100
    }
    sum = 100 * (sum - 1);
    return sum.toFixed(2);
  }

  const monthDataArr = [...data[2019], ...data[2020], ...data[2021], ...data[2022], ...data[2023], ...data[2024],...data[2025]]
  let year2020 = [];
  for (let i = 1; i <= 12; i++) {
    let arr = monthDataArr.slice(i, i + 12);
    year2020.push(inflation(arr));

  }
  let year2021 = [];
  for (let i = 13; i <= 24; i++) {
    let arr = monthDataArr.slice(i, i + 12);
    year2021.push(inflation(arr));

  }

  let year2022 = [];
  for (let i = 25; i <= 36; i++) {

    let arr = monthDataArr.slice(i, i + 12);


    year2022.push(inflation(arr));

  }
  let year2023 = [];
  for (let i = 37; i <= 48; i++) {


    let arr = (i + 12) <= monthDataArr.length ? monthDataArr.slice(i, i + 12) : null;

    if (arr) { year2023.push(inflation(arr)) }

  }
  let year2024 = []
  for (let i = 49; i <= 60; i++) {
    let arr = (i + 12) <= monthDataArr.length ? monthDataArr.slice(i, i + 12) : null;
    if (arr) { year2024.push(inflation(arr)) }

  }
  let year2025 = []
  for (let i = 61; i <= 72; i++) {
    let arr = (i + 12) <= monthDataArr.length ? monthDataArr.slice(i, i + 12) : null;
    if (arr) { year2025.push(inflation(arr)) }

  }
  console.log(monthDataArr)

  const chartData = {
    labels: data.month.map(month => month),
    datasets: [
      {
        label: "2020",
        data: year2020,
        borderColor: ["orange"],
        backgroundColor: ["orange"]

      },
      {
        label: "2021",
        data: year2021,
        borderColor: ["blue"],
        backgroundColor: ["blue"]
      },
      {
        label: "2022",
        data: year2022,
        borderColor: ["fuchsia"],
        backgroundColor: ["fuchsia"]

      },
      {
        label: "2023",
        data: year2023,
        borderColor: ["red"],
        backgroundColor: ["red"]

      },
      {
        label: "2024",
        data: year2024,
        borderColor: ["grape"],
        backgroundColor: ["grape"]

      },
      {
        label: "2025",
        data: year2025,
        borderColor: ["purple"],
        backgroundColor: ["purple"]

      }



    ]


  }


  return (
    <div className='graph'>
      <Line data={chartData}
        options={
          {
            plugins: {
              title: {
                display: true,
                text: "Yıllık TÜFE oranları 2020-2025",
                font: { size: "20px" },
              },
              legend: {
                display: true
              }

            },

          }
        } />
    
    </div>
  )
}

export default AnnualChart