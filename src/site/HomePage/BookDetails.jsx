import { useEffect, useState } from "react";
import "./BookDetails.css";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";
import { addToCart } from "../../services/starWarsCharater";

import StarRating from "../components/StarRating";

function BookDetails() {
  const { id } = useParams();
  const [bookdetails, setBookDetails] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await axiosInstance.get(`/books/${id}`);
        setBookDetails(response?.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchBookDetails();
  }, [id]);

  const cartHandler = async () => {
    const res1 = await addToCart(id);
    window.alert(res1?.message);
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
              <h4 className="pro-d-title">{bookdetails?.response?.title}</h4>
              <p>Author: {bookdetails?.response?.author}</p>
              <div className="product_meta">
                <span className="posted_in">
                  {" "}
                  <strong>Genre: {bookdetails?.response?.genre}</strong>
                </span>
              </div>
              <div className="m-bot15">
                {" "}
                <strong>Price : </strong>{" "}
                <span className="pro-price">
                  {" "}
                  {bookdetails?.response?.price}
                </span>
              </div>
              <p>
                <button
                  className="btn btn-round btn-danger"
                  onClick={cartHandler}
                  type="button"
                >
                  <i className="fa fa-shopping-cart"></i> Add to Cart
                </button>
              </p>
              <StarRating bookId={id} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BookDetails;
