import { MouseEventHandler } from 'react'

export interface ICustomButtonProps {
	title: string
	containerStyles?: string
	btnType?: 'button' | 'submit'
	handleClick?: MouseEventHandler<HTMLButtonElement>
	textStyles?: string
	rightIcon?: string
	isDisabled?: boolean
}

export interface ISearchManufacturerProps {
	manufacturer: string
	setManufacturer: (manufacturer: string) => void
}

export interface ICarCard {
	city_mpg: number
	class: string
	combination_mpg: number
	cylinders: number
	displacement: number
	drive: string
	fuel_type: string
	highway_mpg: number
	make: string
	model: string
	transmission: string
	year: number
}

export interface IFilterProps {
	manufacturer?: string
	year?: number
	model?: string
	limit?: number
	fuel?: string
}

export interface IOptionProps {
	title: string
	value: string
}

export interface ICustomFilterProps {
	title: string
	options: IOptionProps[]
}
