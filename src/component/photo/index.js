import './index.css'


export default function Photo({ height, width, src, name, style }) {
    return <img style={style} width={width} height={height} className='image' alt={name} src={src}></img>
}