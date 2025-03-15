import theme from "@/app/theme";
import { Box, Button, Typography } from "@mui/material";
import { useAppData } from "@/context/AppDataContext";
import { useState } from "react";
import { submitForm } from "@/utils/api";

export interface Step4Data {
  name: string;
  email: string;
  phone: string;
  planId: number;
  billingCycle: "monthly" | "yearly";
  addons: number[];
}

interface Step4Props {
  formData: Step4Data;
  prevStep: () => void;
  nextStep: () => void;
}

export default function Step4({ formData, prevStep, nextStep }: Step4Props) {
  const { addons, plans } = useAppData();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selectedPlan = plans.find((plan) => plan.id === formData.planId);
  const selectedPlanName = selectedPlan ? selectedPlan.name : "Unknown Plan";

  const selectedAddonNames = formData.addons
    .map((addonId) => addons.find((addon) => addon.id === addonId)?.name)
    .filter((name) => name !== undefined);

    const handleSubmit = async () => {
        try {
            setLoading(true);
            setError(null);
            await submitForm(formData);
            console.log("✅ Form submitted successfully!");
            nextStep();
        } catch (err) {
            setError("An error occurred while submitting the form.");
        } finally {
            setLoading(false);
        }
    };

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.paper,
        p: theme.spacing(3),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[3],
      }}
    >
      <Typography variant="h5" color={theme.palette.primary.main} gutterBottom>
        Finishing Up 🐿️
      </Typography>
      <Typography
        variant="body1"
        color={theme.palette.text.secondary}
        gutterBottom
      >
        Please double-check everything looks OK before confirming:
      </Typography>

      <Box
        sx={{
          mt: theme.spacing(2),
          p: theme.spacing(2),
          borderRadius: theme.shape.borderRadius,
          bgcolor: theme.palette.grey[300],
        }}
      >
        <Typography variant="body1" color={theme.palette.text.primary}>
          <strong>Name:</strong> {formData.name}
        </Typography>
        <Typography variant="body1" color={theme.palette.text.primary}>
          <strong>Email:</strong> {formData.email}
        </Typography>
        <Typography variant="body1" color={theme.palette.text.primary}>
          <strong>Phone:</strong> {formData.phone}
        </Typography>
        <Typography variant="body1" color={theme.palette.text.primary}>
          <strong>Plan:</strong> {selectedPlanName} ({formData.billingCycle})
        </Typography>
        <Typography variant="body1" color={theme.palette.text.primary}>
          <strong>Add-ons:</strong>{" "}
          {selectedAddonNames.length > 0
            ? selectedAddonNames.join(", ")
            : "None"}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: theme.spacing(3),
        }}
      >
        <Button onClick={prevStep} sx={{ color: theme.palette.primary.main }}>
          Go Back
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
        >
          Confirm
        </Button>
      </Box>
    </Box>
  );
}
