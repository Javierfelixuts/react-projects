import type { IReview } from "../interface/Ireview";

type ReviewProps = {
  review: IReview;
  back?: () => void;
  next?: () => void;
  randomReview?: () => void;
};
const Review = ({ review, back, next, randomReview }: ReviewProps) => {
  return (
    <article key={review.id} className="w-[500px] p-5 mt- shadow-md rounded-md text-center">
      <img
        className="w-[100px] h-[100px] object-cover rounded-full mx-auto"
        src={review.image}
        alt={review.name}
      />
      <h3>{review.name}</h3>
      <p>{review.text.length > 100 ? review.text.slice(0, 100) + '...' : review.text}</p>

      <div className="buttons py-5">
        <button onClick={back}> a </button>
        <button onClick={next}>  b</button>
      </div>

      <button className="mt-5 px-2 py-1 border border-blue-400 text-blue-400 bg-blue-100 rounded" onClick={randomReview}>
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
