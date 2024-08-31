import React from 'react';
import Sidebar from '../components/Sidebar';
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';
import './Dashboard.css'; // Import the corresponding CSS file for styling

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="main-content">
        <div className="charts-container">
          <div className="line-chart">
            <LineChart />
          </div>
          <div className="pie-chart">
            <PieChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
