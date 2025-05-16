import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './components/Header';
import FeedbackList from './components/FeedBackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';
import './index.css';

function App() {
  return (
    <FeedbackProvider>
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            path='/'
            element={
              <>
              <FeedbackForm />
              <FeedbackStats />
              <FeedbackList />
              </>
            }
          />
          <Route path='/about' element={<AboutPage />} />
        </Routes>

        <AboutIconLink />
      </div>
    </Router>
    </FeedbackProvider>
  );
}

export default App;
