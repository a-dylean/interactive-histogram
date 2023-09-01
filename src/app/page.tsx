import ".//styles/globals.css";
import Histogram from "./histogram";
import { Container } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <main>
        <Histogram />
      </main>
    </Container>
  );
}
