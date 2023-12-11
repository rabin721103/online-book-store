import { useEffect, useState } from "react";
import "./BookDetails.css";
import { useParams } from "react-router-dom";

import { addToCart, getBookById } from "../../services/starWarsCharater";

import { useQuery } from "@tanstack/react-query";
import ReviewList from "../components/review/ReviewList";
import { emitInfoToast } from "../../toastify/ToastEmitter";

function BookDetails() {
  const { id } = useParams();
  const [reviews, setReviews] = useState("");

  const { data } = useQuery({
    queryKey: ["getBooks"],
    queryFn: () => getBookById(id),
  });
  const userProfile = JSON.parse(localStorage.getItem("user"));

  const book = data?.data?.response;

  useEffect(() => {
    setReviews(book?.reviews);
  }, [book]);

  const cartHandler = async () => {
    const res1 = await addToCart(id);
    emitInfoToast(res1?.message);
    // window.alert(res1?.message);
  };

  return (
    <div className="container bootdey">
      <div className="col-md-12">
        <section className="panel" style={{ marginTop: "20px" }}>
          <div
            className="panel-body"
            style={{ display: "flex", marginLeft: "20px" }}
          >
            <div className="col-md-6" style={{ marginRight: "50px" }}>
              <div className="pro-img-details">
                <img src="https://picsum.photos/250/200" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="pro-d-title">{book?.title}</h4>
              <p>Author: {book?.author}</p>
              <div className="product_meta">
                <span className="posted_in">
                  {" "}
                  <strong>Genre: {book?.genre}</strong>
                </span>
              </div>
              <div className="m-bot15">
                {" "}
                <strong>Price : </strong>{" "}
                <span className="pro-price"> {book?.price}</span>
              </div>
              {userProfile && (
                <p>
                  <button
                    className="btn btn-round btn-danger"
                    onClick={cartHandler}
                    type="button"
                  >
                    <i className="fa fa-shopping-cart"></i> Add to Cart
                  </button>
                </p>
              )}
              <ReviewList
                bookId={book?.bookId}
                userProfile={userProfile}
                reviews={reviews}
                setReviews={setReviews}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BookDetails;
