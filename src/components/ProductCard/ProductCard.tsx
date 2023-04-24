import {useState} from "react";

import {Card, Image} from 'antd';
import styles from './ProductCard.module.css';

import {Product} from "types";
import {fallbackImage, noImage} from "utils/imageError";


export function ProductCard({title, images, price}: Product) {

    const [imageSrc, setImageSrc] = useState(images![0]);

    const handleImageError = () => {
        setImageSrc(noImage);
    };
    return (

        <Card
            className={styles.card}
            hoverable
        >
            {
                images?.length
                    ? <img className={styles.image} src={imageSrc} onError={handleImageError} alt={title}/>
                    : <Image
                        className={styles.image}
                        src="error"
                        fallback={fallbackImage}
                    />
            }

            <div className={styles.info}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.price}>{`${price}$`}</p>
            </div>
        </Card>
    );
}

