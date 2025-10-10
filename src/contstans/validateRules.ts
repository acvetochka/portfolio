import * as Yup from "yup";

export const schema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Name is too short")
    .required("Please enter your name"),
  email: Yup.string()
    .trim()
    .email("Invalid email address")
    // .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Please enter a valid email format")
    .required("Please enter your email"),
  message: Yup.string()
    .trim()
    .min(10, "Message is too short")
    .required("Please enter a message"),
});
