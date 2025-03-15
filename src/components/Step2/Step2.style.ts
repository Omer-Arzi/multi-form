import { Theme } from "@mui/material/styles";

export const getButtonContainerStyles = (theme: Theme, mounted: boolean) =>
  mounted
    ? {
        display: "flex",
        justifyContent: "space-between",
        mt: theme.spacing(2),
      }
    : {};

export const getGoBackButtonStyles = (theme: Theme, mounted: boolean) =>
  mounted
    ? {
        color: theme.palette.text.primary,
      }
    : {};

export const getRadioLabelStyles = (theme: Theme, mounted: boolean) =>
  mounted
    ? {
        color: theme.palette.text.primary,
        fontSize: theme.typography.body1.fontSize,
        fontWeight: theme.typography.fontWeightMedium,
      }
    : {};
