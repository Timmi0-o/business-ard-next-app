'use client'
import { ReactNode, useEffect, useState } from 'react'

interface ButtonProps {
	children: ReactNode
	background: string
	textColor: string
}

export const Button = ({ children, background, textColor }: ButtonProps) => {
	const [border, setBorder] = useState('')
	const [stroke, setStroke] = useState('')

	useEffect(() => {
		if (background === 'bg-white') {
			setBorder('border-l-black')
			setStroke('black')
		} else {
			setStroke('white')
		}
	}, [background])

	return (
		<div className='flex border-[1px] border-white cursor-pointer  hover:opacity-70 duration-300 active:opacity-45'>
			<div
				className={`flex justify-start items-center w-[305px] h-[67px] ${background}`}
			>
				<p
					className={`ml-[20px] text-lg tracking-[-1px] text-[18px] font-semibold ${textColor}`}
				>
					{children}
				</p>
			</div>
			<div
				className={`relative w-[71px] border-l-[2px] ${border} ${background}`}
			>
				<div className={`absolute duration-300 bottom-[12px] right-[12px]`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='22'
						height='22'
						viewBox='0 0 22 22'
						fill='none'
					>
						<path
							d='M21 4.29346V20.952H4.37326M20.9618 21L1 1'
							stroke={stroke}
							strokeWidth='2'
						/>
					</svg>
				</div>
			</div>
		</div>
	)
}
