import { useState, useEffect } from 'react';
import axios from 'axios';

import Element from '../Element/Element';
import styles from './style.module.css';

function PeriodicTable({ props }) {
	const [elements, setElements] = useState(null);

	useEffect(() => {
		axios.get('https://ozanorkun.github.io/periyodik-tablo/api.json').then((res) => {
			setElements(res.data);
		});
	}, []);

	return (
		<div className={styles.periodicTable}>
			{elements?.elements.map((element, i) => (
				<Element key={i} elementSymbol={element.symbol}></Element>
			))}
		</div>
	);
}

export default PeriodicTable;
