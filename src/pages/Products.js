import { Link } from "react-router-dom";

const PRODUCTS = [
	{ id: "p1", title: "product 1" },
	{ id: "p2", title: "product2" },
	{ id: "p3", title: "product3" },
	{ id: "p4", title: "product4" },
	{ id: "p5", title: "product5" },
];

function ProductsPage() {
	return (
		<>
			<h1>THE PRODUCTS PAGE</h1>

			<ul>
				{PRODUCTS.map((prod) => (
					<li key={prod.id}>
						<Link to={`/products/${prod.id}`}>{prod.title}</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default ProductsPage;
