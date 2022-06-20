import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './App.module.css'
import Button from './components/Button/Button'
import Card from './components/Card/Card'
import MyLoader from './components/ContentLoader/ContentLoader'
import FormOrder from './components/FormOrder/FormOrder'
import Modal from './components/Modal/Modal'
import { featchGetGoods } from './store/goods/goods.actions'
import { selectCard } from './store/goods/goods.slice'
import camelizeString from './utils/camelizeString/camelizeString'

function App() {
	const dispatch = useDispatch()

	const [modalActive, setModalActive] = useState(false)

	useEffect(() => {
		dispatch(featchGetGoods())
	}, [])

	const { isLoading, goods, selectedCard } = useSelector((state) => state.goods)


	const handleClick = (id) => {
		setModalActive(true)
		dispatch(selectCard(id))
	}

	const handleCheapestGoods = () => {
		const cheapest = goods
			.filter((elem) => elem.flag === false)
			.reduce((prev, curr) => (prev.price < curr.price ? prev : curr))

		setModalActive(true)
		dispatch(selectCard(cheapest.id))
	}

	return (
		<div className={styles.wrapper}>
			<div className={styles.cards}>
				{(isLoading ? Array.from(new Array(6)) : goods).map((item, index) =>
					item ? (
						<Card
							key={item.id}
							id={item.id}
							name={item.name}
							category={item.category}
							price={item.price}
							flag={item.flag}
							handleClick={handleClick}
						/>
					) : (
						<MyLoader key={index} />
					)
				)}
			</div>
			<Button className={styles.button} onClick={handleCheapestGoods}>
				Buy cheapest
			</Button>

			{modalActive && (
				<Modal active={modalActive} setModalActive={setModalActive}>
					<p className="subTitle">{selectedCard.category}</p>
					<h1 className="title">{camelizeString(selectedCard.name)}</h1>
					<div className="price">
						<p className="currencyPrice">$</p>
						<b className="price">{selectedCard.price}</b>
					</div>
					<FormOrder
						selectedCard={selectedCard}
						setModalActive={setModalActive}
					/>
				</Modal>
			)}
		</div>
	)
}

export default App
