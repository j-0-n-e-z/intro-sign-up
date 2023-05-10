import { FC } from 'react'

type InputPropsType = {
	isErrorOccurred: boolean
  value: string,
  id: string,
  type: string,
  placeholder: string,
	errorMessage: string | undefined
	handleChange: (e: React.ChangeEvent) => void
	handleBlur: (e: React.ChangeEvent) => void
}

export const Input: FC<InputPropsType> = ({
  value,
  id,
  type,
  errorMessage,
  placeholder,
	isErrorOccurred,
	handleBlur,
	handleChange
}) => {
	return (
		<div className='relative'>
			<input
				className={`form-input ${isErrorOccurred ? 'form-input--error' : ''}`}
				type={type}
				placeholder={isErrorOccurred ? '' : placeholder}
				id={id}
				value={value}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
			{isErrorOccurred && (
				<>
					<p className='form-input__error-text'>{errorMessage}</p>
					<img
						className='form-input__icon'
						src='assets/images/icon-error.svg'
						alt='icon-error'
					/>
				</>
			)}
		</div>
	)
}

export default Input
