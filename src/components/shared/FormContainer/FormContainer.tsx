import { Box, Paper } from "@mui/material";
import theme from "@/app/theme";
import { useState, useEffect, useMemo } from "react";
import { getContainerStyles } from "./FormContainer.style";

export default function FormContainer({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
      setMounted(true);
  }, []);

  const containerStyles = useMemo(() => getContainerStyles(theme, mounted), [mounted, theme]);
  return (
    <Paper
      elevation={3}
      sx={containerStyles}
    >
      {children}
    </Paper>
  );
}
