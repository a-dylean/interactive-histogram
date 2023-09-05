import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import { Box } from "@mui/material";

Chart.register(...registerables);
Chart.defaults.font.family = "Manrope";
Chart.defaults.font.size = 20;
export const BarChart = ({ chartData }) => {
  return (
    <Box
      sx={{
        background: "rgba(255, 0, 244.80, 0.05)",
        borderRadius: "27px",
      }}
    >
      <Bar
        data={chartData}
        options={{
          barThickness: 10,
          borderRadius: 3,
          borderSkipped: false,
          backgroundColor: "#000AFF",
          layout: {
            padding: 30,
          },
          plugins: {
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
            tooltip: {
              titleFont: {
                size: 20,
              },
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
                  return tooltipItems[0].parsed.y.toString();
                },
              },
            },
          },
          scales: {
            y: {
              suggestedMin: 0,
              ticks: {
                color: "black",
                callback: (value, index, values) => {
                  if (chartData?.labels?.length > 0) {
                    const max = Math.max(...chartData.datasets[0].data);
                    const step = Math.round(Math.ceil(max / 5) / 100) * 100;
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
                color: "black",
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
    </Box>
  );
};
