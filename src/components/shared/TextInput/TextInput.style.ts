import { Theme } from "@mui/material/styles";

export const textFieldStyles = (theme: Theme) => ({
  "& .MuiInputBase-root": {
    borderRadius: theme.shape.borderRadius,
    bgcolor: theme.palette.background.default,
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.light,
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.main,
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: theme.palette.primary.dark,
  },
});
