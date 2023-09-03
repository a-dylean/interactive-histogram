"use client";
import { Box, SelectChangeEvent } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BarChart } from "./barChart";

const convertArray = (sourceArray: { [key: string]: number }[]) => {
  const sourceObject = sourceArray[0];
  const resultArray = [];
  for (const key in sourceObject) {
    resultArray.push(sourceObject[key]);
  }
  return resultArray;
};

const makeLabels = (sourceArray: { [key: string]: number }[]) => {
  const sourceObject = sourceArray[0];
  const resultArray = [];
  for (const key in sourceObject) {
    resultArray.push(key);
  }
  return resultArray;
};

// const datasets: ChartData <'bar', {key: string, value: number} []> = {
//   datasets: [{
//     data: [{key: 'Sales', value: 20}, {key: 'Revenue', value: 10}],
//     parsing: {
//       xAxisKey: 'key',
//       yAxisKey: 'value'
//     }
//   }],
// };
export default function Histogram() {
  const [time, setTime] = useState("month");
  const [data, setData] = useState({ datasets: [] });
  const handleSelectChange = (event: SelectChangeEvent) => {
    setTime(event.target.value);
  };
  useEffect(() => {
    const fetchData = async (time: string) => {
      const res = await fetch(
        "https://acba574b-449e-4482-8f82-e31330094fdf.mock.pstmn.io/get_data"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      const dataYear = convertArray(data.map((item) => item.graph.year));
      const labelsYear = makeLabels(data.map((item) => item.graph.year));
      const data6months = convertArray(
        data.map((item) => item.graph.half_year)
      );
      const labels6months = makeLabels(
        data.map((item) => item.graph.half_year)
      );
      const dataMonths = convertArray(data.map((item) => item.graph.month));
      const labelsMonth = makeLabels(data.map((item) => item.graph.month));
      switch (time) {
        case "month":
          setData({
            labels: labelsMonth,
            datasets: [
              {
                data: dataMonths,
              },
            ],
          });
          break;
        case "year":
          setData({
            labels: labelsYear,
            datasets: [
              {
                data: dataYear,
              },
            ],
          });
          break;
        case "6months":
          setData({
            labels: labels6months,
            datasets: [
              {
                data: data6months,
              },
            ],
          });
          break;
        default:
          setData({
            labels: ["mar", "bar"],
            datasets: [
              {
                data: dataMonth,
              },
            ],
          });
          break;
      }
    };
    fetchData(time);
  }, [time]);

  return (
    <>
      <select
        h-12
        flex-shrink-0
        value="month"
        onChange={handleSelectChange}
      >
        <option value="month">
          За последний месяц
        </option>
        <option value="year">За последний год</option>
        <option value="6months">За последние 6 месяцев</option>
      </select>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          background: "rgba(255, 0, 244.80, 0.05)",
          borderRadius: "27px",
        }}
      >
        <BarChart chartData={data} />
      </Box>
    </>
  );
}
