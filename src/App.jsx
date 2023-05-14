import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/navbar/navbar';
import Layout from './components/layout/layout';
import Routes from './routers/Routes';
import Footer from './components/footer/Footer';

function App() {
	return (
		<>
			<Layout>
				<Navbar />
				<Routes />
				<Footer />
			</Layout>

			<GlobalStyles />
		</>
	);
}

export default App;
