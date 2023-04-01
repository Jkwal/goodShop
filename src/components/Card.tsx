import {Card} from 'antd';
import React from "react";

type Cards = {
    children:any

}

const CardsStyle: React.CSSProperties = {
    width: 250,
    height:300,
};
export function Cards({children}:Cards) {
    return (
        <Card
            style={CardsStyle}
            hoverable
        >
            {children}
        </Card>
    );
}
