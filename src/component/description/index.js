import './index.css';

import Box from '../box';
import Heading from '../heading';

export default function Description({ title, children }) {

    return (
        <div className='description'>
            <Heading children={title} />
            <Box>
                <p className='description__text'>
                    {children}
                </p>
            </Box>
        </div>
    )


}


