import './index.css';

import Box from '../box';
import Heading from '../heading';
import ListItem from '../list-item';
import baby from './baby.svg';
import car from './car.svg';
import plane from './plane.svg';
import dog from './dog.svg';
import service from './service.svg';
import wifi from './wifi.svg';
import helpman from './helpman.svg';
import pool from './pool.svg';
import gym from './gym.svg';
import breakfast from './breakfast.svg';




export default function Amenities({ title, hasPool,
    hasGym,
    hasFreeBreakfast,
    hasFreeWiFi,
    hasParkinge,
    hasPetsAllowed,
    hasAirportShuttle,
    hasConciergeService,
    hasRoomService,
    hasChildFriendly, }) {
    return (
        <Box>
            <div className='details'>
                <Heading children={title} />

                <div className='details__items'>



                    {hasGym ? <ListItem imageSrc={gym}>


                        <span>спортивний зал</span>


                    </ListItem> : ''}


                    {hasAirportShuttle ? <ListItem imageSrc={plane}>


                        <span>Трансфер до аеропорту</span>


                    </ListItem> : ''}



                    {hasPool ? <ListItem imageSrc={pool}>


                        <span>Басейн</span>


                    </ListItem> : ''}



                    {hasFreeBreakfast ? <ListItem imageSrc={breakfast}>


                        <span>Безкоштовний сніданок</span>


                    </ListItem> : ''}



                    {hasConciergeService ? <ListItem imageSrc={helpman}>


                        <span>Консьєрж-сервіс</span>


                    </ListItem> : ''}



                    {hasRoomService ? <ListItem imageSrc={service}>


                        <span>Обслуговування номерів</span>


                    </ListItem> : ''}



                    {hasPetsAllowed ? <ListItem imageSrc={dog}>


                        <span>Можна з домашніми тваринами</span>


                    </ListItem> : ''}


                    {hasFreeWiFi ? <ListItem imageSrc={wifi}>


                        <span>Безкоштовний Вай Фай</span>


                    </ListItem> : ''}


                    {hasChildFriendly ? <ListItem imageSrc={baby}>


                        <span>Підходить для дітей</span>


                    </ListItem> : ''}




                    {hasParkinge ? <ListItem imageSrc={car}>


                        <span>Безкоштовний паркінг</span>


                    </ListItem> : ''}
                </div>
            </div>
        </Box>
    )


}

