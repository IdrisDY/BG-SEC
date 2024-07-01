import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const CompareStocksChart = ({ data1, data2, trend }) => {
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
        labels: data1.map((item, index) => ""), // Assuming both datasets have the same number of points
        datasets: [
          {
            label: "",
            data: data1.map((item) => item.price), // Assuming your data has a 'price' field
            borderColor: "white",
            pointRadius: 0,
            // backgroundColor: downtrend ? downGradient : upGradient,
            fill: true,
          },
          {
            label: "",
            data: data2.map((item) => item.price), // Assuming your data has a 'price' field
            borderColor: "#7D8000",
            pointRadius: 0,
            // backgroundColor: downtrend ? downGradient : upGradient,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: true,
            title: {
              //   display: true,
              text: "Date",
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: "Price",
            },
            grid: {
              display: true, // Show grid lines on y-axis
            },
          },
        },
      },
    });

    return () => {
      myLineChart.destroy();
    };
  }, [data1, data2, trend]);

  return <canvas className="w-full h-[400px]" ref={chartRef}></canvas>;
};

export default CompareStocksChart;
