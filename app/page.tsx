'use client'
import { Header } from '@/components/layouts/Header'
import { Information } from '@/components/layouts/Information'
import { useAplicationContext } from './Context/AplicationContext'

export default function Home() {
	const { isOpen } = useAplicationContext()
	return (
		<>
			<Header />
			<Information />
		</>
	)
}
