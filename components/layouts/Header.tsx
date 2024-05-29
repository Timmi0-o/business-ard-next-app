import { Phone } from '../svg/Phone'
import { Container } from '../ui/Container'
import { NawLink } from '../ui/NawLink'

export const Header = () => {
	return (
		<Container>
			<div className='flex items-center justify-between min-w-[360px] mt-[10px] sm:mt-[40px]'>
				<div className='min-w-[180px] mr-[15px] xl:mr-[150px] 2xl:mr-[180px]'>
					<div className='h-[1px] bg-white'></div>
					<p className='py-[2px] sm:text-[16px] md:text-[18px] tracking-[1px] font-semibold text-center'>
						ALEX. SHEVTSOV
					</p>
					<div className='h-[1px] bg-white'></div>
				</div>
				<div className=' hidden sm:block md:px-[10px] lg:px-[40px] xl:px-0'>
					<NawLink arrayNaw={nawLinks} />
				</div>
				<div className='flex items-center xl:ml-[140px] 2xl:ml-[151px]'>
					<Phone />
					<span className='ml-[15px] font-semibold sm:text-[16px] md:text-[18px] hidden lg:block'>
						8-345-123-34-45
					</span>
				</div>
			</div>
		</Container>
	)
}

const nawLinks = [
	'Обо мне',
	'Наставничество',
	'Мероприятия',
	'Кейсы',
	'Отзывы',
	'Контакты',
]
