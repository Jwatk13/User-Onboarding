import * as yup from 'yup';

const formSchema = yup.object().shape({
    firstName: yup
        .string()
        .trim()
        .required("First name is required.")
        .min(2, "First Name must not be abbreviated."),
    lastName: yup
        .string()
        .trim()
        .required("Last name is required.")
        .min(2, "Last Name must not be abbreviated."),
    email: yup
        .string()
        .email('Must be a valid email address.')
        .required("A valid email is required."),
    password: yup
        .string()
        .required("A password is required.")
        .min(8, 'password must be at least 8 characters long'),
    tos: yup
        .boolean()
        .oneOf([true], 'You must accept the Terms of Service to continue.')
})

export default formSchema;