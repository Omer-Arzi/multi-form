import { Box, Typography } from "@mui/material";
import {
  getContainerStyles,
  getThankYouTextStyles,
  getSupportTextStyles,
  getEmailTextStyles,
} from "./Step5.style";
import { useState, useEffect } from "react";
import theme from "@/app/theme";
import { CircularProgress } from "@mui/material";

export default function Step5() {
  const [mounted, setMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(true);

  useEffect(() => {
    const submitData = async () => {
      console.log("submitting form data");

      await new Promise((resolve) => setTimeout(resolve, 2000));

      console.log("submission complete. Redirecting...");

      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    };

    submitData();
  }, []);

  return (
    <Box sx={getContainerStyles(theme, mounted)}>
      <Typography
        variant="h4"
        sx={getThankYouTextStyles(theme, mounted)}
        gutterBottom
      >
        Thank you!
      </Typography>
      <Typography variant="body1" sx={getSupportTextStyles(theme, mounted)}>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        <Typography component="span" sx={getEmailTextStyles(theme, mounted)}>
          {` support@loremgaming.com`}
        </Typography>
        .
      </Typography>
      {isSubmitting && <CircularProgress sx={{ mt: 2 }} />}
    </Box>
  );
}
