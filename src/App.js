//import './App.css';
import "./index.css"
import { data } from "./data"
import LineChart from './components/LineChart'
import AnnualChart from './components/AnnualChart'

import React from 'react';


function App() {

  // eslint-disable-next-line
  const [infData, setInfData] = React.useState(
    {
      labels: data.month.map(month => month),
      datasets: [{
        label: "2019",
        data: [...data[2019]],
        borderColor: ["green"],
        backgroundColor: ["green"]
      },
      {
        label: "2020",
        data: [...data[2020]],
        borderColor: ["orange"],
        backgroundColor: ["orange"]

      },
      {
        label: "2021",
        data: [...data[2021]],
        borderColor: ["blue"],
        backgroundColor: ["blue"]
      },
      {
        label: "2022",
        data: [...data[2022]],
        borderColor: ["fuchsia"],
        backgroundColor: ["fuchsia"]

      },
      {
        label: "2023",
        data: [...data[2023]],
        borderColor: ["red"],
        backgroundColor: ["red"]

      },
      {
        label: "2024",
        data: [...data[2024]],
        borderColor: ["grape"],
        backgroundColor: ["grape"]
      },
      {
        label: "2025",
        data: [...data[2025]],
        borderColor: ["purple"],
        backgroundColor: ["purple"]
      }
      ]
    }
  );
  return (
    <div className="App">
      <LineChart infData={infData} />
      <AnnualChart />
      
    </div>
  );
}

export default App;
