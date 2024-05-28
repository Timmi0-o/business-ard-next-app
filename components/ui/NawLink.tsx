interface NawLinkProps {
	arrayNaw: string[]
	clasName?: string
}

export const NawLink = ({ arrayNaw, clasName }: NawLinkProps) => {
	return (
		<div className={`flex gap-[32.5px]  ${clasName}`}>
			{arrayNaw.map((naw, i) => (
				<p
					className='text-[#ffffff] text-[14px] font-[300] hover:opacity-70 duration-300 active:opacity-45 cursor-pointer'
					key={i}
				>
					{naw}
				</p>
			))}
		</div>
	)
}
