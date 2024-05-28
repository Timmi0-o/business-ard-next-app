import { Phone } from '../svg/Phone'
import { Container } from '../ui/Container'
import { NawLink } from '../ui/NawLink'

export const Header = () => {
	return (
		<Container>
			<div className='flex items-center mt-[40px]'>
				<div className='w-fit mr-[180px]'>
					<div className='h-[1px] bg-white'></div>
					<p className='py-[2px] text-[18px] tracking-[1px] font-semibold'>
						ALEX. SHEVTSOV
					</p>
					<div className='h-[1px] bg-white'></div>
				</div>
				<NawLink arrayNaw={nawLinks} />
				<div className='flex items-center ml-[151px]'>
					<Phone />
					<span className='ml-[15px] font-semibold text-[18px]'>
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
