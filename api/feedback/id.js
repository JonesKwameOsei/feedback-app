// /api/feedback/[id].js
import { feedback } from '../data.js';

export default function handler(req, res) {
  const { method } = req;
  const { id } = req.query;
  const feedbackId = parseInt(id);

  // Find the feedback item
  const feedbackIndex = feedback.findIndex(item => item.id === feedbackId);

  // If feedback not found
  if (feedbackIndex === -1) {
    return res.status(404).json({ message: 'Feedback not found' });
  }

  // Handle DELETE request
  if (method === 'DELETE') {
    // Remove from our "database"
    const deletedFeedback = feedback.splice(feedbackIndex, 1)[0];
    return res.status(200).json(deletedFeedback);
  }

  // Handle PUT request - update feedback
  if (method === 'PUT') {
    const updatedFeedback = {
      ...feedback[feedbackIndex],
      ...req.body
    };

    // Update in our "database"
    feedback[feedbackIndex] = updatedFeedback;

    return res.status(200).json(updatedFeedback);
  }

  // Method not supported
  return res.status(405).json({ message: `Method ${method} not allowed` });
}