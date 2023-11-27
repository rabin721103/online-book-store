import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import DataTable from "../components/DataTable";
import { getUsers } from "../../services/starWarsCharater";
import axiosInstance from "../../../axiosInstance";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getUsers"],
    queryFn: getUsers,
    onError: (error) => {
      console.error("Error fetching users:", error);
    },
  });

  const columns = useMemo(() => {
    return [
      {
        accessorKey: "userId",
        header: "userId",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "username",
        header: "username",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "email",
        header: "email",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "role",
        header: "role",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "actions",
        header: "Actions",
        cell: ({ row }) => {
          const userId = row.original.userId;

          const handleEdit = () => {
            console.log("Edit clicked for ID:", userId);
            navigate(`/admin/edituser/${userId}`);
          };

          const handleDelete = () => {
            console.log("Delete clicked for ID:", userId);
            const confirmDelete = window.confirm(
              "Are you sure you want to delete this user?"
            );
            if (confirmDelete) {
              axiosInstance
                .delete(`/user/${userId}`)
                .then(() => {
                  refetch();
                  console.log("Delete successful for ID:", userId);
                  // window.confirm("Deleted Successfully....");
                  window.alert("Successfully deleted");
                })
                .catch((error) => {
                  console.error("Error deleting user:", error);
                  window.alert("Could not delete the data");
                });
            }
          };

          return (
            <div>
              <button
                className="btn btn-primary"
                onClick={() => handleEdit(userId)}
              >
                Update
              </button>
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(userId)}
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

export default UserDashboard;
