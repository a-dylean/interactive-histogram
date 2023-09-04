"use client";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
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

export default function Histogram() {
  const [period, setPeriod] = useState("За последний месяц");
  const [data, setData] = useState({ datasets: [] });
  const handleSelectChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
  };
  useEffect(() => {
    const fetchData = async (period: string) => {
      const res = await fetch(
        "http://localhost:5000/periods"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      const dataYear = convertArray(data.map((item: { graph: { year: number } }) => item.graph.year));
      const labelsYear = makeLabels(data.map((item: { graph: { year: number } }) => item.graph.year));
      const data6months = convertArray(
        data.map((item: { graph: { half_year: string; }; }) => item.graph.half_year)
      );
      const labels6months = makeLabels(
        data.map((item: { graph: { half_year: string; }; }) => item.graph.half_year)
      );
      const dataMonths = convertArray(data.map((item: { graph: { month: string } }) => item.graph.month));
      const labelsMonth = makeLabels(data.map((item: { graph: { month: string } }) => item.graph.month));
      switch (period) {
        case "За последний месяц":
          setData({
            labels: labelsMonth,
            datasets: [
              {
                data: dataMonths,
              },
            ],
          });
          break;
        case "За последний год":
          setData({
            labels: labelsYear,
            datasets: [
              {
                data: dataYear,
              },
            ],
          });
          break;
        case "За последние 6 месяцев":
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
      <Box sx={{ display: "flex", justifyContent: "right", paddingBottom: 2, paddingtop: 2 }}>
        <FormControl hiddenLabel 
        margin="dense"
        >
          <Select
            IconComponent={ExpandMoreRoundedIcon}
            onChange={handleSelectChange}
            value={period}
            labelId="select-period-label"
            id="select-period-label"
            label=""
            renderValue={(selected) => {
              return selected;
            }}
          >
            {period !== "За последний месяц" && <MenuItem value={"За последний месяц"}>За последний месяц</MenuItem>}
            {period !== "За последний год" && <MenuItem value={"За последний год"}>За последний год</MenuItem>}
            {period !== "За последние 6 месяцев" && <MenuItem value={"За последние 6 месяцев"}>За последние 6 месяцев</MenuItem>}
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          background: "rgba(255, 0, 244.80, 0.05)",
          borderRadius: "27px",
        }}
      >
        <BarChart chartData={data} />
      </Box>
    </>
  );
}
