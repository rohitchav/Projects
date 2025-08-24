import { useEffect, useState } from 'react'
import { api, BusDetails as BusDetailsType } from '../lib/api'

export default function BusDetails() {
	const [details, setDetails] = useState<BusDetailsType | null>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		let mounted = true
		api.getBusDetails()
			.then((d) => mounted && setDetails(d))
			.finally(() => mounted && setLoading(false))
		return () => {
			mounted = false
		}
	}, [])

	if (loading) {
		return (
			<div className="card p-4 animate-pulse">
				<div className="h-6 bg-gray-200 rounded w-1/3 mb-2" />
				<div className="h-4 bg-gray-200 rounded w-1/2" />
			</div>
		)
	}
	if (!details) return null

	return (
		<div className="card p-6">
			<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
				<div>
					<h2 className="text-xl font-semibold text-gray-900">{details.name}</h2>
					<p className="text-gray-600">{details.number} · {details.type} · {details.seatType}</p>
				</div>
				<div className="text-right">
					<p className="text-gray-800 font-medium">{details.start} → {details.end}</p>
					<p className="text-gray-600 text-sm">{details.startTime} → {details.endTime} · {details.dist} km</p>
				</div>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
				<div>
					<p className="text-sm text-gray-500 mb-1">Boarding Points</p>
					<div className="flex flex-wrap gap-2">
						{details.boarding.map((b) => (
							<span key={b} className="px-2 py-1 rounded bg-blue-50 text-blue-700 text-xs">{b}</span>
						))}
					</div>
				</div>
				<div>
					<p className="text-sm text-gray-500 mb-1">Drop Points</p>
					<div className="flex flex-wrap gap-2">
						{details.drop.map((d) => (
							<span key={d} className="px-2 py-1 rounded bg-emerald-50 text-emerald-700 text-xs">{d}</span>
						))}
					</div>
				</div>
			</div>
			<p className="mt-4 text-sm text-gray-700">Available seats: <span className="font-semibold">{details.seatAvailability}</span></p>
		</div>
	)
}