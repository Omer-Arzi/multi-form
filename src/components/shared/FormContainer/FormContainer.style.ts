import { Theme } from "@mui/material/styles";

export const getContainerStyles = (theme: Theme, mounted: boolean) =>
  mounted
    ? {
        p: theme.spacing(3),
        borderRadius: theme.shape.borderRadius,
        bgcolor: theme.palette.background.paper,
        boxShadow: theme.shadows[3],
        color: theme.palette.text.primary,
      }
    : {};
