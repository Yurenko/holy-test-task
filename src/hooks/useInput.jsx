import { useState } from 'react'
import { useValidation } from './useValidation'

export const useInput = (initialValue, validations) => {
	const [value, setValue] = useState(initialValue)
	const [isDirty, setDirty] = useState(false)
	const [submitError, setSubmitError] = useState(false)
	const valid = useValidation(value, validations)
	const errorInput = (isDirty && !valid.inputValid) || submitError

	const onChange = (e) => {
		setValue(e.target.value)
		setSubmitError(false)
	}

	const onBlure = () => {
		setDirty(true)
	}

	return {
		value,
		onChange,
		onBlure,
		isDirty,
		errorInput,
		setSubmitError,
		...valid,
	}
}
