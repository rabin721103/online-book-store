import React, { useEffect, useState } from "react";
import { Button, Label } from "reactstrap";
import axiosInstance from "../../../axiosInstance";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

function AddBook({ editBook }) {
  const navigate = useNavigate();
  const [form, setform] = useState({
    title: "",
    author: "",
    genre: "",
    price: "",
    availability: "False",
  });

  useEffect(() => {
    if (editBook) {
      setform((prev) => ({ ...prev, ...editBook }));
    }
  }, [editBook]);

  const formikSubmit = async (values, { resetForm }) => {
    try {
      if (editBook) {
        await axiosInstance.put(`/books/${editBook?.bookId}`, values);
      } else {
        await axiosInstance.post("/books/", values);
      }
      navigate("/admin/bookdashboard");
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Formik initialValues={form} onSubmit={formikSubmit} enableReinitialize>
        <Form>
          <div>
            <Label
              for="exampleAbc"
              style={{
                marginTop: "80px",
              }}
            >
              Add/Manage Books
            </Label>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Book Title</label>
            {/* <Label for="exampleUsername">Usename</Label> */}
            <Field
              //   id="exampleUsername"
              className="form-control"
              name="title"
              placeholder="Enter Book Title"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Author</label>
            <Field
              className="form-control"
              name="author"
              placeholder="Enter Author"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Genre</label>

            <Field
              className="form-control"
              name="genre"
              placeholder="Enter Book Genre"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Price</label>

            <Field
              className="form-control"
              name="price"
              placeholder="Enter Book Price"
              type="number"
            />
          </div>
          <div>
            <Label htmlFor="exampleInputEmail1">Avalability</Label>
            <Field className="form-control" name="availability" as="select">
              <option>True</option>
              <option>False</option>
            </Field>
          </div>
          <div>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default AddBook;
