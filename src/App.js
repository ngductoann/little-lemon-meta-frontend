import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import { Home } from "./components/pages/Home/Home";
import Reservations from "./components/pages/Reservations/Reservations";
import ConfirmedReservation from "./components/pages/Reservations/confirmedReservation";
import NotFound from "./components/pages/NotFound/NotFound";

function App() {
	return (
		<>
			<Layout>
				<Routes>
					<Route path="/little-lemon-meta-frontend/" element={<Home />} />
					<Route path="/little-lemon-meta-frontend/home" element={<Home />} />
					<Route
						path="/little-lemon-meta-frontend/reservations"
						element={<Reservations />}
					/>
					<Route
						path="/little-lemon-meta-frontend/confirmedReservation"
						element={<ConfirmedReservation />}
					/>
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Layout>
		</>
	);
}

export default App;
