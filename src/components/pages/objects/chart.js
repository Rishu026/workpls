import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";
import "./chart.css"




const LineChart = ({result}) => {

  var data = {
    labels: result.map((x) => x.name),
    datasets: [{
      label: `Users id`,
      data: result.map(x => x.id),
      backgroundColor: [
        "rgba(75,192,192,1)",
        "#ecf0f1",
        "#50AF95",
        "#f3ba2f",
        "#2a71d0",
      ],
      borderColor: "black",
      borderWidth: 2,
    }]
  };
  
  return (
    <div style ={{width:600, top:700,right:300}} >
      <Line data={data} height={400} />
    </div>
  );
  
};

export default LineChart;