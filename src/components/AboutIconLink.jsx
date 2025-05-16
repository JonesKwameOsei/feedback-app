import { FaQuestion } from "react-icons/fa";
import { Link, useLocation } from "react-router";
import '../index.css';

function AboutIconLink() {
  const location = useLocation();

  // Do not render icon if the current path is '/about'.
  if (location.pathname === '/about') {
    return null;
  }

  return (
    <div className="about-link">
      <Link to={{
        pathname: '/about',
        search: '?sort=name',
      }}>
        <FaQuestion
          size={30}
          title="Click to About Page"
          style={{ color: '#ff6a95' }}
        />
      </Link>
      
    </div>
  )
}

export default AboutIconLink;