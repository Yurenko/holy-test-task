import { createAsyncThunk } from '@reduxjs/toolkit'
import { GoodsService } from '../../services/goods/goods.service'

export const featchGetGoods = createAsyncThunk('', async () => {
	try {
		const response = await GoodsService.getGoods()
		return response.data
	} catch (error) {
		alert(error)
	}
})
