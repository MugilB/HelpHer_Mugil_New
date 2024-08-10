// src/components/Statistics.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  );
  

const Statistics = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Users',
        data: [12, 19, 3, 5, 2, 3, 7],
        borderColor: '#ff66a3',
        backgroundColor: 'rgba(255, 105, 180, 0.2)',
      },
      {
        label: 'Employees',
        data: [7, 11, 5, 8, 3, 7, 4],
        borderColor: '#007bff',
        backgroundColor: 'rgba(38, 143, 255, 0.2)',
      },
    ],
  };

  return (  
    <div>
      <h2>Statistics</h2>
      <Line data={data} />
    </div>
  );
};

export default Statistics;
