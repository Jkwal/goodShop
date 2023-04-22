import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

import styles from './Menu.module.css';

import {Loader} from "common";
import {getMenuData} from "store/categories/selectors";


export const Menu = () => {

    const {categories, isLoading} = useSelector(getMenuData)


    return (
        <nav className={styles.menu}>
            {
                isLoading
                    ? <Loader className={styles.loader}/>
                    : <ul className={styles.list}>
                        {
                            categories.map(({id, name}) => (
                                <li key={id}>
                                    <NavLink to={`/categories/${id}`} className={styles.link}>
                                        {name}
                                    </NavLink>
                                </li>
                            ))
                        }
                    </ul>
            }
        </nav>
    );
}