import { useEffect, useMemo, useState } from "react";
import DataTable from "../components/DataTable";
import { useNavigate, useSearchParams } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";
import { Pagination } from "react-bootstrap";

const BookDashboard = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
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

  const columns = useMemo(() => {
    return [
      {
        accessorKey: "bookId",
        header: "BookId",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "title",
        header: "Title",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "author",
        header: "Author",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "genre",
        header: "Genre",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "price",
        header: "Price",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "availability",
        header: "Availability",
        cell: ({ getValue }) => {
          const isAvailable = getValue();
          return <div>{String(isAvailable)}</div>;
        },
      },
      {
        accessorKey: "actions",
        header: "Actions",
        cell: ({ row }) => {
          const bookId = row.original.bookId;

          const handleEdit = () => {
            console.log("Edit clicked for ID:", bookId);
            navigate(`/admin/editbook/${bookId}`);
          };

          const handleDelete = () => {
            console.log("Delete clicked for ID:", bookId);
            const confirmDelete = window.confirm(
              "Are you sure you want to delete this user?"
            );
            if (confirmDelete) {
              const response = axiosInstance
                .delete(`/books/${bookId}`)
                .then((res) => {
                  res?.data;
                })
                .catch(() => null);
              if (response?.success) {
                const data = response?.data;
                const books = data.filter((item) => item.bookId !== bookId);
                setBooks(books);
              }
            }
          };

          return (
            <div>
              <button
                className="btn btn-primary"
                onClick={() => handleEdit(bookId)}
              >
                Update
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(bookId)}
              >
                Delete
              </button>
            </div>
          );
        },
      },
    ];
  }, []);
  return (
    <div>
      <DataTable columns={columns} data={books ?? []} />
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

export default BookDashboard;
