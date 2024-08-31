import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart() {
  const data = {
    labels: ['6/30/2024 - 7/6/2024', '7/7/2024 - 7/13/2024', '7/21/2024 - 7/27/2024'],
    datasets: [
      {
        label: 'Sales',
        data: [1404, 800, 500],
        borderColor: '#00bcd4',
        backgroundColor: '#00bcd4',
        fill: false,
      },
      {
        label: 'Orders',
        data: [4, 2, 2],
        borderColor: '#ff9800',
        backgroundColor: '#ff9800',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          color: '#e0e0e0',
        },
      },
    },
  };

  return <Line data={data} options={options} />;
}

export default LineChart;
