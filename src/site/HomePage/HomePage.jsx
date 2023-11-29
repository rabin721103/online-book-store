import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import axiosInstance from "../../../axiosInstance";
import { Col } from "reactstrap";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axiosInstance.get("/books/");
        const data = response?.data?.response;
        setBooks(data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };
    fetchBooks();
  }, []);

  //localo cart fet5ch json
  return (
    <div>
      <h3 style={{ marginLeft: "40px", marginTop: "10px" }}>Latest Books</h3>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {books.map((book, index) => (
          <Col key={index} sm={12} md={6} lg={4} xl={3}>
            <Cards book={book} carts={[]} />
          </Col>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
