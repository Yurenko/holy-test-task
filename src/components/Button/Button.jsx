import styles from './Button.module.css'

const Button = ({ active, className, children, ...rest }) => {
	return (
		<button
			className={
				active
					? `${className} ${styles.button} ${styles.active}`
					: `${className} ${styles.button}`
			}
			{...rest}
		>
			{children}
		</button>
	)
}

export default Button
