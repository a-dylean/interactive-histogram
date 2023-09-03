import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { korenski } from "../../public/fonts/fonts";
import { getRandomValues } from "crypto";
import moment from "moment";
import "moment/locale/ru";
import "chartjs-adapter-moment";

moment.locale("ru");

Chart.register(...registerables);
Chart.defaults.backgroundColor = "#9BD0F5";
Chart.defaults.borderColor = "#000";
Chart.defaults.color = "#000";
//Chart.defaults.font = korenski;

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
          layout: {
            // padding: 50,
            // bottom: 50
          },
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
              beginAtZero: true,
              type: 'logarithmic',
              suggestedMax: 10000,
              suggestedMin: 0,
              ticks: {
                maxTicksLimit: 21, 
                stepSize: 500,
                callback: (value, index, values) => {
                  if (value === 0 || value == 500 || value == 1000 || value == 2000 || value == 5000 || value == 10000) {
                    return value.toString();
                  }
                },
              },
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
            },
            x: {
              ticks: {
                callback: (value, index, values) => {
                  if (chartData.labels.length >= 30) {
                    if (index === 0 || (index + 1) % 5 === 0)
                      return chartData.labels[index].padStart(2, "0");
                  } else {
                    const russianMonths: string[] = [
                      "Янв",
                      "Фев",
                      "Март",
                      "Апр",
                      "Май",
                      "Июнь",
                      "Июль",
                      "Авг",
                      "Сент",
                      "Окт",
                      "Нояб",
                      "Дек",
                    ];
                    chartData.labels.map((month: string) => {
                      const index = russianMonths.indexOf(month);
                    });
                    return index !== -1 ? russianMonths[index] : "";
                  }
                },
              },
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
