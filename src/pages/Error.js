import MainNavigation from "../components/MainNavigation";

function ErrorPage() {
	return (
		<>
			<MainNavigation />
			<main>
				<h1 className="errorPage">AN ERROR OCCURRED!</h1>
				<p className="noPage">COULD NOT FIND THIS PAGE!</p>
			</main>
		</>
	);
}

export default ErrorPage;
