import './index.css';

import Box from '../box';
import Heading from '../heading';
import { Fragment } from 'react';

export default function ReviewList({ list }) {

    return (
        <div className='review__block'>
            <Heading children="Відгуки клієнтів" />

            <div className='review__list'>
                {list.map(({ id, ...rest }) => (
                    <Fragment key={id}>
                        <Item {...rest} />
                    </Fragment>
                ))}
            </div>
        </div>
    )


}



function Item({ guestName, review, rating }) {

    return (
        <Box className='review'>
            <div className='review__heading'>
                <span className='review__title'>{guestName}</span>
                <span className='review__rating'>Рейтинг: {rating}</span>
            </div>
            <p className='review__info'>
                {review}</p>

        </Box>
    )
}