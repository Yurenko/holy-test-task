import axios from '../../api/interceptors'

export const GoodsService = {
	async getGoods() {
		const responce = await axios.get('goods')
		return responce
	},
}
