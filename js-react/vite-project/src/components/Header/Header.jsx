import styles from './Header.module.css';
import logoZoro from '../../assets/jolly-zoro.svg';

export function Header() {
    return (
        <>
            <header className={styles.header} >
                <img src={logoZoro} alt = "zorao jolly roger" />
            </header>

        </>
    );
}