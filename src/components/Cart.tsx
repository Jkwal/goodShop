import {Badge} from "antd";
import {ShoppingTwoTone} from '@ant-design/icons';

import styles from 'styles/Cart.module.css';


export function Cart() {
    return (
        <ul className={styles.cart}>
                <Badge count={6} >
                    <ShoppingTwoTone twoToneColor="#AE9F94" style={{'fontSize':'3rem'}}/>
                </Badge>
        </ul>
    );
}