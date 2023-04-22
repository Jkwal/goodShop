import {Button} from 'antd';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {ROUTES} from "utils/routes";
import styles from './Header.module.css'

import {becomeAdmin, becomeUser, getIsAuth, getUser, logOut} from "../../store";
import {useAppDispatch} from "../../hooks";

import {ButtonAdminPanel, ButtonLogin, ButtonLogout, InputSearch, Logo, Basket} from "../../common";

export const Header = () => {

    const dispatch = useAppDispatch()

    const isAuth = useSelector(getIsAuth);
    const user = useSelector(getUser);


    const handleLogOut = () => {
        dispatch(logOut())
    }


    return (
        <section className={styles.header}>

            <Logo className={styles.logo}/>

            {
                user?.role === 'admin'
                    ? <ButtonAdminPanel/>
                    : null
            }


            <InputSearch/>

            {
                !isAuth
                    ? <ButtonLogin/>
                    : <>
                        {
                            isAuth
                            && <Button ghost
                                       onClick={() =>
                                           user?.role === 'customer'
                                               ? dispatch(becomeAdmin())
                                               : dispatch(becomeUser())}>
                                ##
                            </Button>
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
                        <Basket/>
                    </Link>
                    : <Link
                        className={styles.basket}
                        to={ROUTES.BASKET}
                    >
                        <Basket/>
                    </Link>

            }

        </section>
    );
}