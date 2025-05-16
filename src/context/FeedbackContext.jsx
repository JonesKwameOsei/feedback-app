import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const API_URL = import.meta.env.DEV
    ? import.meta.env.VITE_API_URL
    : '/api';

  // Initialize from localStorage or API
  useEffect(() => {
    const loadFeedback = async () => {
      // First try to load from localStorage
      const localData = localStorage.getItem('feedbackItems');

      if (localData) {
        // If we have local data, use it
        setFeedback(JSON.parse(localData));
        setIsLoading(false);
      } else {
        // Otherwise fetch from API
        await fetchFeedback();
      }
    };

    loadFeedback();
  }, []);

  // Save to localStorage whenever feedback changes
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('feedbackItems', JSON.stringify(feedback));
    }
  }, [feedback, isLoading]);

  // Fetch feedback from API
  const fetchFeedback = async () => {
    try {
      const response = await fetch(`${API_URL}/feedback`);
      let data = [];
      if (response.headers.get('content-type')?.includes('application/json')) {
        data = await response.json();
        data.reverse();
      }
      setFeedback(data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching feedback:', error);
      setIsLoading(false);
    }
  };

  // Add feedback
  const addFeedback = async (newFeedback) => {
    try {
      const response = await fetch(`${API_URL}/feedback`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newFeedback)
      });

      let data = {};
      if (response.headers.get('content-type')?.includes('application/json')) {
        data = await response.json();
      } else {
        // If server doesn't respond with JSON, create our own data
        data = {
          ...newFeedback,
          id: Date.now()
        };
      }

      setFeedback([data, ...feedback]);
    } catch (error) {
      console.error('Error adding feedback:', error);
      // Still update UI even if API call fails
      const fallbackData = {
        ...newFeedback,
        id: Date.now()
      };
      setFeedback([fallbackData, ...feedback]);
    }
  };

  // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      try {
        // Try API call first
        await fetch(`${API_URL}/feedback/${id}`, { method: 'DELETE' });
      } catch (error) {
        console.error('Error deleting on server:', error);
      }

      // Update UI regardless of API success
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // Update feedback item
  const updateFeedback = async (id, updateItem) => {
    try {
      console.log(`Sending PUT request to ${API_URL}/feedback/${id}`, updateItem);
      const response = await fetch(`${API_URL}/feedback/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updateItem),
      });

      let data = {};
      if (response.headers.get('content-type')?.includes('application/json')) {
        data = await response.json();
      } else {
        // If server doesn't respond with JSON, create our own data
        data = {
          ...updateItem,
          id: id
        };
      }

      // Update UI with new data
      setFeedback(
        feedback.map((item) => (item.id === id ? data : item))
      );

      setFeedbackEdit({
        item: {},
        edit: false,
      });
    } catch (error) {
      console.error('Update error:', error);

      // Update UI even if server fails
      const updatedItem = {
        ...updateItem,
        id: id
      };

      setFeedback(
        feedback.map((item) => (item.id === id ? updatedItem : item))
      );

      setFeedbackEdit({
        item: {},
        edit: false,
      });
    }
  };

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

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
  );
};

export default FeedbackContext;