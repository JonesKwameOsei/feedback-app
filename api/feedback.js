// api/feedback.js
export default function handler(req, res) {
  // Sample static data
  const feedbackData = [
    {
      "id": "1",
      "rating": 7,
      "text": "The new UI is much more intuitive and responsive than before!"
    },
    {
      "id": "2",
      "rating": 8,
      "text": "This tool has completely transformed our workflow - worth every penny!"
    },
    {
      "id": "3",
      "rating": 10,
      "text": "Customer service was exceptional - they resolved my issue within minutes"
    }
  ];

  // Handle different HTTP methods
  switch (req.method) {
    case 'GET':
      res.status(200).json(feedbackData);
      break;
    case 'POST': {
      // In a real app, you'd save the data here
      const newFeedback = {
        id: Date.now(),
        rating: req.body.rating,
        text: req.body.text
      };
      res.status(201).json(newFeedback);
      break;
    }
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}