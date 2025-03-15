import {
  Box,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import { getRadioLabelStyles } from "./Step2.style";
import theme from "@/app/theme";
import { getConfirmButtonStyles } from "@/app/page.style";
import { useAppData } from "@/context/AppDataContext";

export interface Step2Data {
  planId: number;
  billingCycle: "monthly" | "yearly";
}

interface Step2Props {
  formData: Step2Data;
  updateFormData: (data: Step2Data) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function Step2({
  formData,
  nextStep,
  prevStep,
  updateFormData,
}: Step2Props) {
  const [mounted, setMounted] = useState(false);
  const { plans, loading, error } = useAppData();

  const [selectedPlanId, setSelectedPlanId] = useState(formData.planId || null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    formData.billingCycle || "monthly"
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  const radioLabelStyles = useMemo(
    () => getRadioLabelStyles(theme, mounted),
    [mounted, theme]
  );

  const handleBillingCycleChange = (
    event: React.MouseEvent<HTMLElement>,
    newCycle: "monthly" | "yearly" | null
  ) => {
    if (newCycle) {
      setBillingCycle(newCycle);
      setSelectedPlanId(null);
    }
  };

  const handleNext = () => {
    if (!selectedPlanId) return;
      updateFormData({
          planId: selectedPlanId,
          billingCycle,
      });
      nextStep();
  };

  const filteredPlans = useMemo(() => {
    return plans.filter((plan) => plan.billing_cycle === billingCycle);
  }, [plans, billingCycle]);

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.paper,
        p: theme.spacing(3),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[3],
      }}
    >
      <Typography
        variant="h5"
        color={mounted ? theme.palette.primary.main : "inherit"}
        gutterBottom
      >
        Select Your Plan
      </Typography>

      <ToggleButtonGroup
        value={billingCycle}
        exclusive
        onChange={handleBillingCycleChange}
        sx={{ display: "flex", justifyContent: "center", mb: 2 }}
      >
        <ToggleButton value="monthly">Monthly</ToggleButton>
        <ToggleButton value="yearly">Yearly</ToggleButton>
      </ToggleButtonGroup>

      <RadioGroup
        value={selectedPlanId}
        onChange={(e) => setSelectedPlanId(Number(e.target.value))}
        sx={radioLabelStyles}
      >
        {filteredPlans.length > 0 ? (
          filteredPlans.map((plan) => (
            <FormControlLabel
              key={plan.id}
              value={plan.id}
              control={<Radio />}
              label={`${plan.name} - $${plan.price}/${
                billingCycle === "monthly" ? "mo" : "yr"
              }`}
            />
          ))
        ) : (
          <Typography variant="body2" color="textSecondary" align="center">
            No plans available for {billingCycle} billing.
          </Typography>
        )}
      </RadioGroup>

      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button onClick={prevStep}>Go Back</Button>
        <Button
          variant="contained"
          onClick={handleNext}
          sx={getConfirmButtonStyles(theme)}
          disabled={!selectedPlanId}
        >
          Next Step
        </Button>
      </Box>
    </Box>
  );
}
