// // api/feedback.js
// export default function handler(req, res) {
//   // Sample static data
//   const feedbackData = [
//     {
//       "id": "1",
//       "rating": 7,
//       "text": "The new UI is much more intuitive and responsive than before!"
//     },
//     {
//       "id": "2",
//       "rating": 8,
//       "text": "This tool has completely transformed our workflow - worth every penny!"
//     },
//     {
//       "id": "3",
//       "rating": 10,
//       "text": "Customer service was exceptional - they resolved my issue within minutes"
//     }
//   ];

//   // Handle different HTTP methods
//   switch (req.method) {
//     case 'GET':
//       res.status(200).json(feedbackData);
//       break;
//     case 'POST': {
//       // In a real app, you'd save the data here
//       const newFeedback = {
//         id: Date.now(),
//         rating: req.body.rating,
//         text: req.body.text
//       };
//       res.status(201).json(newFeedback);
//       break;
//     }
//     default:
//       res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

// /api/feedback.js
import { feedback } from './data.js';

export default function handler(req, res) {
  // Get method type
  const { method } = req;

  // Handle GET request - return all feedback
  if (method === 'GET') {
    return res.status(200).json(feedback);
  }

  // Handle POST request - add new feedback
  if (method === 'POST') {
    const newFeedback = {
      id: Date.now(),
      rating: req.body.rating,
      text: req.body.text
    };

    // Add to our "database"
    feedback.unshift(newFeedback);

    return res.status(201).json(newFeedback);
  }

  // Method not supported
  return res.status(405).json({ message: `Method ${method} not allowed` });
}