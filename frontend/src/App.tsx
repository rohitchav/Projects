import { useState } from 'react'
import BusDetails from './components/BusDetails'
import SeatsGrid from './components/SeatsGrid'
import BookingForm from './components/BookingForm'

export default function App() {
	const [selected, setSelected] = useState<{ row: string; seat: number } | null>(null)
	const [refreshKey, setRefreshKey] = useState(0)

	return (
		<div className="min-h-screen">
			<header className="bg-white border-b">
				<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
					<h1 className="text-2xl font-bold text-gray-900">Bus Booking</h1>
					<a href="https://vitejs.dev" target="_blank" className="text-sm text-gray-500 hover:text-gray-700">Built with React + Vite</a>
				</div>
			</header>
			<main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
				<BusDetails />
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="lg:col-span-2">
						<SeatsGrid selected={selected} onSelect={(row, seat) => setSelected({ row, seat })} refreshKey={refreshKey} />
					</div>
					<div>
						<BookingForm selected={selected} onBooked={() => setRefreshKey((k) => k + 1)} />
					</div>
				</div>
			</main>
			<footer className="py-8 text-center text-sm text-gray-500">© {new Date().getFullYear()} Bus Booking</footer>
		</div>
	)
}