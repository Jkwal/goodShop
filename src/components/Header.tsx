import {Link} from "react-router-dom";

import {ROUTES} from "config";
import styles from 'styles/Header.module.css';

import {Basket} from "./Basket";
import {Input} from 'antd';

const {Search} = Input;

export const Header = () => {

    const onSearch = (value: string) => console.log(value);

    return (
        <section className={styles.header}>

            <Link
                className={styles.logo}
                to={ROUTES.HOME}
            >
                GoodStore
            </Link>

            <form className={styles.form}>
                <Search className={styles.search}
                        placeholder="input search text"
                        allowClear
                        size="middle"
                        onSearch={onSearch}
                />

                {/*{false && <div className={styles.box}></div>}*/}
            </form>


            <div className={styles.user}>
                <div className={styles.username}>Guest</div>
            </div>


            <Link
                className={styles.basket}
                to={ROUTES.BASKET}
            >
                <Basket/>
            </Link>

        </section>
    );
}