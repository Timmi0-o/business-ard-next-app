import { useAplicationContext } from '@/app/Context/AplicationContext'
import { Raleway } from 'next/font/google'
import { useClickOutside } from 'react-click-outside-hook'

export const ThanksForTheApplication = () => {
	const { isThanksOpen, setIsThanksOpen } = useAplicationContext()
	const [ref, hasClickedOutside] = useClickOutside()

	const isShow = () => {
		if (hasClickedOutside) {
			setIsThanksOpen(false)
		}
	}

	return (
		<>
			<div
				ref={ref}
				className={
					`fixed top-0 left-0 z-[100] h-[100vh] w-[350px] sm:w-[612px] bg-[#0F1D45] duration-300 ease-out ${
						isThanksOpen ? 'ml-0' : 'ml-[-612px]'
					} ` + raleway.className
				}
			>
				<div
					onClick={() => setIsThanksOpen(false)}
					className='absolute flex flex-col justify-center items-center right-[35px] top-[35px] size-[41px] cursor-pointer duration-500 ease-in-out hover:rotate-180'
				>
					<div className='w-full border-b rotate-45'></div>
					<div className='w-full border-b -rotate-45'></div>
				</div>
				<div className='mx-[41px]'>
					<div
						className={
							'flex flex-col gap-[100px] justify-center items-center mt-[200px] text-[40px] sm:text-[50px] font-medium ' +
							raleway.className
						}
					>
						<p>
							Спасибо <br /> за заявку
						</p>

						<p className='text-center text-[32px] sm:text-[40px]'>
							Я обязательно <br /> свяжусь с вами <br /> в ближайшее время.
						</p>
					</div>
					<div className='w-fit ml-[60px] sm:ml-[330px] mt-[400px] sm:mt-[209px]'>
						<div className='h-[1px] bg-white'></div>
						<p className='py-[2px] text-[18px] tracking-[1px] font-semibold'>
							ALEX. SHEVTSOV
						</p>
						<div className='h-[1px] bg-white'></div>
					</div>
				</div>
			</div>
			<div
				onClick={() => isShow()}
				className={`fixed top-0 left-0 w-[100vw] h-[100vh] bg-[#0f1d45a4] ${
					isThanksOpen ? 'opacity-100 z-[90]' : 'opacity-0 z-[-100]'
				}`}
			></div>
		</>
	)
}

const raleway = Raleway({
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	subsets: ['latin'],
})
