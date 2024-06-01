import './index.css';

import Heading from '../heading';
import Photo from '../photo';


export default function Contact({
    name,
    image,
    responseRate,
    responseTime,
    info,
    phone,
}) {
    return (
        <div className='contact'>

            <div className='contact__block'><Photo style={{ borderRadius: '50%' }} src={image} width={80} height={80} />
                <div className='contact__info'>


                    <Heading children={name} />
                    <div className='contact__sub-block'>
                        <span className='contact__sub-value'>{phone} </span>
                        <span className='contact__sub-value'>{responseTime} протягом години</span>
                        <span className='contact__sub-value'>{responseRate} відсотків швідкості відгуків</span>

                    </div>
                </div>

            </div>
            <p>{info}</p>
        </div>
    )
}