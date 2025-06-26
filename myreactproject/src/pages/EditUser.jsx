import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import { getUserById, updateUser } from '../api/api'; 
import toast from 'react-hot-toast';

const EditUser = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ username: '', email: '' });

  useEffect(() => {
    // const fetchUser = async () => {
    //   try {
    //     const res = await getUserById(id);
    //     setFormData(res.data.user);
    //   } catch (err) {
    //     toast.error("Failed to fetch user.");
    //   }
    // };
    // fetchUser();
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateUser(id, formData);
//       toast.success("User updated successfully!");
//     } catch (err) {
//       toast.error("Update failed.");
//     }
//   };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit User</h2>
      <input
        type="text"
        name="username"
        value={formData.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <br />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <br />
      <button type="submit">Save</button>
    </form>
  );
};

export default EditUser;
