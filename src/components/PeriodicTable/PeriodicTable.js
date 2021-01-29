import { useState, useEffect } from 'react';
import axios from 'axios';

import Element from '../Element/Element';
import styles from './style.module.css';

function PeriodicTable({ props }) {
	const [elementData, setElementData] = useState(null);

	useEffect(() => {
		axios.get('https://ozanorkun.github.io/periyodik-tablo/api.json').then((res) => {
			setElementData(res.data);
		});
	}, []);

	return (
		<div className={styles.periodicTable}>
			{elementData?.elements.map((element, i) => (
				<Element key={i} element={element}></Element>
			))}
		</div>
	);
}

export default PeriodicTable;
