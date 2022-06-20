import { createSlice } from '@reduxjs/toolkit'
import { featchGetGoods } from './goods.actions'

const initialState = {
	goods: [],
	selectedCard: {},
	isLoading: false,
}

const goodsSlice = createSlice({
	name: 'goods',
	initialState,
	reducers: {
		selectCard: (state, { payload }) => {
			const thing = state.goods.find((elem) => elem.id === payload)
			state.selectedCard = thing
		},
		buyCard: (state) => {
			const thing = state.goods.find(
				(elem) => elem.id === state.selectedCard.id
			)
			thing.flag = !thing.flag
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(featchGetGoods.pending, (state) => {
				state.isLoading = true
			})
			.addCase(featchGetGoods.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.goods = payload
			})
			.addCase(featchGetGoods.rejected, (state) => {
				state.goods = []
				state.isLoading = false
			})
	},
})

export const { getGoots, selectCard, buyCard } = goodsSlice.actions

export default goodsSlice.reducer
