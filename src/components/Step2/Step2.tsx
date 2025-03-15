import { Box, Typography, RadioGroup, FormControlLabel, Radio, Button } from "@mui/material";
import { useState, useEffect, useMemo } from "react";
import { getRadioLabelStyles } from "./Step2.style";
import theme from "@/app/theme";
import { getConfirmButtonStyles } from "@/app/page.style";

export interface Step2Data {
    plan: string;
    billingCycle: "monthly" | "yearly";
}

interface Step2Props {
    formData: Step2Data;
    updateFormData: (data: Step2Data) => void;
    nextStep: () => void;
    prevStep: () => void;
}

export default function Step2({ formData, nextStep, prevStep, updateFormData }: Step2Props) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const radioLabelStyles = useMemo(() => getRadioLabelStyles(theme, mounted), [mounted, theme]);

    const [selectedPlan, setSelectedPlan] = useState(formData.plan || "Arcade");
    const [billingCycle, setBillingCycle] = useState(formData.billingCycle || "monthly");

    const handleNext = () => {
        updateFormData({
            plan: selectedPlan,
            billingCycle: "monthly",
        });
        nextStep();
    };

    return (
        <Box sx={{ bgcolor: theme.palette.background.paper, p: theme.spacing(3), borderRadius: theme.shape.borderRadius, boxShadow: theme.shadows[3] }}>
            <Typography variant="h5" color={mounted ? theme.palette.primary.main : "inherit"} gutterBottom>
                Select Your Plan
            </Typography>
            <RadioGroup value={selectedPlan} onChange={(e) => setSelectedPlan(e.target.value)} sx={radioLabelStyles}>
                <FormControlLabel value="Arcade" control={<Radio />} label="Arcade - $9/mo" />
                <FormControlLabel value="Advanced" control={<Radio />} label="Advanced - $12/mo" />
                <FormControlLabel value="Pro" control={<Radio />} label="Pro - $15/mo" />
            </RadioGroup>
            <Box sx={{display: "flex", justifyContent: "space-between"}}>
                <Button onClick={prevStep}>
                    Go Back
                </Button>
                <Button variant="contained" onClick={handleNext} sx={getConfirmButtonStyles(theme)}>
                    Next Step
                </Button>
            </Box>
        </Box>
    );
}
