import * as Yup from 'yup'

export const schemaLogin = Yup.object({
  username: Yup.string().max(20).required("Username is required"),
  password: Yup.string().max(20).required("Password is required"),
});

export const schemaRegister = Yup.object({
  username: Yup.string().max(20).required("Username is required"),
  password: Yup.string().max(20).required("Password is required"),
  confirmPassword: Yup.string().max(20).required("Password is not matched"),
});