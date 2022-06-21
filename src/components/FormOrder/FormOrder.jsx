import { useDispatch } from 'react-redux'
import { useInput } from '../../hooks/useInput'
import { buyCard } from '../../store/goods/goods.slice'
import Button from '../Button/Button'
import styles from './FormOrder.module.css'
import Input from './Input'

const FormOrder = ({ selectedCard, setModalActive }) => {
	const dispatch = useDispatch()

	const name = useInput('', {
		isEmpty: true,
		onlyLetters: true,
	})

	const number = useInput('', {
		isEmpty: true,
		onlyNumbers: true,
		numberCharacters: 12,
	})

	const handleSubmit = (e) => {
		e.preventDefault()

		if (name.isEmpty && number.isEmpty) {
			name.setSubmitError(true)
			number.setSubmitError(true)
		} else if (checkValidation()) {
			dispatch(buyCard())
			setModalActive(false)

			const user = {
				user_name: name.value,
				user_number: number.value,
			}
			
			console.log('Name:', name.value)
			console.log('Number:', number.value)
			console.log('New order object ', Object.assign({ ...selectedCard }, user))
		}
	}

	const checkValidation = () =>
		!name.errorInput && name.value && !number.errorInput && number.value

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<Input name="name" item={name} type="text" placeholder="Name" />
			<Input name="number" item={number} type="text" placeholder="Number" />

			<Button onClick={checkValidation} className={styles.button} type="submit">
				Order
			</Button>
		</form>
	)
}

export default FormOrder
