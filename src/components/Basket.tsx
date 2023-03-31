import styles from 'styles/Basket.module.css';

import {ShoppingTwoTone} from '@ant-design/icons';
import {Badge} from "antd";

export function Basket() {
    return (
        <ul className={styles.basket}>
            <a href="#">
                <Badge count={6} >
                    <ShoppingTwoTone twoToneColor="#AE9F94" style={{'fontSize':'3rem'}}/>
                </Badge>
            </a>
        </ul>
    );
}