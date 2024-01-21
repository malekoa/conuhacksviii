import { useEffect, useRef } from "react";
import { Colors } from "../../styles/theme";
import Chart from "chart.js/auto";

const HorizontalBarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Check if a chart instance already exists, and destroy it if it does
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Chart.js setup
    const ctx = chartRef.current.getContext("2d");
    chartInstance.current = new Chart(ctx, {
      type: "bar", // Set the chart type to horizontal bar
      data: {
        labels: [
          "Label 1",
          "Label 2",
          "Label 3",
          "Label 4",
          "Label 5",
          "Label 6",
          "Label 7",
          "Label 8",
          "Label 9",
          "Label 10",
        ],
        datasets: [
          {
            label: "Horizontal Bar Chart Example",
            data: [12, 19, 3, 5, 8, 15, 7, 10, 6, 9], 
            backgroundColor: [
              Colors.lightNavyBlue,
            ],
            borderColor: Colors.navyBlue,
            borderWidth: 1,
          },
        ],
      },
      options: {
         indexAxis: 'y',
        scales: {
            y: {
            grid: {
              display: false
            }
          },
          x: {
            beginAtZero: true,
            grid: {
              display: false
            }
          },
        },
      },
    });

    // Cleanup the chart instance when the component unmounts
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array to run the effect only once

  return (
    <div>
      <canvas ref={chartRef} width="400" height="300"></canvas>
    </div>
  );
};

export default HorizontalBarChart;
