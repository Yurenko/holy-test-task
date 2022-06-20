import Button from '../Button/Button.jsx'
import styles from './Card.module.css'
import camelizeString from '../../utils/camelizeString/camelizeString'

const Card = ({ id, flag, name, category, price, handleClick }) => {
	return (
		<div
			className={
				flag ? `${styles.wrapperCard} ${styles.activeCard}` : styles.wrapperCard
			}
		>
			<div className={styles.topSide}>
				<p className="subTitle">{category}</p>
				<h1 className="title">{camelizeString(name)}</h1>
			</div>
			<div className={styles.bottomSide}>
				<div className="price">
					<p className="currencyPrice">$</p>
					<b className="price">{price}</b>
				</div>
				<Button onClick={() => handleClick(id)} disabled={flag} active={flag}>
					Buy
				</Button>
			</div>
		</div>
	)
}

export default Card
