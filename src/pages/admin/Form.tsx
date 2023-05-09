import React from "react";
import { Field, Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";
import { tokens } from "../../theme";
import {
  useTheme,
  Box,
  Button,
  FormControlLabel,
  Stack,
  Checkbox,
  Typography,
} from "@mui/material";
import Header from "../../components/Header";
import InputField from "../../components/InputField";

type UserAccountFields = {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  license: boolean;
};

const initialValues: UserAccountFields = {
  username: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
  license: false,
};

const phoneRegExp =
  /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/;

const validationSchema = Yup.object().shape({
  username: Yup.string().required("Please fill this field."),
  firstName: Yup.string().required("Please fill this field."),
  lastName: Yup.string().required("Please fill this field."),
  email: Yup.string()
    .email("Invalid email format.")
    .required("Please fill this field."),
  phone: Yup.string()
    .matches(phoneRegExp, "Invalid phone number format.")
    .required("Please fill this field."),
  password: Yup.string().required("Please fill this field."),
  confirmPassword: Yup.string().required("Please fill this field."),
  license: Yup.boolean().equals(
    [true],
    "cannot submit this form you are not accept the license."
  ),
});

const Form = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const submitHandler = (values: UserAccountFields) => {
    console.log(values);
  };

  return (
    <Box>
      <Header title="Create User" subtitle="Create a new user profile" />
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Formik
          initialValues={initialValues}
          validateOnBlur={false}
          validateOnChange={true}
          validateOnMount={false}
          validationSchema={validationSchema}
          onSubmit={submitHandler}
        >
          {(formik) => {
            return (
              <Box width={"100%"} maxWidth={"800px"}>
                <FormikForm>
                  <Stack direction={"column"} spacing={2}>
                    <Stack spacing={2} direction={"row"}>
                      <InputField name="firstName" label="First Name" />
                      <InputField name="lastName" label="Last Name" />
                    </Stack>
                    <InputField name="username" label="Username" />
                    <InputField name="email" label="Email" />
                    <InputField name="phone" label="Phone Number" />
                    <InputField name="password" label="Password" />
                    <InputField
                      name="confirmPassword"
                      label="Confirm Password"
                    />
                    <Field name="license">
                      {(fieldProps: any) => {
                        return (
                          <FormControlLabel
                            control={
                              <Checkbox
                                size="medium"
                                color="info"
                                {...fieldProps.field}
                              />
                            }
                            label={
                              <Typography
                                variant="subtitle1"
                                sx={{ color: colors.primary[200] }}
                              >
                                I read and accept all license.
                              </Typography>
                            }
                          />
                        );
                      }}
                    </Field>
                    <Button
                      variant="contained"
                      color="info"
                      type="submit"
                      sx={{ alignSelf: "start" }}
                      disabled={!(formik.isValid && formik.dirty)}
                    >
                      Create Now
                    </Button>
                  </Stack>
                </FormikForm>
              </Box>
            );
          }}
        </Formik>
      </Box>
    </Box>
  );
};

export default Form;
