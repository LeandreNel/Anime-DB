/**
 * TimeLinePage.js - Anime Timeline Visualization
 *
 * This page displays a visual timeline of anime releases over time.
 * Uses a line chart with sample/placeholder data.
 * Can be enhanced to fetch real anime data and display trends.
 */

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components needed for line chart functionality
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

// Sample data for the timeline chart
// This is placeholder data to demonstrate the visualization
// Can be replaced with dynamic data from the API
const sampleData = {
  labels: ["2000", "2005", "2010", "2015", "2020"],
  datasets: [
    {
      label: "Anime releases (sample)",
      data: [12, 19, 3, 5, 2],
      borderColor: "#FF1744",
      backgroundColor: "rgba(255, 23, 68, 0.1)",
      borderWidth: 3,
      pointBackgroundColor: "#FFB300",
      pointBorderColor: "#FF1744",
      pointBorderWidth: 2,
      pointRadius: 6,
      tension: 0.4,
    },
  ],
};

const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: "#F5F0E8",
        font: { size: 14, weight: "bold" },
      },
    },
    title: {
      display: true,
      text: "Anime Release Timeline",
      color: "#F5F0E8",
      font: { size: 18, weight: "bold" },
    },
    tooltip: {
      backgroundColor: "rgba(10, 10, 10, 0.9)",
      titleColor: "#FFB300",
      bodyColor: "#F5F0E8",
      borderColor: "#FF1744",
      borderWidth: 1,
      titleFont: { size: 14, weight: "bold" },
      bodyFont: { size: 12 },
      padding: 12,
    },
  },
  scales: {
    y: {
      ticks: { color: "#F5F0E8", font: { size: 12 } },
      grid: { color: "rgba(255, 23, 68, 0.1)" },
      title: { display: true, text: "Number of Releases", color: "#F5F0E8" },
    },
    x: {
      ticks: { color: "#F5F0E8", font: { size: 12 } },
      grid: { color: "rgba(255, 23, 68, 0.1)" },
      title: { display: true, text: "Year", color: "#F5F0E8" },
    },
  },
};

/**
 * TimelinePage component - visualizes anime release data
 *
 * Displays a line chart showing anime releases across different years.
 * Currently shows sample data; can be enhanced with real data from API.
 *
 * @returns {JSX.Element} Page with timeline visualization
 */
function TimelinePage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #3a0a13 0%, #1a1a1a 100%)",
        padding: "60px 40px",
        color: "#F5F0E8",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* PAGE HEADER */}
        <div
          style={{
            background: "linear-gradient(135deg, #3a0a13 0%, #e8002D 100%)",
            padding: "70px 60px",
            borderRadius: "28px",
            marginBottom: "70px",
            boxShadow:
              "0 12px 40px rgba(232, 0, 45, 0.25), 0 0 2px rgba(232, 0, 45, 0.5)",
          }}
        >
          <h1
            style={{
              fontSize: "3.5em",
              margin: "0 0 20px 0",
              color: "#F5F0E8",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            Anime Timeline
          </h1>
          <p
            style={{
              fontSize: "1.3em",
              margin: "0",
              color: "#F5F0E8",
              opacity: 0.95,
            }}
          >
            Visualize anime release trends over the years.
          </p>
        </div>

        {/* CHART SECTION */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(232, 0, 45, 0.1) 0%, rgba(255, 23, 68, 0.05) 100%)",
            border: "2px solid #FF1744",
            padding: "60px 50px",
            borderRadius: "24px",
            marginBottom: "70px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Line data={sampleData} options={chartOptions} />
        </div>

        {/* FOOTER SECTION */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(155, 0, 32, 0.2) 0%, rgba(232, 0, 45, 0.1) 100%)",
            border: "1px solid #9B0020",
            padding: "50px 60px",
            borderRadius: "24px",
            marginTop: "70px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
          }}
        >
          <p
            style={{
              fontSize: "1em",
              color: "#F5F0E8",
              lineHeight: "1.8",
              margin: "0",
            }}
          >
            This page visualizes anime release trends across different years.
            The line graph shows how the number of anime releases has changed
            over time. More features coming soon!
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimelinePage;
