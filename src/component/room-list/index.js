import './index.css';

import Box from '../box';
import Heading from '../heading';
import { Fragment } from 'react';

export default function RoomList({ list }) {

    return (
        <div className='room__block'>
            <Heading children="Типи номерів" />

            <div className='room__list'>
                {list.map(({ id, ...rest }) => (
                    <Fragment key={id}>
                        <Item {...rest} />
                    </Fragment>
                ))}
            </div>
        </div>
    )


}



function Item({ type, pricePerNight, currency, capacity }) {

    return (
        <Box className='room'>
            <span className='room__title'>{type}</span>
            <span className='room__info'>Кількість гостей: {capacity}</span>
            <span className='room__price'>
                {currency}
                {pricePerNight}</span>

        </Box>
    )
}