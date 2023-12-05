import { useEffect, useState } from "react";
import StarRating from "./StarRating";

const ReviewList = ({
  reviews,
  setReviews,
  profile,
  bookId,
  setAverageRating,
  setTotalNumRating,
}) => {
  const [reviewList, setReviewList] = useState([]);
  const [prevReview, setPrevReview] = useState("");

  const [editModel, setEditModel] = useState(false);

  const handleReviews = () => {
    let totalNumRate = 0;
    let totalRate = 0;

    let otherReviews = [];

    reviews?.forEach((review) => {
      totalNumRate += 1;
      totalRate += review?.rating;
      if (review?.userId === profile?.userId) {
        setPrevReview(review);
      } else {
        otherReviews.push(review);
      }
    });

    setReviewList(otherReviews);
    setAverageRating(totalRate / totalNumRate);
    setTotalNumRating(totalNumRate);
  };

  useEffect(() => {
    if (reviews) handleReviews();
  }, [reviews]);

  return (
    <div className="container-fluid px-1 mx-auto">
      <br></br>
      <h4 className="ms-2">Rating and Reviews</h4>

      {prevReview ? (
        <div>
          <button
            style={{ marginTop: "10px" }}
            type="button"
            onClick={() => setEditModel(true)}
            className="btn btn-primary ms-2"
          >
            Edit Your Review
          </button>
          {editModel ? (
            <StarRating
              bookId={bookId}
              prevReview={prevReview}
              setReviews={(data) => setReviews([...reviewList, data])}
              setEditModel={setEditModel}
            />
          ) : (
            <div className="col-sm-10 border border-success rounded-1 mt-4">
              <StarRating review={prevReview} />
            </div>
          )}
        </div>
      ) : (
        <>
          {profile && (
            <StarRating
              bookId={bookId}
              setReviews={(data) => setReviews([...reviewList, data])}
            />
          )}
        </>
      )}

      <div className="col-sm-10">
        {/* <div className="review-block"> /}
          {reviewList &&
            reviewList?.map((review, idx) => (
              <ReviewCard key={idx} review={review} />
            ))}
          {/ </div> */}
      </div>
    </div>
  );
};

export default ReviewList;
