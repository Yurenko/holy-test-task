import { useState } from 'react'
import { useValidation } from './useValidation'

export const useInput = (initialValue, validations) => {
	const [value, setValue] = useState(initialValue)
	const [isDirty, setDirty] = useState(false)
	const valid = useValidation(value, validations)
	const errorInput = isDirty && !valid.inputValid

	const onChange = (e) => {
		setValue(e.target.value)
	}

	const onBlure = (e) => {
		setDirty(true)
	}

	return {
		value,
		onChange,
		onBlure,
		isDirty,
		errorInput,
		...valid,
	}
}
