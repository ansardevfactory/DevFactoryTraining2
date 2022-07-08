import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

function Barchart(){
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

 const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: '',
      position:'top',
    },
  },
}

const labels = ['Sprint1', 'Sprint2', 'Sprint3']
 const data = {
  labels,
  datasets: [
    {
      label: 'Sprints',
      scales:{y:{min:0,
        max:700}},
      data: labels.map(() => Math.random({ min: 0, max: 1000 })),
      backgroundColor: 'red',
    },
  ],
}

 
    return <>
    <Bar options={options} data={data} />
    </>
}
export default Barchart;