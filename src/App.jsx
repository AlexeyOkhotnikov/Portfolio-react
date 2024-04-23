import './styles/main.css';

import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<NavBar />
			{/* <Home /> */}
			<Projects />
			<Footer />
		</div>
	);
}

export default App;
