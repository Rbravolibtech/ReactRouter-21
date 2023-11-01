import { useParams, Link } from "react-router-dom";

function ProductDetailPage() {
	const params = useParams();

	return (
		<>
			<h1>PRODUCT DETAILS!</h1>;)
			<p>{params.productId}</p>
			<p>
				<Link to=".." relative="path">
					BACK
				</Link>
			</p>
		</>
	);
}

export default ProductDetailPage;
