import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal(){
	const { level, closeLevelUpModal } = useContext(ChallengeContext)

	return (
		<div className={styles.overlay}>
			<div className={styles.container}>
				<header>{level}</header>

				<strong>Parabens</strong>
				<p>você alcançou um novo level.</p>

				<button type="button" onClick={closeLevelUpModal}>
					<img src="/icons/close.svg" alt="close svg"/>
				</button>
			</div>
		</div>
	);
}