import Link from 'next/link';
import styles from './MenuLink.module.css';

export default function MenuLink( {urlLink, navName}) {
    return (
        <Link href={urlLink}>
            <div className={styles.containerFlex}>
                <div className={styles.navName}>{navName}</div>
                <div className={styles.arrow}>{">"}</div>
            </div>
        </Link>
    )
}
