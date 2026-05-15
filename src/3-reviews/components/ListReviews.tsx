import type { IReview } from "../interface/Ireview"
import Review from "./Review"


type ListReviewsProps = {
    reviews: IReview[]
}
export const ListReviews = ({reviews}: ListReviewsProps) => {
  return (
    <div>
      {
        reviews.map((review: IReview) => <Review review={review} />)
      }
    </div>
  )
}
