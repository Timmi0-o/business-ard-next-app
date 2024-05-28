import { Montserrat } from 'next/font/google'
import { Dispatch, SetStateAction } from 'react'

export const Input = ({ state, setState, placeholder }: InputProps) => {
	return (
		<div className='ml-[-15px] border-b-[2px] border-b-[#ffffff7e] mb-[65px] h-[36px]'>
			<input
				className={
					'w-full h-[calc(100%-11px)] bg-transparent outline-none text-[20px] text-[#ffffffb8] font-normal placeholder-[#ffffff73] ' +
					montserrat.className
				}
				placeholder={placeholder}
				onChange={(e) => setState(e.target.value)}
				type='text'
				value={state}
			/>
		</div>
	)
}

interface InputProps {
	state: string
	setState: Dispatch<SetStateAction<string>>
	placeholder: string
}

const montserrat = Montserrat({
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	subsets: ['latin'],
})
