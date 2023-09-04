import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import "./styles/globals.css";
Chart.register(...registerables);
Chart.defaults.backgroundColor = "#9BD0F5";
Chart.defaults.borderColor = "#000";
Chart.defaults.color = "#000";
Chart.defaults.font.family = "Korenski";

export const BarChart = ({ chartData }) => {
  return (
    <>
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
                suggestedMin: 0,
                ticks: {
                  callback: (value, index, values) => {
                    if (chartData?.labels?.length > 0) {
                      const max = Math.max(...chartData.datasets[0].data);
                      console.log(max);
                        const step = Math.round((Math.ceil(max / 5) / 100)) *100;
                        console.log(step)
                        if (value % step === 0) {
                        return value.toString();
                      } else {
                        return "";
                    }
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
    </>
  );
};
