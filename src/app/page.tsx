"use client";
import ".//styles/globals.css";
import Histogram from "./histogram";
import Dropdown from "./dropdown";
import { Box, Container } from "@mui/material";

export default function Page() {
  return (
     <Container><main>
     
      <Dropdown/>
      <Box sx={{ background: "#FF00F50D" }}>
      <Histogram/>
      </Box>
    </main></Container>
  );
}
