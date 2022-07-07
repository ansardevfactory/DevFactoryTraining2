import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import './style/styles.css'
ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
    labels: ['To Do', 'In Progress', 'Completed','Total'],
    datasets: [
      {
        label: '# task completion',
        data: [40, 30,30],
        backgroundColor: [
          'slategrey',
          'slategrey',
          'slategrey',
        ],
        borderColor: [
          'grey',
          'grey',
          'grey',
        ],

        borderWidth: 1,
      },
    ],
  };
  
  export default function App() {
    return <><div className="pddesc">
    <div className='graph'><Doughnut data={data} /></div>
    <div className='legends'> 
    {/* <div className="red"> To Do</div>
    <div className="blue">In Progress</div>
    <div className="green">Completed</div> */}
</div>
     </div> 
    </>;
  }
  