import './index.css';

import Box from '../box';
import Heading from '../heading';
import ListItem from '../list-item';
import { Fragment } from 'react';
export default function Attractions({ title, list }) {

    return (


        <Box className='attraction'>
            <Heading border children={title} />

            <div className='attraction__list'>
                {list.map(({ id, ...rest }) => (
                    <Fragment key={id}>
                        <Item {...rest} />
                    </Fragment>
                ))}

            </div>
        </Box>
    )


}




function Item({ name, link }) {

    return (
        <ListItem>
            <a className='attraction__item' href={link}>{name}</a>


        </ListItem>
    )
}