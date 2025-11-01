import { createFileRoute, Link } from "@tanstack/react-router";
export const Route = createFileRoute("/posts/post-a")({
	component: PostA,
});

function PostA() {
	return (
		<div>
			<Link to="/posts">Go to Posts</Link>
			<h2>This is Post A Page</h2>
		</div>
	);
}
