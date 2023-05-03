export default function App() {
	return (
		<main className='font-[Poppins] w-full h-screen grid place-items-center bg-red bg-desktop bg-no-repeat bg-center'>
			<section className='flex gap-x-7'>
				<div className='w-[540px] grid content-center gap-y-7 mt-2'>
					<h2 className='text-white text-[50px] font-bold leading-[3.5rem] -tracking-[0.025rem]'>
						Learn to code by watching others
					</h2>
					<p className='text-white leading-[1.65rem]'>
						See how experienced developers solve problems in real-time. Watching
						scripted tutorials is great, but understanding how developers think
						is invaluable.
					</p>
				</div>
				<div className='w-[540px] space-y-6'>
					<div className='bg-blue px-4 py-[18px] text-[15px] rounded-xl text-center shadow-grayishBlue tracking-[0.01rem]'>
						<span className='font-semibold text-white'>Try it free 7 days</span>
						<span className='text-white'> then $20/mo. thereafter</span>
					</div>
					<form className='flex flex-col gap-y-[18px] bg-white p-10 rounded-xl shadow-grayishBlue'>
						<input
							className='form-input'
							type='text'
							placeholder='First Name'
						/>
						<input className='form-input' type='text' placeholder='Last Name' />
						<input
							className='form-input'
							type='email'
							placeholder='Email Address'
						/>
						<input
							className='form-input'
							type='password'
							placeholder='Password'
						/>
						<button className='uppercase py-4 text-center bg-green hover:bg-green/80 transition rounded-lg text-white font-medium tracking-wide focus:ring-2 focus:ring-blue outline-none'>
							Claim your free trial
						</button>
						<span className='text-gray-400 text-center text-[11px] -mt-[6px]'>
							By clicking the button, you are agreeing to our{' '}
							<span className='text-red font-bold'>Terms and Services</span>
						</span>
					</form>
				</div>
			</section>
		</main>
	)
}
