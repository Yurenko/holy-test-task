import styles from './Input.module.css'

const Input = ({ name, item, type, placeholder, ...rest }) => {
	return (
		<label>
			<input
				onChange={(e) => item.onChange(e)}
				onBlur={(e) => item.onBlure(e)}
				value={item.value}
				name={name}
				type={type}
				placeholder={placeholder}
				className={
					item.errorInput ? `${styles.errorInput}` : `${styles.correct}`
				}
				{...rest}
			/>
			{item.errorInput && (
				<div className={styles.formError}>{item.typeError}</div>
			)}
		</label>
	)
}

export default Input
