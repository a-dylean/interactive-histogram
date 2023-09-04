import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);
Chart.defaults.backgroundColor = "#9BD0F5";
Chart.defaults.borderColor = "#000";
Chart.defaults.color = "#000";
Chart.defaults.font.family ='Noto Sans';

export const BarChart = ({ chartData }) => {
  // if (chartData) {
  //   console.log(Math.max(chartData.datasets[0]?.data || 0))
  //   console.log(chartData.datasets[0].data)

  // }
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
              //type: 'logarithmic',
              //suggestedMax: value,
              suggestedMin: 0,
              // ticks: {
              //   //maxTicksLimit: 21, 
              //   //stepSize: value ,
              //   // callback: (value, index, values) => {
              //   //   if (value === 0 || value == 500 || value == 1000 || value == 2000 || value == 5000 || value == 10000) {
              //   //     return value.toString();
              //   //   }
              //   // },
              // },
              ticks: {
                //beginAtZero: true,
                stepSize: 2000,
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
