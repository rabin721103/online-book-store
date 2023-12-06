function Rating({ rating, setRating }) {
  return (
    <div className="star" style={{ padding: "10px" }}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`fa fa-star ${index < rating ? "checked" : ""}`}
          onClick={() => setRating(index + 1)}
        ></span>
      ))}
    </div>
  );
}

export default Rating;
