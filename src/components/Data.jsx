import React, { useEffect, useState } from "react";
import axios from "axios";
import Showdata from "./Showdata";

function Data() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Selected User
  const [selectedUser, setSelectedUser] = useState(null);

  // Fetch Users
  const fetchUsers = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );

      setUsers(response.data);
    } catch (error) {
      console.log("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return(
    <Showdata users={users}/>

  );
}

export default Data;

