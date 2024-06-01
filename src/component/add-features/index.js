import './index.css';

import Box from '../box';
import Heading from '../heading';
import ListItem from '../list-item';
export default function AddFeatures({ title, data }) {

    return (


        <Box className='description'>
            <Heading border children={title} />


            <ListItem title="Правила Дому">
                {data.house_rules}
            </ListItem>

            <ListItem title="Політика скасування">
                {data.cancellation_policy}
            </ListItem>


            <ListItem title="Місцевий транспорт">
                {data.local_transportation}
            </ListItem>


            <ListItem title="Мова хоста">
                {data.host_languages.join(', ')}
            </ListItem>

            <ListItem title="Спеціальні пропозиції">
                {data.special_offers}
            </ListItem>
        </Box>
    )


}


