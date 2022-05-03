import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import People from './pages/People';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/:id' element={<People />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
