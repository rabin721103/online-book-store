import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import DataTable from "../components/DataTable";
import { getBooks } from "../../services/starWarsCharater";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../axiosInstance";

const BookDashboard = () => {
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getBooks"],
    queryFn: () => getBooks(),
    onError: (error) => {
      console.error("Error fetching books:", error);
    },
  });

  const columns = useMemo(() => {
    return [
      {
        accessorKey: "bookId",
        header: "bookId",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "title",
        header: "title",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "author",
        header: "author",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "genre",
        header: "genre",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "price",
        header: "price",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "availability",
        header: "availability",
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
              axiosInstance
                .delete(`/books/${bookId}`)
                .then(() => {
                  refetch();
                  console.log("Delete successful for ID:", bookId);
                  window.alert("Successfully deleted");
                })
                .catch((error) => {
                  console.error("Error deleting user:", error);
                  window.alert("Could not delete the data");
                });
            }
            console.log("Delete clicked for ID:", bookId);
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <DataTable columns={columns} data={data?.data?.response ?? []} />
    </div>
  );
};

export default BookDashboard;
