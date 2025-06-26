import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { getUser } from '../api/api';
import toast from 'react-hot-toast';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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

  // const handleEdit = (id) => {
  //   navigate(`/edit-user/${id}`);
  // };

  // const handleDelete = (id) => {
  //   toast.success(`Delete user with ID: ${id}`);
  // };

  useEffect(() => {
    getallusers();
  }, []);

  if (loading) return <p>Loading data...</p>;

  return (
    <div>
      <table border="1" cellPadding="5" cellSpacing="0">
        <thead>
          <tr>
            <th>Email</th>
            <th>Username</th>
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>
                {/* <button onClick={() => handleEdit(user.id)}>Edit</button>{' '}
                <button onClick={() => handleDelete(user.id)}>Delete</button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
