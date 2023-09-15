import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./chart.css"
import { useEffect,useRef } from "react";




const LineChart = ({result}) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  useEffect(() => {
    if (chartRef.current && chartRef.current.chartInstance) {
      chartInstance.current = chartRef.current.chartInstance;
    }
  }, []);
  /*const download = () => {
    if (chartInstance.current) {
      const base64Image = chartInstance.current.toBase64Image("image/jpeg", 1.0);
      const link = document.createElement("a");
      link.href = base64Image;
      link.download = "chart.jpg";
      link.click();
    }
  };*/


  
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
    data: result.map((x)=>x.id),
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
    responsive:false,
    chartArea: {
        backgroundColor: 'rgba(251, 85, 85, 0.4)'
    }
  }

 
  
  return (
    
      
    
      <div>
      <Line data={data} height={400} options ={options} />
      </div>
    
    
    
  );
  
};

export default LineChart;