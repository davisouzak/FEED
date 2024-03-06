import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Rotas } from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 5000,
			gcTime: 1000,
		},
	},
})

export default function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<Rotas />
			</Router>
		</QueryClientProvider>
	)
}
