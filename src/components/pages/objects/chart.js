/*import React, { useState, useEffect } from 'react'
import "./chart.css"
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

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const LineChart = ({result}) => {
  //const [chart, setChart] = useState([])
  const chartData = {
    labels:result.map(entry => entry.name),
    datasets:[{
      label: 'Min Tempeerature (C)',
      borderColor: 'blue',
      backgroundColor:'rgba(0,0,255,0.2',
      data: result.map(entry =>)
    }]
  }

    /*const fetchChart = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/carts?userId=1');
    
          
          if (response.ok) {
            
            const data = await response.json();
            console.log(data)
            
            setChart(data);
          } else {
            console.error('API request failed with status:', response.status);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      useEffect(() => {
        fetchChart();
      }, []);*/

  
  /*var data = {
    labels: chart?.map(x => x.id),
    datasets: [{
      label: `${chart?.id?.length} Id for user`,
      data: chart?.id?.map(x => x.products.quantity),
    }]
  };*/

  /*var options = {
    maintainAspectRatio: false,
    scales: {
    },
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  }

  return (
    <div className="chart-container">
      <Line data={data} height={400} options={options} />
    </div>
  );
}

/*export default LineChart*/