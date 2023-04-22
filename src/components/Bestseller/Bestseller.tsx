import {useEffect} from "react";

import styles from './Bestseller.module.css';

import {useAppDispatch} from "hooks";
import {Category} from "../Category";
import {loadProductsByCategory} from "store";
import {randomNumber} from "utils/randomNumber";


export const Bestseller = () => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(loadProductsByCategory(String(randomNumber)));
    }, [dispatch])


    return (
        <section className={styles.bestsellers}>

            <h2 className={styles.heading}>Bestsellers from </h2>
            <Category bestsellers={true} withButtonBack={false}/>

        </section>
    )
}