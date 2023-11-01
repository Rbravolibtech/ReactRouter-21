import { Link } from "react-router-dom";

function HomePage() {
	return (
		<>
			<h1>MY HOME PAGE</h1>
			<p>
				GO TO <Link to="/products">THE LIST OF PRODUCTS </Link>
			</p>
		</>
	);
}

export default HomePage;
