import React from "react";
import { TextField } from "@mui/material";
import { Field } from "formik";

type InputFieldProps = {
  name: string;
  size?: "small" | "medium";
  label: string;
};

const InputField: React.FC<InputFieldProps> = (props) => {
  return (
    <Field name={props.name}>
      {(fieldProps: any) => {
        const isInvalid = Boolean(
          fieldProps.meta.error && fieldProps.meta.touched
        );
        return (
          <TextField
            variant="outlined"
            label={props.label}
            color="info"
            fullWidth
            size={props.size ?? "medium"}
            {...fieldProps.field}
            error={isInvalid}
            helperText={isInvalid ? fieldProps.meta.error : undefined}
          />
        );
      }}
    </Field>
  );
};

export default InputField;
