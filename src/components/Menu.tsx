import styles from 'styles/Menu.module.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {getAllCategories} from "../store";

export function Menu() {

    const categories = useSelector(getAllCategories)

    return (
        <nav>
            <ul className={styles.menu}>
                {
                    categories.map(({id, name}) => (
                        <li key={id}>
                            <NavLink to={`/categories/${id}`}>
                                {name}
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </nav>
    );
}