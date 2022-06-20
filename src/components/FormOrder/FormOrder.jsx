import { useDispatch } from 'react-redux'
import { useInput } from '../../hooks/useInput'
import { buyCard } from '../../store/goods/goods.slice'
import Button from '../Button/Button'
import styles from './FormOrder.module.css'
import Input from './Input'

const FormOrder = ({ setModalActive }) => {
	const dispatch = useDispatch()

	const name = useInput('', { isEmpty: true, onlyLetters: true })
	const number = useInput('', {
		isEmpty: true,
		onlyNumbers: true,
		numberCharacters: 12,
	})

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(buyCard())
		setModalActive(false)

		console.log('Name:', name.value)
		console.log('Number:', number.value)
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<Input name="name" item={name} type="text" placeholder="Name" />
			<Input name="number" item={number} type="text" placeholder="Number" />

			<Button
				//валидація до кінція треба закінчити
				disabled={!name.inputValid || !number.inputValid}
				className={styles.button}
				type="submit"
			>
				Order
			</Button>
		</form>
	)
}

export default FormOrder
