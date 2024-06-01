import './index.css';

export default function Title({
    children,
    border
}) {
    return (

        <span className={`heading ${border ? "heading--border" : ""}`}>
            {children}
        </span>

    )
}