import './styleFormasComplejas.css'

const FormasComplejas = () => {
    return (
        <div className="container">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 100"
                className="green-shape"
            >
                <path d="M0,0 L100,0 L80,100 L0,80 Z" fill="#a5ff00" />
            </svg>
            <div className="content">
                <h1>BE YOU</h1>
                <p>Infiltrator</p>
            </div>
        </div>
    )
}

export default FormasComplejas