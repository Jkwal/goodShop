import {FC} from "react";


interface PriceProps {
    price: number,
}


export const Price: FC<PriceProps> = ({price}) => {

    return (
        <>
            {
                new Intl.NumberFormat('ru-RU',
                    {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 0,
                        maximumFractionDigits: 2,
                    }).format(price)
            }
        </>
    )
}