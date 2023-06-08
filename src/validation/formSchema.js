// Here goes the schema for the form
import * as yup from "yup";

const fromSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required("Username is required!")
    .min(3, "Username must be 3 characters long!"),
    email: yup
    .string()
    .trim()
    .email("Must be a valid email address!")
    .required("Email is required!"),
    role: yup
    .string()
    .oneOf(["student", "alumni", "instructor"], "Role is required!"),
    civil: yup
    .string()
    .oneOf(["married", "single"], "Civil status is required!"),
    coding: yup.boolean(),
    hiking: yup.boolean(),
    reading: yup.boolean(),

})

export default fromSchema;