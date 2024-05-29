import { Phone } from '../svg/Phone'
import { Container } from '../ui/Container'
import { NawLink } from '../ui/NawLink'

export const Header = () => {
	return (
		<Container>
			<div className='flex items-center mt-[10px] sm:mt-[40px]'>
				<div className='w-fit mr-[40px] md:mr-[15px] xl:mr-[150px] 2xl:mr-[180px]'>
					<div className='h-[1px] bg-white'></div>
					<p className='py-[2px] text-[18px] tracking-[1px] font-semibold'>
						ALEX. SHEVTSOV
					</p>
					<div className='h-[1px] bg-white'></div>
				</div>
				<div className=' hidden sm:block'>
					<NawLink arrayNaw={nawLinks} />
				</div>
				<div className='flex items-center md:ml-[15px] xl:ml-[140px] 2xl:ml-[151px]'>
					<Phone />
					<span className='ml-[15px] font-semibold sm:text-[16px] mg:text-[18px] hidden sm:block'>
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
