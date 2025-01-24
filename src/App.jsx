import { Route, Routes } from "react-router-dom";
import NavBar from "./components/common/NavBar";
import Home from "./page/Home";
import About from "./page/About";
import Services from "./page/Services";
import Contact from "./page/Contact";
import Main from "./page/Main";
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
	return (
		<>
			<div>
				<NavBar />

				{/* add the routes  */}
				<Routes>
					<Route path="/" element={<Main />} />

					<Route path="/home" element={<Home />}>
						{" "}
					</Route>

					<Route path="/about" element={<About />} />

					<Route path="/services" element={<Services />} />

					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</>
	)
}

export default App;
