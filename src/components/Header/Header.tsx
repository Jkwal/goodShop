import {Button} from 'antd';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {ROUTES} from "utils";
import styles from './Header.module.css'

import {becomeAdmin, becomeUser, getIsAuth, getUser, logOut} from "../../store";
import {useAppDispatch} from "../../hooks";

import {Cart} from "../Cart";
import {ButtonLogin, ButtonLogout, InputSearch, Logo} from "../common";

export const Header = () => {
    const dispatch = useAppDispatch()

    const isAuth = useSelector(getIsAuth);
    const user = useSelector(getUser);
    console.log(user)


    const handleLogOut = () => {
        dispatch(logOut())
    }


    return (
        <section className={styles.header}>

            <Logo className={styles.logo}/>

            {
                user?.role === 'admin' ? <Link
                    className={styles.goods}
                    to={ROUTES.GOODS}
                >
                    Admin panel
                </Link> : null
            }


            <InputSearch/>

            {
                !isAuth
                    ? <ButtonLogin/>
                    : <>
                        {
                            isAuth && <Button ghost
                                              onClick={() => user?.role === 'customer' ? dispatch(becomeAdmin()) : dispatch(becomeUser())}>##</Button>
                        }

                        <div className={styles.wrapper}>
                            <div
                                style={{backgroundImage: `url(${user.avatar})`}}
                                className={styles.avatar}></div>
                            <p className={styles.name}>{user.name}</p>
                        </div>
                        <ButtonLogout onClick={handleLogOut}/>
                    </>
            }

            {
                !isAuth
                    ? <Link
                        className={styles.basket}
                        to={ROUTES.LOGIN}
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