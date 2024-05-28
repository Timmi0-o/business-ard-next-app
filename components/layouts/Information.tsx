'use client'
import { AplicationProvider } from '@/app/Context/AplicationContext'
import { Montserrat, Raleway } from 'next/font/google'
import Image from 'next/image'
import { useState } from 'react'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { ApplicationForm } from './ApplicationForm'

export const Information = () => {
	const [isOpen, setIsOpen] = useState(false)
	console.log('isOpen', isOpen)

	const onOpen = () => {
		setIsOpen(!isOpen)
	}

	return (
		<AplicationProvider value={{ isOpen: isOpen, setIsOpen: setIsOpen }}>
			<Container>
				<div className={`mt-[166px] mr-[525px] ` + raleway.className}>
					<div>
						<p className='text-[65px] uppercase font-semibold mb-[45px]  leading-[90px]'>
							Создаю условия <br /> для вашего успеха
						</p>
						<p className='border-l-[1px] border-l-[#fff] pl-[24px] text-[16px] text-[#ffffff7f] after:w-0 after:h-[200px] after:border-t-[2px] after:border-t-[#ffff] border-partial-left'>
							Когда ваше время и энергия лучше сфокусированы, стремление к новым
							<br />
							возможностям становится реальностью, ваш успех зависит от ваших
							действий
						</p>
						<div className='flex gap-[43px] mt-[64px]'>
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
						className='absolute bottom-0 right-[210px]'
						src={'/mentor.png'}
						width={525}
						height={808}
						alt='mentor'
					/>
					<div
						className={'flex gap-[250px] mt-[112px] ' + montserrat.className}
					>
						<div className='flex flex-col gap-[24px] border-l-[1px] border-l-[#ffffff8f] pl-[24px] py-[10px]'>
							<p className='font-semibold text-[40px]'>130+</p>
							<p
								className={
									'text-[16px] font-normal opacity-50  ' + raleway.className
								}
							>
								техник для <br /> достижения целей
							</p>
						</div>
						<div className='flex flex-col gap-[24px] border-l-[1px] border-l-[#ffffff8f] pl-[24px]'>
							<p className='font-semibold text-[40px]'>250%</p>
							<p
								className={
									'text-[16px] font-normal opacity-50 ' + raleway.className
								}
							>
								увеличение личной <br /> продуктивности
							</p>
						</div>
					</div>
				</div>
				<ApplicationForm />
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
