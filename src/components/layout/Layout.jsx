import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
	const navLinks = [
		{
			name: "Home",
			path: "/little-lemon-meta-frontend/#home",
			hashLink: true,
		},
		{
			name: "About",
			path: "/little-lemon-meta-frontend/#about",
			hashLink: true,
		},
		{
			name: "Menu",
			path: "/little-lemon-meta-frontend/#menu",
			hashLink: true,
		},
		{
			name: "Reservations",
			path: "/little-lemon-meta-frontend/reservations",
			hashLink: false,
		},
		{
			name: "Order Online",
			path: "/little-lemon-meta-frontend/orderOnline",
			hashLink: false,
		},
		{
			name: "Login",
			path: "/little-lemon-meta-frontend/login",
			hashLink: false,
		},
	];

	return (
		<>
			<Header navLinks={navLinks} />
			<main id="home">{children}</main>
			<Footer navLinks={navLinks} />
		</>
	);
};

export default Layout;
