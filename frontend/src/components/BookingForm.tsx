import { FormEvent, useMemo, useState } from 'react'
import { api, BookingRequest } from '../lib/api'

type Props = {
	selected?: { row: string; seat: number } | null
	onBooked?: () => void
}

const defaultValues: BookingRequest = {
	name: '',
	age: 18,
	gen: 'M',
	phno: 0,
	boarding: '',
	dest: '',
	email: '',
	row: 'A',
	seat: 1,
}

export default function BookingForm({ selected, onBooked }: Props) {
	const [values, setValues] = useState<BookingRequest>(defaultValues)
	const [loading, setLoading] = useState(false)
	const [message, setMessage] = useState<string | null>(null)

	useMemo(() => {
		if (selected) setValues((v) => ({ ...v, row: selected.row, seat: selected.seat }))
	}, [selected])

	async function submit(e: FormEvent) {
		e.preventDefault()
		setLoading(true)
		setMessage(null)
		try {
			const res = await api.book(values)
			setMessage(res.message)
			onBooked?.()
		} catch (e: any) {
			setMessage(e?.response?.data?.message ?? 'Booking failed')
		} finally {
			setLoading(false)
		}
	}

	return (
		<form onSubmit={submit} className="card p-6 space-y-4">
			<h3 className="text-lg font-semibold text-gray-900">Book a Seat</h3>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
				<div>
					<label className="label">Name</label>
					<input className="input" value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })} required />
				</div>
				<div>
					<label className="label">Email</label>
					<input type="email" className="input" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })} required />
				</div>
				<div>
					<label className="label">Phone</label>
					<input type="tel" className="input" value={values.phno || ''} onChange={(e) => setValues({ ...values, phno: Number(e.target.value) })} required />
				</div>
				<div>
					<label className="label">Age</label>
					<input type="number" min={1} className="input" value={values.age} onChange={(e) => setValues({ ...values, age: Number(e.target.value) })} required />
				</div>
				<div>
					<label className="label">Gender</label>
					<select className="input" value={values.gen} onChange={(e) => setValues({ ...values, gen: e.target.value as 'M'|'F' })}>
						<option value="M">Male</option>
						<option value="F">Female</option>
					</select>
				</div>
				<div className="grid grid-cols-2 gap-4">
					<div>
						<label className="label">Row</label>
						<input className="input" value={values.row} onChange={(e) => setValues({ ...values, row: e.target.value.toUpperCase() })} maxLength={1} required />
					</div>
					<div>
						<label className="label">Seat</label>
						<input type="number" min={1} max={4} className="input" value={values.seat} onChange={(e) => setValues({ ...values, seat: Number(e.target.value) })} required />
					</div>
				</div>
				<div>
					<label className="label">Boarding</label>
					<input className="input" value={values.boarding} onChange={(e) => setValues({ ...values, boarding: e.target.value })} required />
				</div>
				<div>
					<label className="label">Destination</label>
					<input className="input" value={values.dest} onChange={(e) => setValues({ ...values, dest: e.target.value })} required />
				</div>
			</div>
			<div className="flex items-center gap-3">
				<button className="btn btn-primary" disabled={loading} type="submit">{loading ? 'Booking...' : 'Book Seat'}</button>
				{message && <span className="text-sm text-gray-700">{message}</span>}
			</div>
		</form>
	)
}