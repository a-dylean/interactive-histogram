"use client";
import {
  Box,
  FormControl,
  Grid,
  InputBase,
  Menu,
  MenuItem,
  MenuList,
  Select,
  SelectChangeEvent,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { BarChart } from "./barChart";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
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
  const [period, setPeriod] = useState("month");
  const [data, setData] = useState({ datasets: [] });
  const handleSelectChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
  };
  useEffect(() => {
    const fetchData = async (period: string) => {
      const res = await fetch(
        "https://1f2051ac-491b-4190-b2cb-1bc2e080b6ed.mock.pstmn.io/get_data"
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
      switch (period) {
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
            labels: labelsMonth,
            datasets: [
              {
                data: dataMonths,
              },
            ],
          });
          break;
      }
    };
    fetchData(period);
  }, [period]);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "right", paddingBottom: 2 }}>
        <FormControl hiddenLabel margin="dense">
          <Select
            IconComponent={ExpandMoreRoundedIcon}
            onChange={handleSelectChange}
            value={period}
            labelId="select-period-label"
            id="select-period-label"
            label=""
          >
            <MenuItem value={"month"}>За последний месяц</MenuItem>
            <MenuItem value={"year"}>За последний год</MenuItem>
            <MenuItem value={"6months"}>За последние 6 месяцев</MenuItem>
          </Select>
        </FormControl>
      </Box>
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
