import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./chart.css"




const LineChart = ({result}) => {
  const labels = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var data = {
    //labels: result.map((x) => x.name),
    labels,
    datasets: [{
      label: `Min temp(Centigrade)`,
      data: [20,15,10,5,14,16,7,9,15,20,23,15],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      yAxisID: 'y',
      borderColor: 'rgb(53, 162, 235)',
      borderWidth: 2,
    },
  {
    label: `Max temp(Centigrade)`,
    data: [30,35,29,15,16,18,10,12,18,25,26,20],
    backgroundColor: 'rgba(255, 99, 132, 0.5)',
    yAxisID: 'y',
    borderColor: 'rgb(255, 99, 132)',
    borderWidth: 2, 
  }]
  };
  var options = {
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
    <div className="chart-container" >
      <Line data={data} height={400} options ={options} />
    </div>
  );
  
};

export default LineChart;