# Frontend - Bus Booking (Vite + React + Tailwind)

## Prerequisites
- Node.js 18+
- Backend running at http://localhost:8080 (Spring Boot)

## Setup
```bash
cd frontend
npm install
```

## Development
```bash
npm run dev
```
This starts Vite on http://localhost:5173 with a proxy to the backend for paths starting with `/bus`.

## Build
```bash
npm run build
npm run preview
```

## Project Structure
- `src/App.tsx`: App layout composing sections
- `src/components/BusDetails.tsx`: Renders details from GET /bus/details
- `src/components/SeatsGrid.tsx`: Renders 10x4 seats from GET /bus/seats and supports selection
- `src/components/BookingForm.tsx`: Posts to POST /bus/book
- `src/lib/api.ts`: Axios client for API calls
- Tailwind configured via `tailwind.config.js` and `index.css`