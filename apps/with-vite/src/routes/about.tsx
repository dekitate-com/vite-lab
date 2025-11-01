import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
	component: About,
});

function About() {
	return (
		<div>
			<Link to="/">Go to Home</Link>
			<h2>About Kiyo Tech</h2>
		</div>
	);
}
