import styles from './style.module.css';

const colorTable = {
	'alkali metal': '#DEBA70', //
	'toprak alkali metal': '#DBE879', //
	metal: '#218380',
	'iki atomlu ametal': '#7BD587', //
	'çok atomlu ametal': '#5BE36A',
	'yarı metal': '#73D2DE', //
	'geçiş metali': '#F28E80', //
	lantanit: '#4AABAF', //
	aktinit: '#B78DC2',
	soygaz: '#FFBC42', //
	unknown: '#CCD0D3',
};

function Element({ element }) {
	return (
		<div
			style={{
				gridColumn: element.xpos,
				gridRow: element.ypos,
				backgroundColor: colorTable[element.category],
			}}
			className={styles.element}
		>
			<strong>{element.symbol}</strong>
			<small className={styles.number}>{element.number}</small>
			<small className={styles.name}>{element.name}</small>
		</div>
	);
}

export default Element;
