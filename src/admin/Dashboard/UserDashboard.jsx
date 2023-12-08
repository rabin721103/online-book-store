import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import DataTable from "../components/DataTable";
import { getUsers } from "../../services/starWarsCharater";
import axiosInstance from "../../../axiosInstance";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { emitSuccessToast, emitWarnToast } from "../../toastify/ToastEmitter";

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
        header: "UserId",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "username",
        header: "Username",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "email",
        header: "E-mail",
        cell: ({ getValue }) => {
          return <div>{getValue()}</div>;
        },
      },
      {
        accessorKey: "role",
        header: "Role",
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
            navigate(`/admin/edituser/${userId}`);
          };

          const handleDelete = () => {
            console.log("Delete clicked for ID:", userId);
            const confirmDelete = window.confirm(
              "Are you sure you want to delete this user?"
            );
            if (confirmDelete) {
              axiosInstance
                .delete(`/admin/users/${userId}`)
                .then(() => {
                  refetch();
                  toast.success("Successfully deleted user..");
                })
                .catch((error) => {
                  console.error("Error deleting user:", error);
                  toast.error("Could not delete data...");
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
