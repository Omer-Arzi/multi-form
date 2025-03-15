import { useForm } from "react-hook-form";
import FormContainer from "../shared/FormContainer";
import TextInput from "../shared/TextInput";
import { useEffect } from "react";
import { Box, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { getButtonContainerStyles, getConfirmButtonStyles } from "@/app/page.style";
import theme from "@/app/theme";

export interface Step1Data {
  name: string;
  email: string;
  phone: string;
}

interface Step1Props {
  formData: {
    name: string;
    email: string;
    phone: string;
  };
  updateFormData: (data: Step1Data) => void;
  nextStep: () => void;
}

export default function Step1({
  formData,
  updateFormData,
  nextStep,
}: Step1Props) {
  const { control, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    updateFormData(data);
    nextStep();
  };

  const handleChange =
  <K extends keyof Step1Data>(field: K) =>
  (value: string) => {
    updateFormData({ ...formData, [field]: value } as Step1Data);
  };

  useEffect(() => {
    reset(formData);
  }, [formData, reset]);

  return (
    <FormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          name="name"
          label="Name"
          control={control}
          value={formData.name}
          rules={{ required: "Name is required" }}
          onChange={handleChange("name")}
        />
        <TextInput
          name="email"
          label="Email"
          control={control}
          rules={{
            required: "Valid email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" },
          }}
          value={formData.email}
          onChange={handleChange("email")}
        />
        <TextInput
          name="phone"
          label="Phone"
          control={control}
          rules={{ required: "Phone is required" }}
          value={formData.phone}
          onChange={handleChange("phone")}
        />
        <Box sx={getButtonContainerStyles(theme)}>
          <Button type="submit" variant="contained" sx={getConfirmButtonStyles(theme)}>
            Next Step
          </Button>
        </Box>
      </form>
    </FormContainer>
  );
}