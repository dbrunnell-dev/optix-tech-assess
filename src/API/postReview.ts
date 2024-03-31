export const postReview = async (movieId: string, review: string): Promise<void> => {
    try {
      const response = await fetch('http://localhost:3000/submitReview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ movieId, review }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to post review');
      }
  
      console.log('Review posted successfully');
    } catch (error) {
      console.error('Error posting review:', error.message);
      throw new Error('Failed to post review');
    }
  };