import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { useTheme } from "@mui/material/styles";
import { textFieldStyles } from "./TextInput.style";
import { ChangeEvent } from "react";

interface TextInputProps {
  name: string;
  label: string;
  control: any;
  rules?: any;
  type?: string;
  defaultValue?: string;
  value: string;
  onChange: (value: string) => void;
}

export default function TextInput({ name, label, control, rules, type = "text", value, onChange, defaultValue = "" }: TextInputProps) {
  const theme = useTheme();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          type={type}
          fullWidth
          margin="normal"
          variant="outlined"
          error={!!error}
          helperText={error?.message}
          sx={textFieldStyles(theme)}
          value={value}
          onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            field.onChange(event);
            onChange(event.target.value)
          }}
        />
      )}
    />
  );
}
