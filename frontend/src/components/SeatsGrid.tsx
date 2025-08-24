import { useEffect, useMemo, useState } from 'react'
import { api, User } from '../lib/api'

type Props = {
	onSelect?: (row: string, seat: number) => void
	selected?: { row: string; seat: number } | null
	refreshKey?: number
}

function rowIndexToChar(index: number) {
	return String.fromCharCode(65 + index)
}

export default function SeatsGrid({ onSelect, selected, refreshKey }: Props) {
	const [seats, setSeats] = useState<(User | null)[][]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		let mounted = true
		setLoading(true)
		api.getSeats()
			.then((d) => mounted && setSeats(d))
			.finally(() => mounted && setLoading(false))
		return () => {
			mounted = false
		}
	}, [refreshKey])

	const grid = useMemo(() => seats, [seats])

	return (
		<div className="card p-6">
			<div className="flex items-center justify-between mb-4">
				<h3 className="text-lg font-semibold text-gray-900">Seat Availability</h3>
				<div className="flex items-center gap-3 text-sm">
					<span className="inline-flex items-center gap-1"><span className="w-3 h-3 rounded bg-green-500 inline-block" /> Available</span>
					<span className="inline-flex items-center gap-1"><span className="w-3 h-3 rounded bg-red-500 inline-block" /> Booked</span>
					<span className="inline-flex items-center gap-1"><span className="w-3 h-3 rounded bg-blue-600 inline-block" /> Selected</span>
				</div>
			</div>
			<div className="overflow-x-auto">
				<div className="min-w-[640px]">
					{loading ? (
						<div className="h-40 animate-pulse bg-gray-100 rounded" />
					) : (
						<div className="space-y-2">
							{grid.map((row, rIdx) => (
								<div key={rIdx} className="flex items-center gap-3">
									<div className="w-6 text-sm text-gray-500">{rowIndexToChar(rIdx)}</div>
									<div className="grid grid-cols-4 gap-2">
										{row.map((seat, sIdx) => {
											const seatNumber = sIdx + 1
											const isBooked = !!seat
											const isSelected = selected && selected.row === rowIndexToChar(rIdx) && selected.seat === seatNumber
											return (
												<button
													key={sIdx}
													type="button"
													onClick={() => !isBooked && onSelect?.(rowIndexToChar(rIdx), seatNumber)}
													className={`w-14 h-10 rounded-md text-sm font-medium border flex items-center justify-center transition-colors ${
														isBooked
															? 'bg-red-500 text-white border-red-600 cursor-not-allowed'
															: isSelected
																? 'bg-blue-600 text-white border-blue-700'
																: 'bg-green-500 text-white border-green-600 hover:bg-green-600'
													}`}
													disabled={isBooked}
												>
													{seatNumber}
												</button>
											)
										})}
									</div>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	)
}