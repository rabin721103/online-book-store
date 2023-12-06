import StaticRating from "./StaticRating";

const ReviewCard = ({ review }) => {
  return (
    <div className="row review-block ms-2 mt-4">
      <div className="col-sm-3">
        <img
          src="http://dummyimage.com/60x60/666/ffffff&text=No+Image"
          className="img-rounded"
        />
        <div className="">
          <p>{review?.username}</p>
        </div>
      </div>
      <div className="col-sm-9">
        <div className="review-block-rate">
          <StaticRating rating={review?.rating} />
        </div>
        <div className="review-block-date">
          {new Date(review?.date).toLocaleString()}
        </div>
        <h5>{review?.comment}</h5>
      </div>
    </div>
  );
};

export default ReviewCard;
