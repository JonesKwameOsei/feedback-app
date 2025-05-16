import { FaStar, FaTimes, FaEdit } from "react-icons/fa";
import { useContext } from "react";
import Card from "./shared/Card";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackItem = ({ item }) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  const renderStars = (rating) => {
    return Array.from({ length: rating },
      (_, index) => (
        <FaStar key={index} className="rating-star" />
      )
    )
  }

  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button
        onClick={() => deleteFeedback(item.id)}
        className="close">
        <FaTimes color="purple" />
      </button>
      <button
        onClick={() => editFeedback(item)}
        className="edit">
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
      <div className="stars-display">{renderStars(item.rating)}</div>
    </Card>
  )
}

export default FeedbackItem