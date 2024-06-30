import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = ({ data, trend }) => {
  const chartRef = useRef(null);
  const downtrend = trend === "down";
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const upGradient = ctx.createLinearGradient(0, 0, 0, 400);
    upGradient.addColorStop(0, "rgba(82, 255, 0, 0.1)"); // Light green with 30% opacity
    upGradient.addColorStop(1, "rgba(192, 255, 255, 0.01)");

    const downGradient = ctx.createLinearGradient(0, 0, 0, 400);
    downGradient.addColorStop(0, "rgba(255, 0, 0, 0.1)"); // Light red with 30% opacity
    downGradient.addColorStop(1, "rgba(192, 255, 255, 0.01)");

    const myLineChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((item) => ""), // Assuming your data has a 'date' field
        datasets: [
          {
            label: "",
            data: data.map((item) => item.price), // Assuming your data has a 'price' field
            borderColor: downtrend ? "#FF0000" : "#52FF00",
            pointRadius: 0,
            backgroundColor: downtrend ? downGradient : upGradient,
            fill: true,
          },
        ],
      },
      options: {
        backgroundColor: "#52FF00",
        responsive: true,
        aspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
            title: {
              display: false,
              text: "Date",
              grid: {
                display: false, // Hide grid lines on y-axis
              },
            },
          },
          y: {
            display: false,
            title: {
              display: false,
              text: "Price",
              grid: {
                display: false, // Hide grid lines on y-axis
              },
            },
          },
        },
      },
    });

    return () => {
      myLineChart.destroy();
    };
  }, [data]);

  return <canvas className="w-full" ref={chartRef}></canvas>;
};

export default LineChart;
