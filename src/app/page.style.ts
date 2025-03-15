export const pageStyle = (theme: any) => ({
  mt: theme.spacing(4),
  p: theme.spacing(3),
  boxShadow: theme.shadows[3],
  borderRadius: theme.shape.borderRadius,
  bgcolor: theme.palette.background.paper,
});

export const getButtonContainerStyles = (theme: any) => ({
  display: "flex",
  justifyContent: "space-between",
  mt: theme.spacing(3),
});

export const getGoBackButtonStyles = (theme: any) => ({
  color: theme.palette.primary.main,
});

export const getConfirmButtonStyles = (theme: any) => ({
  bgcolor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
});
