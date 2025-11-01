import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div>
			<Link to="/">Go to Home</Link>
			<h2>This is Posts Page</h2>
			<ul>
				<li>
					<Link to="/posts/post-a">Post A</Link>
				</li>
			</ul>
		</div>
	);
}
