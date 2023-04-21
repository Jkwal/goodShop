import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

import styles from 'components/Menu/Menu.module.css';

import {getMenuData} from "../../store/categories/selectors";
import {Loader} from "../common";


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