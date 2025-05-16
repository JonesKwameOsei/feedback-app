import { createContext, useState, useEffect } from "react";


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback ] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  
  const API_URL = import.meta.env.DEV
    ? import.meta.env.VITE_API_URL
    : '/api';
  
  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`${API_URL}/feedback`);
    let data = [];
    if (response.headers.get('content-type')?.includes('application/json')) {
      data = await response.json();
      data.reverse();
    }
    setFeedback(data);
    setIsLoading(false);
  }

  // Add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch(`${API_URL}/feedback`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFeedback)
    });
    let data = {};
    if (response.headers.get('content-type')?.includes('application/json')) {
      data = await response.json();
    }
    setFeedback([data, ...feedback]);
  }
  
  // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`${API_URL}/feedback/${id}`, { method: 'DELETE' });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  // Update feedback item
  const updateFeedback = async (id, updateItem) => {
    const response = await fetch(`${API_URL}/feedback/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateItem),
    });
    let data = {};
    if (response.headers.get('content-type')?.includes('application/json')) {
      data = await response.json();
    }
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
    );
  }

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider value={{
      feedback,
      feedbackEdit,
      isLoading,
      addFeedback,
      deleteFeedback,
      editFeedback,
      updateFeedback,
    }}>
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext;
