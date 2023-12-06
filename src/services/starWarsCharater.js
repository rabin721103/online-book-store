import axiosInstance from "../../axiosInstance";

// export const getStarWarsCharacters = async (params) => {
//   const searchParams = new URLSearchParams(params);
//   return axiosInstance.get(`/people?${searchParams.toString()}`);
// };

// export const getStarWarsCharacterById = async (id) => {
//   return axiosInstance.get(`/people/${id}`);
// };

// export const addStarWarsCharacter = async (data) => {
//   return axiosInstance.post(`/people`, data);
// };

// export const updateStarWarsCharacter = async (id, data) => {
//   return axiosInstance.put(`/people/${id}`, data);
// };

export const getBooks = async () => {
  return axiosInstance.get(`/books/?page={pageNo}`);
};
export const getBookById = async (id) => {
  return axiosInstance.get(`/books/${id}`);
};

export const getUsers = async () => {
  return axiosInstance.get(`/admin/users`);
};

export const getAllFromCart = async () => {
  await axiosInstance
    .get("/cart")
    .then((res) => {
      const response = res?.data;
      if (response?.statusCode === 200) {
        localStorage.setItem("cart", JSON.stringify(response?.response || []));
      }
    })
    .catch(() => null);
};

export const addToCart = async (bookId) => {
  const response = await axiosInstance
    .post("/cart/add", bookId)
    .then((res) => res?.data)
    .catch(() => null);
  if (response?.success) {
    getAllFromCart();
  }
  return response;
};

export const editCart = async (cartId, quantity) => {
  const response = await axiosInstance
    .put(`/cart/update/${cartId}`, quantity)
    .then((res) => res?.data)
    .catch(() => null);

  if (response?.success) {
    getAllFromCart();
  }
  return response;
};

export const deleteBookFromCart = async (cartId) => {
  const response = await axiosInstance
    .delete(`/cart/delete/${cartId}`)
    .then((res) => {
      if (res?.data.success) {
        getAllFromCart();
      }
      return res?.data;
    })
    .catch(() => null);
  return response;
};
