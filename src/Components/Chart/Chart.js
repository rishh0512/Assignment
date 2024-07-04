import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const ChartComponent = () => {
  const [data, setData] = useState({
    labels: ["Acquisition", "Purchase", "Retention"],
    datasets: [
      {
        data: [0, 0, 0],
        backgroundColor: ["#4e73df", "#1cc88a", "#f6c23e"],
        borderWidth: 1,
        hoverOffset: 4,
      },
    ],
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setData({
        labels: ["Acquisition", "Purchase", "Retention"],
        datasets: [
          {
            data: [400, 100, 200],
            backgroundColor: ["#4e73df", "#1cc88a", "#f6c23e"],
            borderWidth: 1,
          },
        ],
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const canvasParent = document.getElementById("chart-container");
      if (canvasParent) {
        const parentWidth = canvasParent.offsetWidth;
        const canvas = canvasParent.querySelector("canvas");
        if (canvas) {
          canvas.style.width = parentWidth + "px";
          canvas.style.height = parentWidth + "px";
        }
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ChartStyles = {
    backgroundColor: "#ffffff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "600px",
    padding: "20px",
    margin: "10px",
  };

  const options = {
    animation: {
      duration: 2000,
    },
    cutout: "80%",
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            let label = tooltipItem.label || "";

            if (label) {
              label += ": ";
            }
            label += Math.round(tooltipItem.raw);
            return label;
          },
        },
      },
    },
    hover: {
      mode: null,
    },
  };

  return (
    <div style={ChartStyles}>
      <div id="chart-container">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartComponent;
