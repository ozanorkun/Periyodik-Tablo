import styles from './style.module.css';

function Element({ elementSymbol }) {
	return <div className={styles.Element}>{elementSymbol}</div>;
}

export default Element;
