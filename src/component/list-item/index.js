import './index.css';



export default function listItem({ children, title, imageSrc, style }) {
    return (
        <li className='list-item'>
            {imageSrc && <img alt='icon' height={24} width={24} src={imageSrc} />}
            <div className='list-item__block'>
                {title && <strong className='list-item__title'>{title}</strong>}
                <div style={style} className='list-item__content'>{children}</div>
            </div>
        </li>
    )



}