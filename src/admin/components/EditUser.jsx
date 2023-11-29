import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";
import AddUser from "./AddUser";

function EditUser() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [user, setUser] = useState(null);

  const getUser = async () => {
    const response = await axiosInstance
      .get(`/admin/users/${id}`)
      .then((res) => res?.data)
      .catch(() => null);

    if (!response) {
      navigate("/admin/userdashboard");
    } else {
      console.log(response);
      setUser(response?.response);
    }
  };

  useEffect(() => {
    if (id) {
      getUser();
    } else {
      navigate("/admin/userdashboard");
    }
  }, [id]);
  if (user) return <AddUser editUser={user} />;
}

export default EditUser;
