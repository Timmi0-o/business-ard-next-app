import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useContext,
} from 'react'

export const AplicationContext = createContext<AplicationContextType>({
	isAplicationOpen: false,
	setIsAplicationOpen: () => {},
	isThanksOpen: false,
	setIsThanksOpen: () => {},
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
	isAplicationOpen: boolean
	setIsAplicationOpen: Dispatch<SetStateAction<boolean>>
	isThanksOpen: boolean
	setIsThanksOpen: Dispatch<SetStateAction<boolean>>
}

interface AplicationProviderType {
	children: ReactNode
	value: AplicationContextType
}
