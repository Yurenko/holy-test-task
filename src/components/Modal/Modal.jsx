import styles from './Modal.module.css'
import cancelModal from '../../assets/img/cancel.png'

const Modal = ({ active, setModalActive, children }) => {
	return (
		<div className={active ? `${styles.modal} ${styles.active}` : styles.modal}>
			<div
				className={
					active ? `${styles.content} ${styles.active}` : styles.content
				}
			>
				<div onClick={() => setModalActive(false)} className={styles.cancel}>
					<img src={cancelModal} alt="cancelModal" />
				</div>
				{children}
			</div>
		</div>
	)
}

export default Modal
