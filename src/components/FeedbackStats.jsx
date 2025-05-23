import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);
  // Calculate ratings avg
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating
  }, 0) / feedback.length;

  average = isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} {feedback.length === 1 || feedback.length === 0 ? 'Review' : 'Reviews'}</h4>
      {/* <h4>Average Rating: {isNaN(feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length) ? 0 : feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length}</h4> */}

      <h4>Average Rating: {average}</h4>
    </div>
  );
}

export default FeedbackStats;