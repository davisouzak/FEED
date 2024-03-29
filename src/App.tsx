import { BrowserRouter as Router } from 'react-router-dom'
import { Rotas } from './routes'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FavoriteProvider } from './favorites/contexts/FavoriteContext'

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
			<FavoriteProvider>
				<Rotas />
			</FavoriteProvider>
		</QueryClientProvider>
	)
}
