import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart() {
  const data = {
    labels: ['WooCommerce Store', 'Shopify Store'],
    datasets: [
      {
        data: [44.2, 55.8],
        backgroundColor: ['#00bcd4', '#ff9800'],
        hoverBackgroundColor: ['#00bcd4', '#ff9800'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
    },
  };

  return <Pie data={data} options={options} />;
}

export default PieChart;
