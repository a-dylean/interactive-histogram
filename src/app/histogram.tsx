"use client";

import { Box, SelectChangeEvent } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

function convertArray(sourceArray: { [key: string]: number }[]) {
  const sourceObject = sourceArray[0];
  const resultArray = [];
  for (const key in sourceObject) {
    resultArray.push({ name: key, pv: sourceObject[key] });
  }
  return resultArray;
}

export default function Histogram() {
  const [time, setTime] = useState("month");
  const [data, setData] = useState();

  const handleSelectChange = (event: SelectChangeEvent) => {
    setTime(event.target.value);
  };

  useEffect(() => {
    const fetchData = async (time: string) => {
      const res = await fetch(
        "https://3947907b-86cb-4229-9398-0cf217626417.mock.pstmn.io/get_graph"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      const dataYear = convertArray(data.map((item) => item.graph.year));
      const data6months = convertArray(
        data.map((item) => item.graph.half_year)
      );
      const dataMonth = convertArray(data.map((item) => item.graph.month));
      switch (time) {
        case "month":
          setData(dataMonth);
          break;
        case "year":
          setData(dataYear);
          break;
        case "6months":
          setData(data6months);
          break;
        default:
          setData(dataMonth);
          break;
      }
    };
    fetchData(time);
  }, [time]);

  return (
    <>
      <select value={time} onChange={handleSelectChange}>
        <option selected value="month">
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
        <BarChart
          width={995}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="pv" fill="#000AFF" />
        </BarChart>
      </Box>
    </>
  );
}
