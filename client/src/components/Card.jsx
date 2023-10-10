/* eslint-disable react/prop-types */
import './Card.css';

const Card = ({ children }) => {
    return (
        <article className='card'>
            {children}
        </article>
    )
}

export default Card;