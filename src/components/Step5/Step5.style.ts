import { Theme } from "@mui/material/styles";

export const getContainerStyles = (theme: Theme, mounted: boolean) => ({
  bgcolor: theme.palette.background.paper,
  p: theme.spacing(3),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  textAlign: "center",
});

export const getThankYouTextStyles = (theme: Theme, mounted: boolean) => ({
  color: theme.palette.primary.main,
});

export const getSupportTextStyles = (theme: Theme, mounted: boolean) => ({
  color: theme.palette.text.secondary,
});

export const getEmailTextStyles = (theme: Theme, mounted: boolean) => ({
  color: theme.palette.primary.dark,
  fontWeight: 500,
});
