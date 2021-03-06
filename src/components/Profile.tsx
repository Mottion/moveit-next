import { useContext } from "react";
import { ChallengeContext } from "../contexts/ChallengesContext";

import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const { level } = useContext(ChallengeContext);

    return(
        <div className={styles.profileContainer}>
            <img src="https://www.designerd.com.br/wp-content/uploads/2020/05/tipos-home-office-2.jpg" alt="works"/>
            <div>
                <strong>Adrian Elizandro</strong>
                <p>
                    <img src="icons/level.svg" alt="level up icon"/>
                    Level { level }
                </p>
            </div>
        </div>
    );
}