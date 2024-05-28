import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
} from 'react'

export const AplicationContext = createContext<AplicationContextType>({
	isOpen: false,
	setIsOpen: () => {},
})

export function AplicationProvider({
	children,
	value,
}: AplicationProviderType) {
	return (
		<AplicationContext.Provider value={value}>
			{children}
		</AplicationContext.Provider>
	)
}

export function useAplicationContext() {
	return useContext(AplicationContext)
}

interface AplicationContextType {
	isOpen: boolean
	setIsOpen: Dispatch<SetStateAction<boolean>>
}

interface AplicationProviderType {
	children: ReactNode
	value: AplicationContextType
}
