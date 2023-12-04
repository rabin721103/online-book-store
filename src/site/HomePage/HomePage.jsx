import { useEffect, useState } from "react";
import Cards from "../components/Cards";
import axiosInstance from "../../../axiosInstance";
import { Col } from "reactstrap";
import { Pagination } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [queryParams, setQueryParams] = useSearchParams();
  const [totalPages, setTotalPages] = useState(1);

  const fetchBooks = async (page) => {
    try {
      const response = await axiosInstance.get(`/books/?page=${page}`);
      const data = response?.data;
      setBooks(data?.response);
      setTotalPages(data?.totalPages);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks(queryParams.get("page") || 1);
  }, [queryParams]);

  const handlePageChange = (pageNumber) => {
    setQueryParams({ page: pageNumber });
  };

  const handlePrevClick = () => {
    const pageNo = queryParams.get("page");
    if (pageNo > 1) {
      setQueryParams({ page: pageNo - 1 });
    }
  };

  const handleNextClick = () => {
    const pageNo = parseInt(queryParams.get("page"));

    if (pageNo < totalPages) {
      setQueryParams({ page: pageNo + 1 });
    }
  };

  //local cart fetch json
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
      <Pagination style={{ float: "right" }}>
        <Pagination.Prev onClick={handlePrevClick} />
        {Array.from({ length: totalPages }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === queryParams.get("page")}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={handleNextClick} />
      </Pagination>
    </div>
  );
};

export default HomePage;
