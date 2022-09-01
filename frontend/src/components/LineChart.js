import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import axios from "axios";

function LineChart() {
  const [timepoint, setTimepoint] = useState([]);
  const [chartData, setchartData] = useState({
    labels: [
      "0 hr",
      "0.5 hr",
      "1 hr",
      "2 hr",
      "3 hr",
      "4 hr",
      "5 hr",
      "6 hr",
      "9 hr",
      "12 hr",
      "24 hr",
    ],
    datasets: [
      {
        label: "Protein Time Point",
        data: [
          1752600000, 2531600000, 2478000000, 2255400000, 2485300000,
          2449800000, 2428100000, 23288000000, 2512400000, 2631900000,
          2175000000,
        ],
        // data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1],
        // data : timepoint,
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  useEffect(() => {
    async function fetchPortein() {
      const { data } = await axios.get("/api/protein/26?numeric_timepoint=1");
      setTimepoint(data);
    }
    fetchPortein();
  }, []);

  return <Line data={chartData} width="800" height="350" />;
}

export default LineChart;
