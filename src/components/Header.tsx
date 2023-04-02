import {Input} from 'antd';
import {useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";

import {ROUTES} from "utils";
import styles from 'styles/Header.module.css';

import {Cart} from "./Cart";
import {getIsAuth} from "../store";


const {Search} = Input;


export const Header = () => {

    const isAuth = useSelector(getIsAuth)

    const onSearch = (value: string) => console.log(value);

    return (
        <section className={styles.header}>

            <Link
                className={styles.logo}
                to={ROUTES.HOME}
            >
                GoodStore
            </Link>

            <Link
                className={styles.goods}
                to={ROUTES.GOODS}
            >
                Admin panel
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
            {!isAuth
                ? <NavLink to={ROUTES.LOGIN}>
                    <div className={styles.login}>
                        <div className={styles.username}>Log in</div>
                    </div>
                </NavLink>
                : <NavLink to={ROUTES.LOGIN}>
                    <div className={styles.logout}>
                        <div className={styles.username}>Log out</div>
                    </div>
                </NavLink>
            }


            <Link
                className={styles.basket}
                to={ROUTES.BASKET}
            >
                <Cart/>
            </Link>

        </section>
    );
}