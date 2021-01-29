import styles from './style.module.css';

function Element({ element }) {
	return (
		<div style={{ gridColumn: element.xpos, gridRow: element.ypos }} className={styles.Element}>
			{element.symbol}
		</div>
	);
}

export default Element;
