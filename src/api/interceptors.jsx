import axios from 'axios'

const { REACT_APP_URL } = process.env

const instance = axios.create({
	baseURL: `${REACT_APP_URL}`,
	headers: {
		'Content-Type': 'application/json',
	},
})

export default instance
