import { Formik, Form, Field } from "formik";
import React, { useEffect, useState } from "react";
import { Button, Label } from "reactstrap";
import axiosInstance from "../../../axiosInstance";
import { useNavigate } from "react-router-dom";

function AddUser({ editUser }) {
  const navigate = useNavigate();
  const [form, setform] = useState({
    username: "",
    password: "",
    email: "",
    role: "USER",
  });

  useEffect(() => {
    if (editUser) {
      setform((prev) => ({ ...prev, ...editUser }));
    }
  }, [editUser]);
  const forSubmit = async (values, { resetForm }) => {
    try {
      if (editUser) {
        await axiosInstance.put(`/user/${editUser?.userId}`, values);
      } else {
        await axiosInstance.post("/user/", values);
      }
      navigate("/admin/userdashboard");
      // Reset the form after successful submission
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <Formik initialValues={form} onSubmit={forSubmit} enableReinitialize>
        <Form>
          <div>
            <Label
              for="exampleAbc"
              style={{
                marginTop: "80px",
              }}
            >
              Add/Manage User
            </Label>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">User Name</label>
            <Field
              className="form-control"
              name="username"
              placeholder="Enter Username"
              type="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Password</label>
            <Field
              className="form-control"
              name="password"
              placeholder="Enter Password"
              type="password"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">E-mail</label>

            <Field
              className="form-control"
              name="email"
              placeholder="Enter E-mail"
              type="email"
            />
          </div>
          <div>
            <Label htmlFor="exampleInputEmail1">Role</Label>
            <Field className="form-control" name="role" as="select">
              <option>USER</option>
              <option>SUPERVISOR</option>
              <option>ADMIN</option>
            </Field>
          </div>
          <div>
            <Button color="primary" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default AddUser;
