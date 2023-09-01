"use client";

import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface MonthData {
  name: string;
  pv: number;
}

function convertArray(sourceArray: { [key: string]: number }[]): MonthData[] {
  const sourceObject = sourceArray[0];
  const resultArray: MonthData[] = [];

  for (const key in sourceObject) {
    resultArray.push({ name: key, pv: sourceObject[key] });
  }

  return resultArray;
}

async function getDataYears() {
  const res = await fetch(
    "https://3947907b-86cb-4229-9398-0cf217626417.mock.pstmn.io/get_graph"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();
  const dataYears = data.map(
    (item: { graph: { year: number } }) => item.graph.year
  );
  return convertArray(dataYears);
}

export default function Histogram() {
  const [time, setTime] = useState("month");
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://3947907b-86cb-4229-9398-0cf217626417.mock.pstmn.io/get_graph"
      );
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      const dataYears = data.map((item) => item.graph.year);
      console.log(dataYears);
      setData(convertArray(dataYears));
    };
    fetchData();
  }, [time]);

  return (
    <>
      <select id="countries">
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
