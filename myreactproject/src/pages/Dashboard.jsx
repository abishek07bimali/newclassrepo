import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { deleteUserById, getUser } from '../api/api';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getallusers = async () => {
      try {
        const response = await getUser();
        if (response?.data?.success) {
          setData(response?.data?.users);
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        toast.error(error?.response?.data?.message);
      } finally {
        setLoading(false);
      }
    };
    getallusers();
  }, [])

  const handleEdit = (id) => {
    navigate(`/edit-user/${id}`);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");
    if (!confirmDelete) return;

    try {
      const response = await deleteUserById(id);
      if (response?.data?.success) {
        setData(prevData => prevData.filter(user => user.id !== id)); // yesle state bata yo id vako user lai remove garxa ra frontend ma dekhidaina or you can call the get function also 

        // get function call garna lai mathi useEffect bhitra vako function lai bahira rakhne ani tyo function lai on suffessful delete huda call garne (not good aproach)
        return toast.success(response?.data?.message);
      }
      else {
        return toast.error(response?.data?.message);
      }

    }
    catch (err) {
      toast.error(err?.response?.data?.message)
    }
  };


  if (loading) return <p>Loading data...</p>;

  return (
    <div>
      <table className="min-w-full border-collapse border border-gray-300 mt-10">
        <thead className="bg-green-600 text-white">
          <tr>
            <th className="py-3 px-4 border border-gray-300 text-left">Id</th>
            <th className="py-3 px-4 border border-gray-300 text-left">Email</th>
            <th className="py-3 px-4 border border-gray-300 text-left">Username</th>
            <th className="py-3 px-4 border border-gray-300 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user,index) => (
            <tr
              key={user.id}
              className="even:bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <td className="py-2 px-4 border border-gray-300">{index+1}</td>
              <td className="py-2 px-4 border border-gray-300">{user.email}</td>
              <td className="py-2 px-4 border border-gray-300">{user.username}</td>
              <td className="py-2 px-4 border border-gray-300">
                <button
                  onClick={() => handleEdit(user.id)}
                  className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded mr-2 transition"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded transition"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default Dashboard;
