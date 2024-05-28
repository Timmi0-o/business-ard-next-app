import { useAplicationContext } from '@/app/Context/AplicationContext'
import { Raleway } from 'next/font/google'
import { useState } from 'react'
import { useClickOutside } from 'react-click-outside-hook'
import { Input } from '../ui/Input'

export const ApplicationForm = () => {
	const { isOpen, setIsOpen } = useAplicationContext()
	const [ref, hasClickedOutside] = useClickOutside()
	console.log('hasClickedOutside', hasClickedOutside)

	const isShow = () => {
		if (hasClickedOutside) {
			setIsOpen(false)
		}
	}

	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')

	return (
		<>
			<div
				ref={ref}
				className={`fixed top-0 left-0 z-[100] h-[100vh] w-[612px] bg-[#0F1D45] duration-300 ease-out ${
					isOpen ? 'ml-0' : 'ml-[-612px]'
				} `}
			>
				<div
					onClick={() => setIsOpen(false)}
					className='absolute flex flex-col justify-center items-center right-[35px] top-[35px] size-[41px] cursor-pointer duration-500 ease-in-out hover:rotate-180'
				>
					<div className='w-full border-b rotate-45'></div>
					<div className='w-full border-b -rotate-45'></div>
				</div>
				<div className='ml-[90px] mr-[57px]'>
					<div
						className={
							'mt-[108px] text-[50px] font-medium ' + raleway.className
						}
					>
						<p>
							Закажите <br /> обратный звонок
						</p>
					</div>
					<div className='mt-[65px]'>
						<Input state={name} setState={setName} placeholder='ИМЯ' />
						<Input state={phone} setState={setPhone} placeholder='ТЕЛЕФОН' />
					</div>
				</div>
			</div>
			<div
				onClick={() => isShow()}
				className={`fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#0f1d45a4] ${
					isOpen ? 'opacity-100 z-[90]' : 'opacity-0 z-[-100]'
				}`}
			></div>
		</>
	)
}

const raleway = Raleway({
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	subsets: ['latin'],
})
