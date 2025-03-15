import { Box, Button, Typography, FormControlLabel, Checkbox, FormGroup } from "@mui/material";
import { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import theme from "@/app/theme";

export interface Step3Data {
    addons: string[];
}

interface Step3Props {
    formData: Step3Data;
    updateFormData: (data: Partial<Step3Data>) => void;
    nextStep: () => void;
    prevStep: () => void;
}

export default function Step3({ formData, updateFormData, nextStep, prevStep }: Step3Props) {
    const [selectedAddons, setSelectedAddons] = useState<string[]>(formData.addons || []);

    useEffect(() => {
        updateFormData({ addons: selectedAddons });
    }, [selectedAddons]);

    const handleToggleAddon = (addon: string) => {
        setSelectedAddons((prev) =>
            prev.includes(addon) ? prev.filter((item) => item !== addon) : [...prev, addon]
        );
    };

    const handleNext = () => {
        nextStep();
    };

    return (
        <Box sx={{ bgcolor: theme.palette.background.paper, p: theme.spacing(3), borderRadius: theme.shape.borderRadius, boxShadow: theme.shadows[3] }}>
            <Typography variant="h5" color={theme.palette.primary.main}>Pick Add-ons</Typography>
            <Typography variant="body1" color={theme.palette.text.secondary}>Add-ons help enhance your gaming experience.</Typography>
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox checked={selectedAddons.includes("onlineService")} onChange={() => handleToggleAddon("onlineService")} />}
                    label="Online service - Access to multiplayer games ($1/mo)"
                    sx={{ color: theme.palette.text.primary }}
                />
                <FormControlLabel
                    control={<Checkbox checked={selectedAddons.includes("largerStorage")} onChange={() => handleToggleAddon("largerStorage")} />}
                    label="Larger storage - Extra 1TB of cloud save ($2/mo)"
                    sx={{ color: theme.palette.text.primary }}
                />
                <FormControlLabel
                    control={<Checkbox checked={selectedAddons.includes("customProfile")} onChange={() => handleToggleAddon("customProfile")} />}
                    label="Customizable Profile - Custom theme ($2/mo)"
                    sx={{ color: theme.palette.text.primary }}
                />
            </FormGroup>

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: theme.spacing(3) }}>
                <Button onClick={prevStep} sx={{ color: theme.palette.primary.main }}>
                    Go Back
                </Button>
                <Button variant="contained" onClick={handleNext} sx={{ display: "flex", justifyContent: "flex-end", bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText, mt: 2 }}>
                    Next Step
                </Button>
            </Box>
        </Box>
    );
}
