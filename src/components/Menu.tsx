import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import styles from 'styles/Menu.module.css';

import {Loader} from "./common/Loader/Loader";
import {getAllCategories, getIsLoadingCategories} from "../store";


export function Menu() {

    const categories = useSelector(getAllCategories)
    const isLoading = useSelector(getIsLoadingCategories)
    return (
        <>
            <nav className={styles.menu}>
                <ul className={styles.list}>
                    {
                        isLoading
                            ? <Loader/>
                            : categories.map(({id, name}) => (
                                <li key={id} >
                                    <NavLink to={`/categories/${id}`} className={styles.link}>
                                        {name}
                                    </NavLink>
                                </li>
                            ))
                    }
                </ul>
            </nav>
        </>

    );
}