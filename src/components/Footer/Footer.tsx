import styles from './Footer.module.css';


export const Footer = () => {
    return (
        <section className={styles.footer}>
            <p className={styles.rights}> Developed <strong>Yauheni Vial</strong></p>
        </section>
    );
}