import Card from "../components/shared/Card";
import { Link } from "react-router";
import { FaHome } from "react-icons/fa";
import '../index.css';

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <p style={{
          marginTop: '2rem',
          color: '#ff6a95',
          textAlign: 'center',
          fontSize: '1.3rem'
        }}
        >Version: 1.0.0</p>

        <p>
          <Link to={{
            pathname: '/',
            search: '?sort=name',
          }}>
            <FaHome
              size={30}
              title="Back to Home"
              style={{ color: '#ff6a95' }}
            /> 
          </Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage;