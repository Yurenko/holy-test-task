import { useEffect, useState } from 'react'

export const useValidation = (value, validations) => {
	const [isEmpty, setEmpty] = useState(true)
	const [onlyLettersError, setOnlyLettersError] = useState(false)
	const [onlyNumbersError, setOnlyNumbersError] = useState(false)
	const [numberCharactersError, setNumberCharactersError] = useState(false)
	const [inputValid, setInputValid] = useState(false)
	const [typeError, setTyperError] = useState('This field in required')

	useEffect(() => {
		for (const validation in validations) {
			switch (validation) {
				case 'onlyLetters':
					const reLetters = /[^a-zA-Z]/
					if (!reLetters.test(String(value))) {
						setOnlyLettersError(false)
					} else {
						setOnlyLettersError(true)
						setTyperError('Only letters allowed')
					}
					break

				case 'onlyNumbers':
					const reNumber = /[^0-9]/
					if (!reNumber.test(String(value))) {
						setOnlyNumbersError(false)
					} else {
						setTyperError('Only numbers allowed')
						setOnlyNumbersError(true)
					}
					break

				case 'numberCharacters':
					if (value.length === validations[validation]) {
						setNumberCharactersError(false)
					} else if (value.length > 0) {
						setTyperError('Should contain 12 characters')
						setNumberCharactersError(true)
					}
					break

				case 'isEmpty':
					if (value) {
						setEmpty(false)
					} else {
						setEmpty(true)
						setTyperError('This field in required')
					}
					break

				default:
					break
			}
		}
	}, [value])

	useEffect(() => {
		if (
			isEmpty ||
			onlyLettersError ||
			onlyNumbersError ||
			numberCharactersError
		) {
			setInputValid(false)
		} else {
			setInputValid(true)
		}
	}, [isEmpty, onlyLettersError, onlyNumbersError, numberCharactersError])

	return {
		typeError,
		isEmpty,
		onlyLettersError,
		onlyNumbersError,
		numberCharactersError,
		inputValid,
	}
}
