import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";
import AddBook from "./AddBook";

function EditBook() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [book, setBook] = useState(null);

  const getBook = async () => {
    const response = await axiosInstance
      .get(`/books/${id}`)
      .then((res) => res?.data)
      .catch(() => null);
    if (!response) {
      navigate("/admin/bookdashboard");
    } else {
      console.log(response);
      setBook(response?.response);
    }
  };

  useEffect(() => {
    if (id) {
      getBook();
    } else {
      navigate("/admin/bookdashboard");
    }
  }, [id]);
  if (book) return <AddBook editBook={book} />;

  return <div>EditBook</div>;
}

export default EditBook;
