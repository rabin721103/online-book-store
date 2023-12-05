import { useEffect, useState } from "react";
import axiosInstance from "../../../axiosInstance";

const StarRating = ({ bookId, prevReview, setReviews, setEditModel }) => {
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
      window.alert("Added!!!");
      setReviews(response?.data?.response);
      setEditModel && setEditModel(false);
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
    <>
      <h2>Rate Here</h2>
      <div className="star" style={{ padding: "10px" }}>
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className={`fa fa-star ${index < rating ? "checked" : ""}`}
            onClick={() => setRating(index)}
          ></span>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <h2>Your Review</h2>
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
    </>
  );
};

export default StarRating;
