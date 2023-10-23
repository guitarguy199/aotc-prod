import './Header.css';
import aotcSm from '../assets/aotc-sm.png';
import aotcLg from '../assets/aotc-lg.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useMatch, useResolvedPath, Link } from 'react-router-dom';

const Header = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav className='header'>
            <div className='temp'>
            <div className='logo'>
            <Link to="/">
            <img src={aotcLg} className='logo-lg' />
            </Link>
            <img src={aotcSm} className='logo-sm' />
            <div className='socials'>
            <Link to="https://www.tiktok.com/@getaheadofthecurve">
              <FontAwesomeIcon icon={faTiktok} size="2xl" />
            </Link>

            <Link to="https://instagram.com/getaheadofthecurve">
              <FontAwesomeIcon icon={faInstagram} size="2xl" />
            </Link>
            
        </div>
        <div className='header-text'>
            <h3>Ahead of the Curve</h3>
            <h4>Create - Collaborate - Be Kind</h4>
            <h4>TEST</h4>
        </div>
            </div>

            <button className='hamburger' aria-label="menu" type="button" onClick={() => setIsNavExpanded(!isNavExpanded)}>
                {isNavExpanded ? 
                <FontAwesomeIcon icon={faXmark} size="2x" /> :
                <FontAwesomeIcon icon={faBars} size="2x" />
                }
            </button>
        </div>
        
        
        <ul className={isNavExpanded ? 'nav-links expanded' : 'nav-links'}
            onClick={() => setIsNavExpanded(!isNavExpanded)}
            >
            <CustomLink to="/">Home</CustomLink>
            <CustomLink to="/ai-training-for-realtors">AI Training For Realtors</CustomLink>
            <CustomLink to="/book-a-consultation">Book a Consultation</CustomLink>
            <CustomLink to="/subscribe">Newsletter</CustomLink>
            </ul>
        </nav>
    )
}

// eslint-disable-next-line react/prop-types
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true})
    return (
      <li className={isActive ? "active" : "" }>
        <Link to={to} aria-label={children} {...props}>
          {children}
        </Link>
      </li>
    )
  }

export default Header;