"use client";
import MultiStepForm from "@/components/MultiStepForm/MultiStepForm";
import { Container, CssBaseline, Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { pageStyle } from "./page.style";

export default function Home() {
  const theme = useTheme();

  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Box sx={pageStyle}>
        <Typography variant="h4" gutterBottom align="center" color={theme.palette.primary.main}>
          Multi-Step Form
        </Typography>
        <MultiStepForm />
      </Box>
    </Container>
  );
}