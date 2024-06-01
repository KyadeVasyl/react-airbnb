import './index.css';

import Box from '../box';
import Heading from '../heading';
import ListItem from '../list-item';
import guests from './guests.svg';
import beds from './beds.svg';
import bedrooms from './bedrooms.svg';
import baths from './baths.svg';


export default function AddInfo({ title, data }) {
    return (
        <Box>
            <div className='details'>
                <Heading children={title} />

                <div className='details__items'>
                    <ListItem imageSrc={guests}>


                        <span>{data.guests} </span>
                        <span>гості</span>


                    </ListItem>
                    <ListItem imageSrc={bedrooms}>


                        <span>{data.bedrooms} </span>
                        <span>спальня</span>


                    </ListItem>
                    <ListItem imageSrc={beds}>


                        <span>{data.beds} </span>
                        <span>ліжко</span>


                    </ListItem>
                    <ListItem imageSrc={baths}>


                        <span>{data.baths} </span>
                        <span>Ванна кімната</span>


                    </ListItem>


                </div>
            </div>
        </Box>
    )


}

