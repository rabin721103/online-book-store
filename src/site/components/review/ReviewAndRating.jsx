import { useEffect, useState } from "react";
import axiosInstance from "../../../../axiosInstance";
import Rating from "./Rating";
import { emitInfoToast } from "../../../toastify/ToastEmitter";

const ReviewAndRating = ({ bookId, prevReview, setReviews, setEditModel }) => {
  const [rating, setRating] = useState(0); // Initial rating
  const [comment, setComment] = useState("");

  const handleSubmit = async () => {
    const res = await axiosInstance.post(`/reviews`, {
      bookId,
      rating,
      comment,
    });
    const response = JSON.parse(JSON.stringify(res));

    if (response?.data?.success) {
      setReviews(response?.data?.response);
      setEditModel && setEditModel(false);
      console.log(response);
      emitInfoToast(response?.message);
      console.log("thansa");
      // window.alert("Added!!!");
    } else {
      window.alert("Error");
    }
  };
  useEffect(() => {
    if (prevReview) {
      setComment(prevReview?.comment);
      setRating(prevReview?.rating);
    }
  }, [prevReview]);

  return (
    <div>
      <Rating rating={rating} setRating={setRating} />
      <form onSubmit={handleSubmit}>
        <h2>Your comment</h2>
        <label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            cols={75}
          />
        </label>
        <br />
        <button className="sub" type="button" onClick={handleSubmit}>
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewAndRating;
