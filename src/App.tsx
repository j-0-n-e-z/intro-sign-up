export default function App() {
	return (
		<main>
			<section className='flex'>
				<div>
					<h2>Learn to code by watching others</h2>
					<p>
						See how experienced developers solve problems in real-time. Watching
						scripted tutorials is great, but understanding how developers think
						is invaluable.
					</p>
				</div>
				<div>
					<div>Try it free 7 days then $20/mo thereafter.</div>
					<form className='flex flex-col'>
						<input type='text' placeholder='First Name'/>
						<input type='text' placeholder='Last Name'/>
						<input type='email' placeholder='Email Address'/>
						<input type='password' placeholder='Password'/>
						<button>Claim your free trial</button>
						<span>
							By clicking the button, you are agreeing to our Terms and Services{' '}
						</span>
					</form>
				</div>
			</section>
		</main>
	)
}
