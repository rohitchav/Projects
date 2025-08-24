import axios from 'axios'

export interface User {
	name: string
	age: number
	gen: string
	phno: number
	boarding: string
	dest: string
	email: string
}

export interface BusDetails {
	name: string
	number: string
	start: string
	end: string
	type: string
	seatType: string
	startTime: string
	endTime: string
	dist: number
	boarding: string[]
	drop: string[]
	seats: (User | null)[][]
	seatAvailability: number
}

export interface BookingRequest {
	name: string
	age: number
	gen: string
	phno: number
	boarding: string
	dest: string
	email: string
	row: string
	seat: number
}

const client = axios.create({
	baseURL: '/',
	headers: { 'Content-Type': 'application/json' },
})

export const api = {
	getBusDetails: async () => {
		const { data } = await client.get<BusDetails>('/bus/details')
		return data
	},
	getSeats: async () => {
		const { data } = await client.get<(User | null)[][]>('/bus/seats')
		return data
	},
	book: async (payload: BookingRequest) => {
		const { data } = await client.post<{ message: string }>(
			'/bus/book',
			payload,
		)
		return data
	},
}