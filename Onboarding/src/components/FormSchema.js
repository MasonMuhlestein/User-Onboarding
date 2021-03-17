import * as yup from 'yup'

export const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("name is required")
        .min(4, 'name must be 4 characters long'),
    email: yup
        .string()
        .email('Must be valid email')
        .required('Email is required'),
    password: yup
        .string()
        .required('password is required'),
    terms: yup.boolean(),
})