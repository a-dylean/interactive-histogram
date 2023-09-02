import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
Chart.defaults.backgroundColor = "#9BD0F5";
Chart.defaults.borderColor = "#000";
Chart.defaults.color = "#000";

export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <Bar
        data={chartData}
        options={{
          barThickness: 10,
          borderRadius: 3,
          borderSkipped: false,
          backgroundColor: "#000AFF",
          plugins: {
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
            tooltip: {
              backgroundColor: "#65FF8E",
              titleColor: "black",
              yAlign: "bottom",
              titleAlign: "center",
              caretSize: 0,
              footerSpacing: 0,
              bodySpacing: 0,
              titleMarginBottom: 0,
              callbacks: {
                label: () => "",
                title(tooltipItems) {
                  return tooltipItems[0].parsed.y;
                },
              },
            },
          },
          scales: {
            y: {
              suggestedMax: 10000,
              suggestedMin: 0,
              ticks: {
                stepSize: 1000,
                count: 6,
              },
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
            },
            x: {
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
            },
          },
        }}
      />
    </div>
  );
};
