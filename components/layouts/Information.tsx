'use client'
import { AplicationProvider } from '@/app/Context/AplicationContext'
import { Montserrat, Raleway } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { ApplicationForm } from './ApplicationForm'
import { ThanksForTheApplication } from './ThanksForTheApplication'

export const Information = () => {
	const [isAplicationOpen, setIsAplicationOpen] = useState(false)
	const [isThanksOpen, setIsThanksOpen] = useState(false)

	const onOpen = () => {
		setIsAplicationOpen(!isAplicationOpen)
	}

	return (
		<AplicationProvider
			value={{
				isAplicationOpen: isAplicationOpen,
				setIsAplicationOpen: setIsAplicationOpen,
				isThanksOpen: isThanksOpen,
				setIsThanksOpen: setIsThanksOpen,
			}}
		>
			<Container>
				<div
					className={
						`mt-[40px] md:mt-[30px] lg:mt-[166px] ml-[-10px] sm:ml-0 sm:mr-[200px] md:mr-[260px] lg:mr-[280px] xl:mr-[590px] 2xl:mr-[525px]  ` +
						raleway.className
					}
				>
					<div>
						<p className='text-[32px] md:text-[42px] 2xl:text-[65px] uppercase font-semibold mb-[45px] leading-[40px] lg:leading-[90px]'>
							Создаю условия <br /> для вашего успеха
						</p>
						<p className='border-l-[1px] border-l-[#fff] pl-[8px] sm:pl-[24px] text-[16px] text-[#ffffff7f] after:w-0 after:h-[200px] after:border-t-[2px] after:border-t-[#ffff] border-partial-left'>
							Когда ваше время и энергия лучше сфокусированы, стремление к новым
							<br />
							возможностям становится реальностью, ваш успех зависит от ваших
							действий
						</p>
						<div className='flex flex-col 2xl:flex-row gap-[43px] mt-[30px] w-[200px] sm:w-[300px] md:w-[378px]'>
							<Button background='bg-white' textColor='text-black'>
								Записаться на консультацию
							</Button>

							<div onClick={() => onOpen()}>
								<Button background='bg-transparent' textColor='text-white'>
									Бесплатная консультация
								</Button>
							</div>
						</div>
					</div>
					<Image
						className='absolute bottom-0 right-[-180px] sm:right-[-180px] xl:right-[20px] 2xl:right-[210px]'
						src={'/mentor.png'}
						width={525}
						height={808}
						alt='mentor'
					/>
					<div
						className={
							'flex gap-[4px] sm:gap-[80px] lg:gap-[250px] mt-[20px] sm:mt-[112px] ' +
							montserrat.className
						}
					>
						<div className='flex flex-col gap-[10px] sm:gap-[24px] border-l-[1px] border-l-[#ffffff8f] pl-[8px] sm:pl-[24px] py-[10px]'>
							<p className='font-semibold text-[32px] sm:text-[40px]'>130+</p>
							<p
								className={
									' text-[12px] sm:text-[16px] font-normal opacity-50  ' +
									raleway.className
								}
							>
								техник для <br /> достижения целей
							</p>
						</div>
						<div className='flex flex-col gap-[10px] sm:gap-[24px] border-l-[1px] border-l-[#ffffff8f] pl-[8px] sm:pl-[24px] py-[10px]'>
							<p className='font-semibold text-[32px] sm:text-[40px]'>250%</p>
							<p
								className={
									'text-[12px] sm:text-[16px] font-normal opacity-50 ' +
									raleway.className
								}
							>
								увеличение личной <br /> продуктивности
							</p>
						</div>
					</div>
				</div>
				<ApplicationForm />
				<ThanksForTheApplication />
			</Container>
		</AplicationProvider>
	)
}

const raleway = Raleway({
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	subsets: ['latin'],
})

const montserrat = Montserrat({
	weight: ['100', '200', '300', '400', '500', '600', '700'],
	subsets: ['latin'],
})
