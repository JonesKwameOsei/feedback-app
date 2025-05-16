// /api/feedback/[id].js
import { feedback } from './data.js';

export default function handler(req, res) {
  const { method } = req;
  const id = req.query;
  const feedbackId = id.toString();



  // Debug information
  console.log('Request method:', method);
  console.log('ID from query:', id);
  console.log('Request body:', req.body);


  // Find the feedback item
  const feedbackIndex = feedback.findIndex(item => item.id.toString() === feedbackId);

  // If feedback not found
  if (feedbackIndex === -1) {
    console.log('Feedback not found with ID:', feedbackId);
    return res.status(404).json({ message: 'Feedback not found', id: id });
  }

  console.log('Found feedback at index:', feedbackIndex);

  // Handle DELETE request
  if (method === 'DELETE') {
    // Remove from our "database"
    const deletedFeedback = feedback.splice(feedbackIndex, 1)[0];
    console.log('Deleted feedback:', deletedFeedback);
    return res.status(200).json(deletedFeedback);
  }

  // Handle PUT request - update feedback
  if (method === 'PUT') {
    try {
      const updatedFeedback = {
        ...feedback[feedbackIndex],
        ...req.body
      };

      console.log('Updating feedback to:', updatedFeedback);
      // Update in our "database"
      feedback[feedbackIndex] = updatedFeedback;

      return res.status(200).json(updatedFeedback);
    } catch (error) {
      console.error('Error in PUT processing:', error);
      return res.status(500).json({ message: 'Error processing PUT request', error: error.message });
    }
  }

  // Method not supported
  return res.status(405).json({ message: `Method ${method} not allowed` });
}