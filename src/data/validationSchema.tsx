import * as Yup from 'yup'

export const validationSchema = Yup.object({
	firstName: Yup.string()
		.required('First Name cannot be empty')
		.max(20, 'First Name cannot be longer than 20 characters'),
	lastName: Yup.string()
		.required('Last Name cannot be empty')
		.max(20, 'Last Name cannot be longer than 20 characters'),
	email: Yup.string()
		.required('Email cannot be empty')
		.email('Looks like this is not an email')
		.max(20, 'Email cannot be longer than 20 characters'),
	password: Yup.string()
		.required('Password cannot be empty')
		.max(20, 'Password cannot be longer than 20 characters')
})
