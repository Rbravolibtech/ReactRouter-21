import { Link, useNavigate } from "react-router-dom";

function HomePage() {
	const navigate = useNavigate();

	function navigateHandler() {
		navigate("/products");
	}

	return (
		<>
			<h1>MY HOME PAGE</h1>
			<p>
				GO TO <Link to="products">THE LIST OF PRODUCTS </Link>
			</p>

			<button onClick={navigateHandler}>NAVIGATE</button>
		</>
	);
}

export default HomePage;
