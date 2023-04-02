import {Image, Input} from 'antd';
import {useSelector} from "react-redux";
import {Link, NavLink} from "react-router-dom";

import {ROUTES} from "utils";
import styles from 'styles/Header.module.css';

import {getIsAuth, getUser, logOut} from "../store";
import {useAppDispatch} from "../hooks";

import {Cart} from "./Cart";

const {Search} = Input;


export const Header = () => {
    const dispatch = useAppDispatch()

    const isAuth = useSelector(getIsAuth);
    const user = useSelector(getUser);


    const handleLogOut = () => {
        dispatch(logOut())
    }

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
                />

                {/*{false && <div className={styles.box}></div>}*/}
            </form>
            {
                !isAuth
                    ? <NavLink to={ROUTES.LOGIN}>
                        <div className={styles.login}>
                            <div className={styles.username}>Log in</div>
                        </div>
                    </NavLink>

                    : <>
                        <div className={styles.wrapper}>
                            <div style={{backgroundImage: `url(${user.avatar})`}}
                                 className={styles.avatar}></div>
                            <p className={styles.name}>{user.name}</p>
                        </div>
                        <NavLink to={ROUTES.LOGIN}>
                            <div className={styles.logout} onClick={handleLogOut}>
                                Log out
                            </div>
                        </NavLink>
                    </>
            }

            {
                !isAuth
                    ? <Link
                        className={styles.basket}
                        to={ROUTES.REGISTRATION}
                    >
                        <Cart/>
                    </Link>

                    : <Link
                        className={styles.basket}
                        to={ROUTES.BASKET}
                    >
                        <Cart/>
                    </Link>

            }


        </section>
    );
}