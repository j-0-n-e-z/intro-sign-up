import { useFormik } from 'formik'
import { validationSchema } from './data/validationSchema'
import Input from './Input'
import { inputsData } from './data/inputsData'

export default function App() {
	const formik = useFormik({
		initialValues: Object.fromEntries(
			Object.keys(inputsData).map(field => [field, ''])
		),
		validationSchema: validationSchema,
		onSubmit: values => {
			console.log(values)
		}
	})

	type Field = keyof typeof formik.values

	function isErrorOccurred(field: Field) {
		return Boolean(formik.errors[field] && formik.touched[field])
	}

	return (
		<main className='font-[Poppins] w-full min-h-screen grid place-items-center bg-my-red lg:bg-desktop bg-mobile bg-no-repeat bg-center'>
			<section className='lg:w-auto w-[88%] flex lg:flex-row flex-col lg:gap-x-7 gap-y-14 my-20'>
				<div className='lg:w-[540px] grid content-center lg:gap-y-7 gap-y-5 mt-2 lg:text-start text-center'>
					<h2 className='text-white lg:text-[50px] text-[28px] lg:px-0 px-10 font-bold lg:leading-[3.5rem] leading-9 -tracking-[0.025rem]'>
						Learn to code by watching others
					</h2>
					<p className='text-white lg:leading-[1.65rem] leading-7 lg:px-0 px-2'>
						See how experienced developers solve problems in real-time. Watching
						scripted tutorials is great, but understanding how developers think
						is invaluable.
					</p>
				</div>
				<div className='lg:w-[540px] space-y-6'>
					<div className='bg-my-blue lg:px-4 px-20 lg:py-[18px] py-4 text-[15px] rounded-xl text-center shadow-grayishBlue tracking-[0.01rem] lg:leading-6 leading-7'>
						<span className='font-semibold text-white'>Try it free 7 days</span>
						<span className='text-white'> then $20/mo. thereafter</span>
					</div>
					<form
						onSubmit={formik.handleSubmit}
						className='flex flex-col lg:gap-y-[18px] gap-y-4 bg-white lg:p-10 p-5 rounded-xl shadow-grayishBlue'
					>
						{Object.keys(formik.values).map(field => (
							<Input
								key={field}
								id={field}
								type={inputsData[field].type}
								placeholder={inputsData[field].placeholder}
								value={formik.values[field as Field]}
								errorMessage={formik.errors[field as Field]}
								isErrorOccurred={isErrorOccurred(field as Field)}
								handleChange={formik.handleChange}
								handleBlur={formik.handleBlur}
							/>
						))}
						<button
							type='submit'
							className='uppercase py-4 text-center bg-my-green hover:bg-my-green/80 transition rounded-lg text-white font-medium tracking-wide outline-none focus-visible:ring-2 focus-visible:ring-my-blue shadow-grayishBlueInset'
						>
							Claim your free trial
						</button>
						<span className='text-gray-400 text-center text-[11px] -mt-[6px]'>
							By clicking the button, you are agreeing to our{' '}
							<span className='text-my-red font-bold'>Terms and Services</span>
						</span>
					</form>
				</div>
			</section>
		</main>
	)
}
