import { useEffect, useRef, useState } from "react";
import Step1 from "../Step1";
import Step2 from "../Step2";
import { Box, Button } from "@mui/material";
import { Step1Data } from "../Step1/Step1";
import { Step2Data } from "../Step2/Step2";
import Step3, { Step3Data } from "../Step3/Step3";
import Step4 from "../Step4";
import Step5 from "../Step5";

type FormData = Step1Data & Step2Data & Step3Data;

export default function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    planId: 0,
    billingCycle: "monthly",
    addons: [],
  });
  const [selectedPlanId, setSelectedPlanId] = useState(formData.planId || null);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const updateFormData = (data: Partial<FormData>) => {
    setFormData((prev) => ({
      ...prev,
      ...data,
      planId: data.planId !== undefined ? Number(data.planId) : prev.planId,
      addons: data.addons ? data.addons.map(Number) : prev.addons,
    }));
  };

  useEffect(() => {
    console.log("Current Form Data:", formData);
}, [formData]);

  return (
    <Box>
      {step === 1 && (
        <Step1
          formData={formData}
          nextStep={nextStep}
          updateFormData={updateFormData}
        />
      )}
      {step === 2 && (
        <Step2
        formData={{
          ...formData,
          planId: formData.planId,
          billingCycle: formData.billingCycle as "monthly" | "yearly",
        }}
          nextStep={nextStep}
          prevStep={prevStep}
          updateFormData={updateFormData}
        />
      )}
      {step === 3 && (
        <Step3
          formData={{ ...formData, addons: formData.addons.map(Number) }} 
          nextStep={nextStep}
          prevStep={prevStep}
          updateFormData={updateFormData}
        />
      )}
      {step === 4 && (
        <Step4
        formData={{
          ...formData,
          planId: formData.planId,
          billingCycle: formData.billingCycle as "monthly" | "yearly",
          addons: formData.addons.map(Number),
        }}
        nextStep={nextStep}
        prevStep={prevStep}
      />
      
      )}
      {step === 5 && <Step5 />}
    </Box>
  );
}
