import { FC, useEffect, useState } from 'react';
import styles from './StarRating.module.scss';
import Icon from '../Icon';
import Badge from '../Badge';

interface StarRatingComponentProps {
    currentRate?: number;
    total?: number;
    disabled?: boolean;
    color?: 'gray' | 'primary' | 'error' | 'warning' | 'success';
}

enum StarEnum {
    empty = 0,
    decimal = 0.5,
    integer = 1,
}


const StarRating: FC<StarRatingComponentProps> = (
    {
        currentRate = 0,
        total = 5,
        disabled = true,
        color = 'warning'
    }
) => {
    const [rating, setRating] = useState<number[]>([]);


    useEffect(() => {
        const roundedValue = +(Math.round(currentRate * 2) / 2).toFixed(5);
        const integer = Math.trunc(roundedValue);
        const decimal = roundedValue % 1;

        const newRating = Array(integer).fill(1);

        if (decimal) {
            newRating.push(decimal);
        }

        for (let index = newRating.length; index < total; index++) {
            newRating.push(0);
        }

        setRating(newRating);
    }, [currentRate, total]);


    const onClick = (rating: number) => {
        if (rating !== currentRate) {
            const newRating = Array(rating).fill(1);
            const difference = total - newRating.length;

            if (difference) {
                newRating.push(...Array(difference).fill(0));
            }

            setRating(newRating);
        }
    };


    const showIcon = (value: number): any => {
        switch (value) {
            case StarEnum.integer:
                return <Icon name="star"/>;
            case StarEnum.decimal:
                return <Icon name="starHalf"/>;
            case StarEnum.empty:
                return null;
        }
    };


    return (
        <div className={styles['rating']}>
            {rating.map((value: number, index: number) => {
                return (
                    <button
                        key={index}
                        className={`${styles['star']} ${styles[`star--${color}`]} `}
                        disabled={disabled}
                        onClick={() => onClick(index + 1)}
                    >
                        {<Icon name="star" color="#EAECF0"/>}
                        {showIcon(value)}
                    </button>
                );
            })}

            <Badge size="sm" color="warning" className={styles.badge}>{currentRate.toFixed(1)}</Badge>
        </div>
    );
};

export default StarRating;
