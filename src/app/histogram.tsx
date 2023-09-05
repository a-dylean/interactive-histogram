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
import { ArrowIcon } from "../app/components/icon";
import { convertArray, makeLabels } from "./components/helpers";
import { halfYear, month, year } from "./components/variables";

export default function Histogram() {
  const [period, setPeriod] = useState(month);
  const [data, setData] = useState({ datasets: [] });

  const handleSelectChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value);
  };
  useEffect(() => {
    const fetchData = async (period: string) => {
      const res = await fetch("http://localhost:5000/periods");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      const dataYear = convertArray(
        data.map((item: { graph: { year: number } }) => item.graph.year)
      );
      const labelsYear = makeLabels(
        data.map((item: { graph: { year: number } }) => item.graph.year)
      );
      const data6months = convertArray(
        data.map(
          (item: { graph: { half_year: string } }) => item.graph.half_year
        )
      );
      const labels6months = makeLabels(
        data.map(
          (item: { graph: { half_year: string } }) => item.graph.half_year
        )
      );
      const dataMonths = convertArray(
        data.map((item: { graph: { month: string } }) => item.graph.month)
      );
      const labelsMonth = makeLabels(
        data.map((item: { graph: { month: string } }) => item.graph.month)
      );
      switch (period) {
        case month:
          setData({
            labels: labelsMonth,
            datasets: [
              {
                data: dataMonths,
              },
            ],
          });
          break;
        case year:
          setData({
            labels: labelsYear,
            datasets: [
              {
                data: dataYear,
              },
            ],
          });
          break;
        case halfYear:
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "right",
          paddingBottom: 2,
          paddingtop: 2,
        }}
      >
        <FormControl hiddenLabel margin="dense">
          <Select
            IconComponent={ArrowIcon}
            onChange={handleSelectChange}
            value={period}
            labelId="select-period-label"
            id="select-period-label"
            renderValue={(selected) => {
              return selected;
            }}
          >
            <MenuItem sx={{ display: "none" }} />
            {period !== month && <MenuItem value={month}>{month}</MenuItem>}
            {period !== year && <MenuItem value={year}>{year}</MenuItem>}
            {period !== halfYear && (
              <MenuItem value={halfYear}>{halfYear}</MenuItem>
            )}
          </Select>
        </FormControl>
      </Box>
      <BarChart chartData={data} />
    </>
  );
}
