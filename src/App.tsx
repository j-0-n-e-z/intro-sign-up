export default function App() {
	return (
		<main className='font-[Poppins] w-full h-screen grid place-items-center bg-red bg-desktop bg-no-repeat'>
			<section className='flex'>
				<div className='w-1/2 flex flex-col justify-center'>
					<h2 className='text-white text-[50px] font-bold'>
						Learn to code by watching others
					</h2>
					<p className='text-white'>
						See how experienced developers solve problems in real-time. Watching
						scripted tutorials is great, but understanding how developers think
						is invaluable.
					</p>
				</div>
				<div className='w-1/2 space-y-7'>
					<div className="bg-blue px-4 py-5 rounded-xl text-center">
						<span className='font-semibold text-white'>Try it free 7 days</span>
						<span className='text-white'> then $20/mo thereafter.</span>
					</div>
					<form className='flex flex-col gap-y-6 bg-white px-9 py-10 rounded-xl'>
						<input className='form-input' type='text' placeholder='First Name' />
						<input className='form-input' type='text' placeholder='Last Name' />
						<input className='form-input' type='email' placeholder='Email Address' />
						<input className='form-input' type='password' placeholder='Password' />
						<button className="uppercase py-4 text-center bg-green rounded-lg text-white">Claim your free trial</button>
						<span className="text-gray-400 text-center">
							By clicking the button, you are agreeing to our <span className="text-red font-bold">Terms and Services</span>
						</span>
					</form>
				</div>
			</section>
		</main>
	)
}
