import { ReactNode } from 'react'

interface ContainerProps {
	children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
	return (
		<div className='w-full flex justify-center'>
			<div className='max-w-[1320px]'>{children}</div>
		</div>
	)
}
