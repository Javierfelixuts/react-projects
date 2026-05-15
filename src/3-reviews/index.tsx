import './style.css';  
import reviews from './data';
import Review from "./components/Review";
import { useState } from 'react';
const ReviewsApp = () => {
  const [reviewIndex, setReviewIndex] = useState(0);  
  const back = () => {
      setReviewIndex((prev) => {
        if(reviewIndex <= 0) return reviews.length - 1;
        return prev - 1;
      });
  }
  const next = () => {
      setReviewIndex((prev) =>{
        if(reviewIndex >= reviews.length - 1) return 0;
        return prev + 1;
      });
  }

  const randomReview = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setReviewIndex(randomIndex);
  }
  return (
    <main>
      <div className='w-fit h-auto text-center'>
        <h3 className="text-4xl pb-2">Our Reviews</h3>
        <span className='bar mt-1 block w-11/12 h-[10px] bg-blue-400 my-0 mx-auto self-center'></span>
      </div>

      <Review review={reviews[reviewIndex]} back={back} next={next} randomReview={randomReview} />
    </main>
  )
}

export default ReviewsApp