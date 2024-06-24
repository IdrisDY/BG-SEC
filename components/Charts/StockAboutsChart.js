import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useTheme } from "styled-components";

const AboutStocksChart = ({ data }) => {
  const chartRef = useRef(null);
  const theme = useTheme();
  const dark = theme.mode === "dark";
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, "rgba(0, 255, 255, 0.2)");
    gradient.addColorStop(0.9555, "rgba(0, 128, 128, 0)");
    const myLineChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: data.map((item) => item.price), // Assuming your data has a 'date' field
        datasets: [
          {
            label: "",
            data: data.map((item) => item.price), // Assuming your data has a 'price' field
            borderColor: dark ? "#22FCFC" : "#002616",
            pointRadius: 0,
            backgroundColor: gradient,
            fill: true,
            tension: 0.5,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            title: {
              display: false,
              text: "Date",
              grid: {
                display: false,
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

  return <canvas style={{ width: "100% !important" }} ref={chartRef}></canvas>;
};

export default AboutStocksChart;
