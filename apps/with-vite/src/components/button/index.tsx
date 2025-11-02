import type { ComponentProps, ReactNode } from "react";
import styles from "./styles.module.css";

interface ButtonProps extends ComponentProps<"button"> {
	children: ReactNode;
	variant?: "primary" | "secondary" | "danger";
	size?: "small" | "medium" | "large";
}

export const Button = ({
	children,
	variant = "primary",
	size = "medium",
	className = "",
	...props
}: ButtonProps) => {
	const classNames = [styles.button, styles[variant], styles[size], className]
		.filter(Boolean)
		.join(" ");

	return (
		<button type="button" className={classNames} {...props}>
			{children}
		</button>
	);
};
