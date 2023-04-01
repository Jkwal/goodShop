import {Card} from 'antd';
import {Image} from 'antd';
import React from "react";

type Cards = {
    children:any

}

const CardsStyle: React.CSSProperties = {
    width: 250,
    height:400,
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
