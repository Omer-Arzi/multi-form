import theme from "@/app/theme";
import { Box, Button, Typography } from "@mui/material";

export interface Step4Data {
    name: string;
    email: string;
    phone: string;
    plan: string;
    billingCycle: "monthly" | "yearly";
    addons: string[];
}

interface Step4Props {
    formData: Step4Data;
    prevStep: () => void;
    nextStep: () => void;
}

export default function Step4({ formData, prevStep, nextStep }: Step4Props) {

    const handleSubmit = () => {
        console.log("Submitting Form and Moving to Step 5..."); // Debugging Log
        nextStep();
    };

    return (
        <Box sx={{ bgcolor: theme.palette.background.paper, p: theme.spacing(3), borderRadius: theme.shape.borderRadius, boxShadow: theme.shadows[3] }}>
            <Typography variant="h5" color={theme.palette.primary.main} gutterBottom>
                {"Finishing Up :-)"}
            </Typography>
            <Typography variant="body1" color={theme.palette.text.secondary} gutterBottom>
                Please Double-check everything looks OK before confirming:
            </Typography>

            <Box sx={{ mt: theme.spacing(2), p: theme.spacing(2), borderRadius: theme.shape.borderRadius, bgcolor: theme.palette.grey[300] }}>
                <Typography variant="body1" color={theme.palette.text.primary}><strong>Name:</strong> {formData.name}</Typography>
                <Typography variant="body1" color={theme.palette.text.primary}><strong>Email:</strong> {formData.email}</Typography>
                <Typography variant="body1" color={theme.palette.text.primary}><strong>Phone:</strong> {formData.phone}</Typography>
                <Typography variant="body1" color={theme.palette.text.primary}><strong>Plan:</strong> {formData.plan} ({formData.billingCycle})</Typography>
                <Typography variant="body1" color={theme.palette.text.primary}><strong>Add-ons:</strong> {formData.addons.length > 0 ? formData.addons.join(", ") : "None"}</Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "space-between", mt: theme.spacing(3) }}>
                <Button onClick={prevStep} sx={{ color: theme.palette.primary.main }}>
                    Go Back
                </Button>
                <Button variant="contained" onClick={handleSubmit} sx={{ bgcolor: theme.palette.primary.main, color: theme.palette.primary.contrastText }}>
                    Confirm
                </Button>
            </Box>
        </Box>
    );
}
