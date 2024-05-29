import { Header } from '@/components/layouts/Header'
import { Information } from '@/components/layouts/Information'

export default function Home() {
	return (
		<div className='w-full flex flex-col'>
			<Header />
			<Information />
		</div>
	)
}
