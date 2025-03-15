import {
  Box,
  Button,
  Typography,
  FormControlLabel,
  Checkbox,
  FormGroup,
} from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import theme from "@/app/theme";
import { useAppData } from "@/context/AppDataContext";

export interface Step3Data {
  addons: number[]; // Store addon IDs instead of names
}

interface Step3Props {
  formData: Step3Data;
  updateFormData: (data: Partial<Step3Data>) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export default function Step3({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}: Step3Props) {
  const { addons, loading, error } = useAppData();
  const [selectedAddons, setSelectedAddons] = useState<number[]>(
    formData.addons ? formData.addons.map(Number) : []
  );  

  useEffect(() => {
    updateFormData({ addons: selectedAddons });
  }, [selectedAddons]);

  const handleToggleAddon = (addonId: number) => {
    setSelectedAddons((prev) =>
      prev.includes(addonId)
        ? prev.filter((id) => id !== addonId)
        : [...prev, addonId]
    );
  };

  const handleNext = () => {
    nextStep();
  };

  // ✅ Ensure the addons list updates dynamically
  const availableAddons = useMemo(() => addons || [], [addons]);

  if (loading) return <Typography>Loading add-ons...</Typography>;
  if (error) return <Typography>Error loading add-ons: {error}</Typography>;

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.paper,
        p: theme.spacing(3),
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[3],
      }}
    >
      <Typography variant="h5" color={theme.palette.primary.main}>
        Pick Add-ons
      </Typography>
      <Typography variant="body1" color={theme.palette.text.secondary}>
        Add-ons help enhance your gaming experience.
      </Typography>

      <FormGroup>
        {availableAddons.length > 0 ? (
          availableAddons.map((addon) => (
            <FormControlLabel
              key={addon.id}
              control={
                <Checkbox
                  checked={selectedAddons.includes(addon.id)}
                  onChange={() => handleToggleAddon(addon.id)}
                />
              }
              label={`${addon.name} - ${addon.description} ($${addon.price}/mo)`}
              sx={{ color: theme.palette.text.primary }}
            />
          ))
        ) : (
          <Typography>No add-ons available.</Typography>
        )}
      </FormGroup>

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
          onClick={handleNext}
          sx={{
            bgcolor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
        >
          Next Step
        </Button>
      </Box>
    </Box>
  );
}
