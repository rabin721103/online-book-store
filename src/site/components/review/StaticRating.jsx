function StaticRating({ rating }) {
  return (
    <div className="star" style={{ padding: "10px" }}>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`fa fa-star ${index < rating ? "checked" : ""}`}
        ></span>
      ))}
    </div>
  );
}

export default StaticRating;
