import React, { useState } from 'react';
import './Review.css'; 
import Lottie from 'lottie-react';
// import Reviewanimi from '../reviewanimi.json'; // Corrected file name and import


const Review = () => {
  const [review, setReview] = useState({
    rating: '',
    comment: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      console.log('Submitting review:', review);
      setSubmitted(true);
      setReview({
        rating: '',
        comment: ''
      });
    }, 1000);
  };

  return (
    <div className="review-form-container">
      <h2 className='rrr'>Leave a Review ::</h2>
      <br/>
      {submitted ? (
        <div className="review-success-message">
          <p>Thank you for your review!</p>
          <p>We appreciate your feedback.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Comment:</label>
            <textarea 
              name="comment" 
              className='comment'
              value={review.comment} 
              onChange={handleChange}
              rows={4}
              placeholder="Write your review here..."
              required 
            />
          </div>
          <div className='btn'><button type="submit" className="submit-button">Submit Review</button></div>
        </form>
           
      )}
      <div className="animation-container">
        {/* <Lottie animationData={Reviewanimi} /> Corrected animation data prop */}
      </div>
    </div>
    
  );
};

export default Review;
