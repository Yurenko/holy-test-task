const camelizeString = (string) =>
	string.charAt(0).toUpperCase() + string.substr(1).toLowerCase()

export default camelizeString
