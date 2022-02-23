import Link from 'next/link';
import styles from './FooterLink.module.css';

export default function FooterLink( {urlLink, pageName}) {
    return (
        <Link href={urlLink}>
            <div className={styles.containerFlex}>
                <div>{pageName}</div>
                <div className={styles.arrow}>{">"}</div>
            </div>
        </Link>
    )
}
