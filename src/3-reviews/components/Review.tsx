import type { IReview } from "../interface/Ireview";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
type ReviewProps = {
  review: IReview;
  back?: () => void;
  next?: () => void;
  randomReview?: () => void;
};
const Review = ({ review, back, next, randomReview }: ReviewProps) => {
  return (
    <article
      key={review.id}
      className="w-[500px] p-5 mt- shadow-md rounded-md text-center"
    >
      <div className="profile relative w-fit mx-auto">
        <div className="quote text-white bg-blue-400 rounded-full w-fit">
          <FaQuoteRight />
        </div>
        <div className="img-profile">
          <img
            className="w-[100px] h-[100px] object-cover rounded-full mx-auto"
            src={review.image}
            alt={review.name}
          />
        </div>
      </div>
      <h3 className="text-3xl font-bold">{review.name}</h3>
      <p>
        {review.text.length > 100
          ? review.text.slice(0, 100) + "..."
          : review.text}
      </p>

      <div className="buttons py-5">
        <button className="text-blue-400 " onClick={back}>
          {" "}
          <FaChevronLeft />{" "}
        </button>
        <button className="text-blue-400 ml-2" onClick={next}>
          {" "}
          <FaChevronRight />
        </button>
      </div>

      <button
        className="mt-5 px-2 py-1 border border-blue-400 text-blue-400 bg-blue-100 rounded"
        onClick={randomReview}
      >
        Surprise Me
      </button>
    </article>
  );
};

export default Review;
