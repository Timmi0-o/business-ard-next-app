import { useAplicationContext } from '@/app/Context/AplicationContext'
import { Raleway } from 'next/font/google'
import { useState } from 'react'
import { useClickOutside } from 'react-click-outside-hook'
import { Button } from '../ui/Button'
import { Input } from '../ui/Input'

export const ApplicationForm = () => {
	const { isAplicationOpen, setIsAplicationOpen } = useAplicationContext()
	const [ref, hasClickedOutside] = useClickOutside()
	const { setIsThanksOpen } = useAplicationContext()
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')
	const [allow, setAllow] = useState(false)

	const isShow = () => {
		if (hasClickedOutside) {
			setIsAplicationOpen(false)
		}
	}

	const succsesful = () => {
		if ((name && phone) !== '' && allow) {
			setIsAplicationOpen(false)
			setIsThanksOpen(true)
		}
	}

	const isAllowed = () => {
		if ((name && phone) !== '') {
			setAllow(!allow)
		}
	}

	return (
		<>
			<div
				ref={ref}
				className={`fixed top-0 left-0 z-[100] h-[100vh] w-[350px] sm:w-[612px] bg-[#0F1D45] duration-300 ease-out ${
					isAplicationOpen ? 'ml-0' : 'ml-[-612px]'
				} `}
			>
				<div
					onClick={() => setIsAplicationOpen(false)}
					className='absolute flex flex-col justify-center items-center right-[35px] top-[35px] size-[21px] sm:size-[41px] cursor-pointer duration-500 ease-in-out hover:rotate-180'
				>
					<div className='w-full border-b rotate-45'></div>
					<div className='w-full border-b -rotate-45'></div>
				</div>
				<div className='ml-[30px] sm:ml-[90px] sm:mr-[57px]'>
					<div
						className={
							'mt-[108px] text-[32px] sm:text-[50px] font-medium ' +
							raleway.className
						}
					>
						<p>
							Закажите <br /> обратный звонок
						</p>
					</div>
					<div className='ml-[-15px]'>
						<div className='mt-[65px] w-[300px] sm:w-full'>
							<Input state={name} setState={setName} placeholder='ИМЯ' />
							<Input state={phone} setState={setPhone} placeholder='ТЕЛЕФОН' />
						</div>
						<div className='flex items-center mt-[110px] mb-[89px] w-[300px] sm-w-full'>
							<div
								onClick={() => isAllowed()}
								className='flex justify-center items-center min-w-[30px] min-h-[30px] border mr-[23px]'
							>
								{allow && (
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='23'
										height='22'
										viewBox='0 0 23 22'
										fill='none'
									>
										<path d='M1 1L10.75 20L22 1' stroke='white' />
									</svg>
								)}
							</div>
							<p className='sm:text-[16px] text-[#ffffffca] leading-[20px]'>
								Согласен на сохранение и обработку персональных данных
							</p>
						</div>
						<div
							className='w-[300px] sm:w-[376px]'
							onClick={() => succsesful()}
						>
							<Button background='bg-transparent' textColor='text-white'>
								Заказать обратный звонок
							</Button>
						</div>
					</div>
				</div>
			</div>
			<div
				onClick={() => isShow()}
				className={`fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#0f1d45a4] ${
					isAplicationOpen ? 'opacity-100 z-[90]' : 'opacity-0 z-[-100]'
				}`}
			></div>
		</>
	)
}

const raleway = Raleway({
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	subsets: ['latin'],
})
