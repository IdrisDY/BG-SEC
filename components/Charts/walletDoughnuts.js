import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const DoughnutChart = ({ data }) => {
  const chartRef = useRef(null);

  const centerTextPlugin = {
    id: "centerText",
    beforeDraw: function (chart) {
      const ctx = chart.ctx;
      const width = chart.width;
      const height = chart.height;
      ctx.restore();
      const fontSize = (height / 160).toFixed(2);
      ctx.font = `0.9em sans-serif`;
      ctx.textBaseline = "middle";
      const text = "Total Money"; // Customize this text
      const textX = Math.round((width - ctx.measureText(text).width) / 2);
      const textY = height / 2;
      ctx.fillText(text, textX, textY);
      ctx.save();
    },
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    Chart.register(centerTextPlugin);

    const myDoughnutChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        datasets: [
          {
            label: "",
            data: data,
            backgroundColor: ["#E5C162", "#CCF066", "#BCC02E"],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          centerText: true, // Enable the custom plugin
        },
      },
    });

    return () => {
      myDoughnutChart.destroy();
      Chart.unregister(centerTextPlugin)
    };
  }, [data]);

  return <canvas className="w-full" ref={chartRef}></canvas>;
};

export default DoughnutChart;
